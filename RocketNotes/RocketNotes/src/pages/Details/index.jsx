import { Conteiner, Links, Content } from "./styles" 

import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from '../../components/Tag'
import { ButtonText } from "../../components/ButtonText"

export function Details() {
    return (
        <Conteiner>

            <Header></Header>

            <main>
                <Content>

                    <ButtonText title="Excluir Nota"/>

                    <h1>Introdução ao React</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rerum illum fugiat vitae facere soluta vero architecto, nemo obcaecati quia hic repudiandae quae quas. Pariatur, repellendus. At, unde officia vel iste ab voluptatem voluptates quaerat voluptatum consequatur provident dolorum alias natus expedita. Officiis iure excepturi, corrupti molestias doloremque reprehenderit quasi!</p>

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

                </Content>
            </main>

        </Conteiner>
    )
}