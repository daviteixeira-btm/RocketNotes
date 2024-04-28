import { BrowserRouter } from "react-router-dom";

// Importamos o Hook de autenticação
import { useAuth } from "../hooks/auth";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes(){
    // para acessar nosso usuário
    const { user } = useAuth();

    return (
        <BrowserRouter>
            {/*Aqui fazemos o redirecionamento de rotas se o usuário está conectado ou não */}
            {user ? <AppRoutes /> : <AuthRoutes />}
        </BrowserRouter>
    )
}