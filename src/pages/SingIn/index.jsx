import { useState } from "react";

import { Container, Form, Background } from "./styles";

import { Input } from "../../Components/Input";

import { FiMail, FiLock } from "react-icons/fi";

import { Button } from "../../Components/Button";

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

export function SingIn(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Aqui podemos usar o nosso hook de contexto 
    const { singIn } = useAuth();

    // Aqui, criamos uma função para lidar com a interação com o usuário
    function handleSingIn(){
        singIn({ email, password })
    }

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
                    onChange={event => setEmail(event.target.value)}
                />

                <Input
                    icon={FiLock}
                    type="password"
                    placeholder="Senha"
                    onChange={event => setPassword(event.target.value)}
                />

                <Button title="Entrar" onClick={handleSingIn} />

                <Link to="/register">
                    Criar conta
                </Link>
            </Form>

            <Background />
        </Container>
    )
}