import { Container, Content, Textarea } from "./styles";

import { Header } from '../../components/Header'
import { ButtonTxt } from '../../components/ButtonTxt'
import { Input } from "../../components/Input";
import { Button } from '../../components/Button'

export function New() {
    return(
        <Container>
            <Header/>

            <main>
                <Content>
                    <ButtonTxt icon title='voltar'/>

                    <h2>Novo Filme</h2>

                    <div className="inputs">
                        <Input type='text' placeholder='Título'/>
                        <Input type='number' placeholder='Sua nota (de 0 a 5)'/>
                    </div>

                    <Textarea placeholder="Observações"/>

                    <h3>Marcadores</h3>

                    <div className="marcadores">

                    </div>

                    <div className="buttons">
                        <Button/>
                        <Button/>
                    </div>

                </Content>
            </main>

        </Container>
    )
}