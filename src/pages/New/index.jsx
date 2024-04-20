import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";

import { Container, Form } from "./styles";

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
                </Form>
            </main>
        </Container>
    )
}