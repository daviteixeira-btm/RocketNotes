import { useState } from "react";
import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar.png";

// Importamos para poder carregar as informações do usuário
import { useAuth } from "../../hooks/auth";

export function Profile(){

    // Pegamos as informações do usuário logado a partir do contexto
    const { user, updateProfile } = useAuth();

    // Os campos de 'name' e 'email' são carregados automaticamente
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    // Os campos de senha não são por motivos de segurança
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    // Estado para caso o usuário já tenha um avatar
    const [avatar, setAvatar] = useState(avatarUrl);

    // Usado para carregar a nova imagem selecionada pelo usuário
    const [avatarFile, setAvatarFile] = useState(null);

    const navigate = useNavigate();

    // Função de voltar a página para o início
    function handleBack(){
        // Com o '-1' ele vai voltar para a rota anterior no eu historico de navegação
        navigate(-1);
    }

    // Função para lidar com o update do usuário
    async function handleUpdate(){

        // Mandamos tudo em um objeto chamado user
        const updated = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }

        /* Como estamos mandando o user sem o avatar, para que ele não seja perdido 
        em uma atualização de perfil quando o usuário salvar, usamos o 'Object.assing' 
        para fazer a combinação dos valores. */
        const userUpdated = Object.assign(user, updated);

        await updateProfile({ user: userUpdated, avatarFile });
    }

    function handleChangeAvatar(event){

        // De dentro do evento vamos pegamos o arquivo
        const file = event.target.files[0];
        setAvatarFile(file);

        // gerar url para atualizar o estado que exibe o avatar
        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

    return (
        <Container>
            <header>
                <button type="button" onClick={handleBack}>
                    <FiArrowLeft />
                </button>
            </header>

            <Form>

                <Avatar>
                    <img 
                        src={avatar} 
                        alt="Foto do usuário" 
                    />

                    <label htmlFor="avatar">
                        <FiCamera />
                        
                        <input 
                            id="avatar"
                            type="file"
                            onChange={handleChangeAvatar}
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

                <Button title="Salvar" onClick={handleUpdate} />
            </Form>
        </Container>
    )
}