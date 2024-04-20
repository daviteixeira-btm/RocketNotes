import { Container, Form, Background } from "./styles";

import { Input } from "../../Components/Input";

import { FiMail, FiLock } from "react-icons/fi";

import { Button } from "../../Components/Button";

export function SingIn(){
    return (
        <Container>
            <Form>
                <h1>RocketNotes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça o seu login</h2>

                <Input
                    type="text"
                    icon={FiMail}
                    placeholder="E-mail"
                />

                <Input
                    icon={FiLock}
                    type="password"
                    placeholder="Senha"
                />

                <Button title="Entrar" />

                <a href="#">
                    Criar conta
                </a>
            </Form>

            <Background />
        </Container>
    )
}