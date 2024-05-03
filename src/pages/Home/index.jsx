import { useState, useEffect } from "react";
import { FiPlus, FiSearch } from "react-icons/fi";

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { Note } from "../../Components/Note";
import { Section } from "../../Components/Section"
import { ButtonText } from "../../Components/ButtonText";
import { api } from "../../services/api";

export function Home(){

    const [tags, setTags] = useState([]);

    const [tagsSelected, setTagsSelected] = useState([]);

    // Estado para guardar o conteúdo da pesquisa
    const [search, setSearch] = useState("");

    const [notes, setNotes] = useState([]);

    // Função para lidar com a seleção das tags
    function handleTagSelected(tagName){
        const alreadSelected = tagsSelected.includes(tagName);

        if(alreadSelected){
            const filteredTags = tagsSelected.filter(tag => tag !== tagName);
            setTagsSelected(filteredTags);
        }else{
            // Guardamos as tags selecionadas
            setTagsSelected(prevState => [...prevState, tagName]);
        }
    }

    useEffect(() => {
        // Funcionalidade de carregar as tags que servem de filtro de pesquisa
        async function fetchTags(){
            // Pegamos o resultado da api
            const response = await api.get("/tags");
            // Armaznamos os dados da resposta
            setTags(response.data);
        }

        fetchTags();
    }, []);

    /* Esse useEffect tem duas dependências: Quando mudar o conteúdo do search ou da tagsSelected, o useEffec
    vai executar de novo, assim a pesquisa vai recarregar com o filtro que o usúario está aplicando naquele 
    momento e o search conforme ele for digitando, refletindo na interface. */
    useEffect(() => {
        // Função de buscar pelas notas
        async function fetchNotes(){
            // Enviamos a requisição atraves de uma query
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
            setNotes(response.data);
        }

        fetchNotes();
    }, [tagsSelected, search]);

    return (
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ButtonText 
                        title="Todos" 
                        $isactive={tagsSelected.length === 0}
                        onClick={() => handleTagSelected("all")} 
                    />
                </li>
                {
                    tags && tags.map(tag => (
                        <li 
                            key={String(tag.id)}
                        >
                            <ButtonText 
                                title={tag.name} 
                                $isactive={tagsSelected.includes(tag.name)}
                                onClick={() => handleTagSelected(tag.name)} 
                            />
                        </li>
                    ))
                }
            </Menu>

            <Search>
                <Input 
                    icon={FiSearch}
                    placeholder="Pesquisar pelo título" 
                    onChange={event => setSearch(event.target.value)} 
                />
            </Search>

            <Content>
                <Section title="Minhas notas">
                    {
                        notes.map(note => (
                            <Note
                                data={note}
                                key={String(note.id)}
                            />
                        ))
                    }
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus />
                Criar nota
            </NewNote>

        </Container>
    )
}