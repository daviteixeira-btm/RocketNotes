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

    // Função que atualiza o nosso vetor de links, acessando tudo que tinha antes com o link novo
    function handleAddLink(){
        //acessamos o estado anterior para montar um novo veto, adicionando o novo link
        setLinks(prevState => [...prevState, newLink]);
        //Depois limpamos o estado
        setNewLink("");
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

                    <Section title="Links úteis">
                        {
                            links.map((link, index) => (
                                <NoteItem 
                                    key={String(index)} 
                                    value={link}
                                    onClick={() => { }}
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
                            <NoteItem value="React" />
                            <NoteItem isNew placeholder="Novo tag" />
                        </div>
                    </Section>

                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    )
}