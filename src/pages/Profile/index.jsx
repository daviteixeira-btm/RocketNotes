import { Container, Form } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

export function Profile(){
    return (
        <Container>
            <header>
                <a href="/">
                    <FiArrowLeft />
                </a>
            </header>

            <Form>
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
                    placeholder="Senha atual"
                />

                <Input
                    icon={FiLock} 
                    type="password"
                    placeholder="Nova senha"
                />

                <Button title="Salvar" />
            </Form>
        </Container>
    )
}