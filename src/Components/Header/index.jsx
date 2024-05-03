import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./style";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar.png";
import { useNavigate } from "react-router-dom";

export function Header(){

    const { singOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const navigate = useNavigate();
    
    // Função para deslogar o usuário
    function handleSingOut(){
        // Levamos o usuer para a tela inicial e para deslogar
        navigate("/");
        singOut();
    }

    return (
        <Container>
            <Profile to="/profile">
                <img 
                    src={avatarUrl}
                    alt={user.name}
                />

                <div>
                    <span>Bem-vindo,</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={handleSingOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}