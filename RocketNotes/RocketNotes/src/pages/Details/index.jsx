import { Conteiner, Links } from "./styles" 

import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"

export function Details() {
    return (
        <Conteiner>
            <Header></Header>

            <Section title='Links úteis'>
                <Links>
                    <li><a href="#">item 1</a></li>
                    <li>item 2</li>
                    <li>item 3</li>
                </Links>
            </Section>

            <Button title="Salvar"/>
        </Conteiner>
    )
}