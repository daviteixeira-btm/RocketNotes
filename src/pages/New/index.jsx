import { useState } from "react";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { Textarea } from "../../Components/Textarea";

import { Container, Form } from "./styles";

import { NoteItem } from "../../Components/NoteItem";
import { Section } from "../../Components/Section";
import { Button } from "../../Components/Button";

import { Link } from "react-router-dom";

export function New(){

    // Aqui será o estado que guarda todos os links
    const [links, setLinks] = useState([]);

    // Onde guardamos o novo link adicionado no momento
    const [newLink, setNewLink] = useState("");

    // Aqui será o estado que guarda todos as tags
    const [tags, setTags] = useState([]);

    // Onde guardamos a nova tag adicionado no momento
    const [newTag, setNewTag] = useState("");

    // Função que atualiza o nosso vetor de links, acessando tudo que tinha antes com o link novo
    function handleAddLink(){
        //acessamos o estado anterior para montar um novo veto, adicionando o novo link
        setLinks(prevState => [...prevState, newLink]);
        //Depois limpamos o estado
        setNewLink("");
    }

    // Função para remover o link
    function handleRemoveLink(deleted){
        // Retornamos uma nova lista com todos os links menos o que queremos deletar
        setLinks(prevState => prevState.filter(link => link !== deleted));
    }

    // Função que atualiza o nosso vetor de tags, acessando tudo que tinha antes com a tag nova
    function handleAddTag(){
        //acessamos o estado anterior para montar um novo veto, adicionando a nova tag
        setTags(prevState => [...prevState, newTag]);
        //Depois limpamos o estado
        setNewTag("");
    }

    // Função para remover a tag
    function handleRemoveTag(deleted){
        // Retornamos uma nova lista com todos as tags menos o que queremos deletar
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">voltar</Link>
                    </header>

                    <Input
                        placeholder="Título"
                    />

                    <Textarea placeholder="Observações" />

                    {/* Quando a função tem parametro, passamos em formato de arrow function */}
                    <Section title="Links úteis">
                        {
                            links.map((link, index) => (
                                <NoteItem 
                                    key={String(index)} 
                                    value={link}
                                    onClick={() => handleRemoveLink(link)}
                                />
                            ))
                        }
                        <NoteItem 
                            isNew
                            value={newLink}
                            placeholder="Novo Link"
                            onClick={handleAddLink}
                            onChange={event => setNewLink(event.target.value)}
                        />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            
                            {
                                tags.map((tag, index) => (
                                    <NoteItem
                                        key={String(index)} 
                                        value={tag}
                                        onClick={() => handleRemoveTag(tag)} 
                                    />
                                ))
                            }
                            
                            <NoteItem
                                isNew
                                value={newTag}
                                placeholder="Nova tag"
                                onClick={handleAddTag}
                                onChange={event => setNewTag(event.target.value)}
                            />
                        </div>
                    </Section>

                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    )
}