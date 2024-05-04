// Importação do Context API do React

/* Usamos o contexto para centralizar os dados do usuário em um 
único lugar para poder ser buscado em toda a aplicação */
import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

// Contexto de autenticação do usuário
function AuthProvider({ children }){

    const [data, setData] = useState({});

    // Função de autenticação
    async function singIn({ email, password }){

        /* Como estamos fazendo uma requisição via web, não sabemos que tipos de erro podem acontecer 
        na comunicação com o servidor back-end, desta forma usamo o try/catch para indetificar o erro.*/
        try {
            const response = await api.post("/sessions", { email, password });
            
            // Desestruturamos o user e o token, pois só queremos essas informações da resposta da requisição
            const { user, token } = response.data;

            /* Pegando as informações do usuário e armazenando no storage do navegador 
                - Usamos o 'JSON.stringify' para transformar o objeto em texto */
            localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
            localStorage.setItem("@rocketnotes:token", token);
            
            /* Aqui inserimos o token do usuário no cabeçalho de autenticação para que a partir do momento que 
            o usuário está logado, ele possa fazer todas as outras requisições authenticado*/
            
            /* Aqui inserimos um token do tipo Bearer de autorização no cabeçalho por padrão de todas as requisições 
            que o usuário vai fazer */
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;


            // Aqui, quardamos essas informações no estado
            setData({ user, token });

        } catch (error) {
            // Se o error tiver uma resposta
            if(error.response){
                // Exibimos a resposta vinda do back-end
                alert(error.response.data.message)
            }else{
                // Se não, exibimos uma mensagem genérica
                alert("Não foi possível fazer o login...")
            }
        }
    }

    // Função de Logout
    function singOut(){
        // Removemos as informações do user do localStorage
        localStorage.removeItem("@rocketnotes:user");
        localStorage.removeItem("@rocketnotes:token");

        // Voltamos o estado para um objeto vazio
        setData({});
    }

    //Função de atualizar o usuário
    async function updateProfile({ user, avatarFile }){
        try {

            // Se existir um arquivo selecionado
            if(avatarFile){
                // Precisamos enviar ele como um arquivo
                const fileUploadForm = new FormData();

                // adicionamos um 'append' para inserir o campo avatar dentro do formulário
                fileUploadForm.append("avatar", avatarFile);

                const response = await api.patch("/users/avatar", fileUploadForm);
                
                // Esperamos que a resposta devolva o avatar com o conteudo atualizado
                user.avatar = response.data.avatar;
            }
            
            await api.put("/users", user);
            // Aqui atualizamos as informações do localStorage
            localStorage.setItem("@rocketnotes:user", JSON.stringify(user));

            // Aqui atualizamos as informações no estado
            setData({ user, token: data.token });

            alert("Perfil atualizado!");

        } catch (error) {
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert("Não foi possível atualizar o perfil");
            }
        }
    }

    /* Com o 'useEffect' é possivel, quando recarregarmos a página ou fechar o navegador e abrir de novo 
    podemos buscar as informações do usuário no 'localStorage' e preencher o estado para refletir nos lugares 
    que estão usando o estado. */
    useEffect(() => {
        const user = localStorage.getItem("@rocketnotes:user");
        const token = localStorage.getItem("@rocketnotes:token");

        // Garantir que o token e o user foram informados
        if(token && user){

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user) // Pegamos os dados do usuário que estava em formato de texto e transformamos para objeto
            });
        }
    }, []); // O vetor vazio significa que ele só vai ser recarregado uma vez apos a renderização do componente

    return (
        /* Podemos compartilhar funções e o estado do usuário no nosso provider para serem acessadas 
        em outro lugar por meio do contexto */
        <AuthContext.Provider 
            value={{ 
                singIn, 
                singOut,
                updateProfile,
                user: data.user,
            }}
        >
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