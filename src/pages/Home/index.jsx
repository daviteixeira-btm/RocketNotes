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
                <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note 
                        data={{ 
                            title: "React", 
                            tags: [
                                { id: "1", name: "react"},
                                { id: "2", name: "rocketseat"},
                            ]
                        }} 
                    />
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus />
                Criar nota
            </NewNote>

        </Container>
    )
}