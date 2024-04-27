// O useState é um Hook do React para que possamos criar estados
import { useState } from "react";

// Para mandar as informações para o Back-end importamos nossa API
import { api } from "../../services/api";

import { Container, Form, Background } from "./styles";

import { Input } from "../../Components/Input";

import { FiMail, FiLock, FiUser } from "react-icons/fi";

import { Button } from "../../Components/Button";

import { Link, useNavigate } from "react-router-dom";

export function SingUp(){

    /* Dentro dos parênteses, colocamos o valor inicial e no vetor temos o valor do estado e a função para
    atualizar o estado */  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    // Essa função vai lidar com o cadastro do usuário
    function handleSingUp(){
        // Aqui, garantimos que o nome, email e a senha foram preenchidos pelo usuário
        if(!name || !email || !password){
            // Se não, é retornado essa mensagem e encerrado o fluxo da função
            return alert("Preencha todos os campos!");
        }

        /* Acessamos nossa API na rota de cadastro de usuários para enviar as informações
            - O 'then' é executado se deu tudo certo
            - O 'catch' é executado se alguma coisa deu errado */
        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuário cadastrado com sucesso!");
                // Qundo o usuário for cadastrado, na sequencia levamos ele para a tela de login
                navigate("/");
            })
            .catch(error => {
                // Verificamos se dentro do erro existe uma mensagem de resposta
                if(error.response){
                    // No Back-end criamos mensagens personalizadas de erro, assim capturamos elas e exibimos neste alert
                    alert(error.response.data.message);  
                }else{
                    // Se não for uma mensagem expecífica, mandamos uma genérica.
                    alert("Não foi possível cadastrar...");
                }
            });
    }

    return (
        <Container>

            <Background />

            <Form>
                <h1>RocketNotes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>

                {/* Precisamos capturar o nome, email e senha do usuário e armazena-lo na mémoria para
                enviar para o nosso Back-end, desta forma precisamos criar um estado para cada, para pegar
                essas informações de forma dinâmica. */}

                {/* Toda vez que o valor do input muda, o onChange dispara um evento, assim conseguimos 
                capturar o evento e transferimos oara a função de mudar o valor do estado. Pademos acessar o 
                valor por meio do '.target.value' dentro da arrow function. */}
                <Input
                    type="text"
                    icon={FiUser}
                    placeholder="Nome"
                    onChange={event => setName(event.target.value)}
                />

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

                {/* Toda vez que clicamos no botão, chamamos a função 'handleSingUp' */}
                <Button title="Cadastrar" onClick={handleSingUp} />

                <Link to="/">
                    Voltar para o login
                </Link>
            </Form>
        </Container>
    )
}