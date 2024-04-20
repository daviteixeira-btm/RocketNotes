import { Container, Form, Background } from "./styles";

import { Input } from "../../Components/Input";

import { FiMail, FiLock, FiUser } from "react-icons/fi";

import { Button } from "../../Components/Button";

import { Link } from "react-router-dom";

export function SingUp(){
    return (
        <Container>

            <Background />

            <Form>
                <h1>RocketNotes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>

                <Input
                    type="text"
                    icon={FiUser}
                    placeholder="Nome"
                />

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

                <Button title="Cadastrar" />

                <Link to="/">
                    Voltar para o login
                </Link>
            </Form>
        </Container>
    )
}