// Destro deste arquivo, deixamos as configurações do axios

/* O Axios é uma biblioteca para conseguirmos trabalhar com requisições HTTP, 
assim podemos consumir a API do nosso back-end */

import axios from "axios";

export const api = axios.create({
    // Aqui, podemos incluir a parte do endereço da API que se repete em todas as requisições
    baseURL: "http://localhost:3333"
});