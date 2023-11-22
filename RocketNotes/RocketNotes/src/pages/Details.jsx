import { Conteiner } from "./styles" 

import { Button } from "../components/Button"

export function Details() {
    return (
        <Conteiner>
            <h1>Fala pivete!</h1>
            <Button title="Salvar"/>
            <Button title="Salvar" loading/>
        </Conteiner>
    )
}