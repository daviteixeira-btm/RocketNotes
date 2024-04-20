import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { Textarea } from "../../Components/Textarea";

import { Container, Form } from "./styles";

import { NoteItem } from "../../Components/NoteItem";
import { Section } from "../../Components/Section";

export function New(){
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <a href="/">voltar</a>
                    </header>

                    <Input
                        placeholder="Título"
                    />

                    <Textarea placeholder="Observações" />

                    <Section title="Links úteis">
                        <NoteItem value="https://rocketseat.com.br" />
                        <NoteItem isNew placeholder="Novo link" />
                    </Section>
                </Form>
            </main>
        </Container>
    )
}