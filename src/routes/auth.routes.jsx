import { Routes, Route, Navigate } from "react-router-dom";

import { SingIn } from "../pages/SingIn";
import { SingUp } from "../pages/SingUp";

export function AuthRoutes(){

    const user = localStorage.getItem("@rocketnotes:user");

    return (
        <Routes>
            <Route path="/" element={<SingIn />} />
            <Route path="/register" element={<SingUp />} />

            {/* Rota de redirecionamento para a de SingIn caso o usuário digite uma url inválida */}
            {/* Caso alguma nota seja salva nos favoritos, nos apenas redirecionamos se o usuário for nulo */}
            { !user && <Route path="*" element={<Navigate to="/" />} /> }
        </Routes>
    )
}