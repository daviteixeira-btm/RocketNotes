import { useState } from "react";
import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { Link } from "react-router-dom";

// Importamos para poder carregar as informações do usuário
import { useAuth } from "../../hooks/auth";

export function Profile(){

    // Pegamos as informações do usuário logado a partir do contexto
    const { user } = useAuth();

    // Os campos de 'name' e 'email' são carregados automaticamente
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    // Os campos de senha não são por motivos de segurança
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Form>

                <Avatar>
                    <img 
                        alt="Foto do usuário" 
                        src="https://github.com/daviteixeira-btm.png" 
                    />

                    <label htmlFor="avatar">
                        <FiCamera />
                        
                        <input 
                            id="avatar"
                            type="file"
                        />
                    </label>
                </Avatar>

                <Input
                    type="text"
                    value={name}
                    icon={FiUser} 
                    placeholder="Nome"
                    onChange={event => setName(event.target.value)}
                />

                <Input
                    type="text"
                    value={email}
                    icon={FiMail} 
                    placeholder="E-mail"
                    onChange={event => setEmail(event.target.value)}
                />

                <Input
                    icon={FiLock} 
                    type="password"
                    placeholder="Senha atual"
                    onChange={event => setPasswordOld(event.target.value)}
                />

                <Input
                    icon={FiLock} 
                    type="password"
                    placeholder="Nova senha"
                    onChange={event => setPasswordNew(event.target.value)}
                />

                <Button title="Salvar" />
            </Form>
        </Container>
    )
}