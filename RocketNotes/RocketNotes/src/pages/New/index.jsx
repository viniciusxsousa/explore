import { Link } from 'react-router-dom'
import { useState } from 'react'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Section } from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'

import {Container, Form} from './styles'

export function New(){
    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState('');

    function handleAddLink() {
        setLinks(prevState => [...prevState, newLink]);
        setNewLink('');
    }

    function handleRemoveLink(remove) {
        setLinks(prevState => prevState.filter(link => link !== remove));
    }


    return(
        <Container>
            <Header></Header>

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to='/'>Voltar</Link>
                    </header>

                    <Input placeholder='Título'/>
                    <TextArea placeholder='Observações' />
                        
                    <Section title='Links úteis'>
                        {links.map((link, index) => (
                            <NoteItem 
                                key={String(index)} 
                                value={link}
                                onClick={() => handleRemoveLink(link)} 
                            />
                        ))}
                        <NoteItem 
                            isNew 
                            placeholder='Novo link'
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
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