import { Conteiner } from "./styles" 

import { Button } from "../components/Button"
import { Header } from "../components/Header"

export function Details() {
    return (
        <Conteiner>
            <Header></Header>
            <Button title="Salvar"/>
        </Conteiner>
    )
}