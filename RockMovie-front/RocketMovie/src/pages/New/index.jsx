import { Container, Content, Textarea } from "./styles";

import { Header } from '../../components/Header'
import { ButtonTxt } from '../../components/ButtonTxt'
import { Input } from "../../components/Input";
import { Button } from '../../components/Button'
import { TagItens } from "../../components/TagItens";

export function New() {
    return(
        <Container>
            <Header/>

            <main>
                <Content>
                    <ButtonTxt icon title='voltar' to='/'/>

                    <h2>Novo Filme</h2>

                    <div className="inputs">
                        <Input type='text' placeholder='Título'/>
                        <Input type='number' placeholder='Sua nota (de 0 a 5)'/>
                    </div>

                    <Textarea placeholder="Observações"/>

                    <h3>Marcadores</h3>

                    <div className="marcadores">
                        <TagItens value='React'/>
                        <TagItens placeholder='Novo Marcador' isNew/>
                    </div>

                    <div className="buttons">
                        <Button title='Excluir filme' isBlack/>
                        <Button title='Salvar alterações'/>
                    </div>

                </Content>
            </main>

        </Container>
    )
}