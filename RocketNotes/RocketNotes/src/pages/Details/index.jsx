import { Conteiner, Links } from "./styles" 

import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from '../../components/Tag'
import { ButtonText } from "../../components/ButtonText"

export function Details() {
    return (
        <Conteiner>
            <Header></Header>

            <ButtonText title="Excluir Nota"/>

            <Section title='Links úteis'>
                <Links>
                    <li><a href="#">item 1</a></li>
                    <li>item 2</li>
                    <li>item 3</li>
                </Links>
            </Section>

            <Section title='Marcadores'>
                <Tag title='express'/>
                <Tag title='node.js'/>
            </Section>

            <Button title="Salvar"/>
        </Conteiner>
    )
}