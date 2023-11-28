import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Section } from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'

import {Container, Form} from './styles'

export function New(){
    return(
        <Container>
            <Header></Header>

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <a href="/">Voltar</a>
                    </header>

                    <Input placeholder='Título'/>
                    <TextArea placeholder='Observações' />
                        
                    <Section title='Links úteis'>
                        <NoteItem value='https://vscd.com.br'/>
                        <NoteItem isNew placeholder='Novo link'/>
                    </Section>

                    <Section title='Marcadores'>
                        <div className='tags'>
                            <NoteItem value='React'/>
                            <NoteItem isNew placeholder='Novo marcador'/>
                        </div>
                    </Section>

                    <Button title='Salvar'/>

                </Form>
            </main>
        </Container>
    )
}