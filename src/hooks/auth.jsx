// Importação do Context API do React

/* Usamos o contexto para centralizar os dados do usuário em um 
único lugar para poder ser buscado em toda a aplicação */
import { createContext, useContext } from "react";

export const AuthContext = createContext({});

// Contexto de autenticação do usuário
function AuthProvider({ children }){
    return (
        <AuthContext.Provider value={{ email: 'davi@email.com' }}>
            {children}
        </AuthContext.Provider>
    )
}

/* Criamos o contexto como se fosse um hook para conseguir encapsular para conseguir 
reaproveitar ele na aplicação */
function useAuth(){
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };