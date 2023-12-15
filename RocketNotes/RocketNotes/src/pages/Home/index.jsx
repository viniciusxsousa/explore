import { useEffect, useState } from 'react'

import { api } from '../../services/index'

import { Container,  Brand, Menu, Search, Content, NewNote} from './styles'

import {ButtonText} from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { FiPlus, FiSearch} from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'

export function Home(){
    const [tags, setTags] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);

    function handleTagSelected(tagName) {
        const alredyTag = tagsSelected.includes(tagName);

        if(alredyTag) {
            const tagsFilter = tagsSelected.filter(tag => tag !== tagName);
            setTagsSelected(tagsFilter);
        } else {
            setTagsSelected(prevState => [...prevState, tagName]);
        }

    }
    
    const notas = [
        {title: 'Exemplo 01', tags: [{id: 1, name: 'react'}, {id: 2, name: 'Node.js'}]},
        {title: 'Exemplo 02', tags: [{id:3, name: 'HTML'}]}
    ]
    
    useEffect(() => {

        async function loadTags() {
           const response =  await api.get('/tags');

           setTags(response.data);
        }

        loadTags();

    }, [])


    return (
        <Container>

            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header></Header>

            <Menu>

                <li>
                    <ButtonText 
                        title='Todos' 
                        onClick={() => setTagsSelected([])}
                        isActived={tagsSelected.length === 0}
                    />
                </li>

                { tags && tags.map( tag => (
                    <li key={String(tag.id)} >
                        <ButtonText 
                            title={tag.name} 
                            onClick={() => handleTagSelected(tag.name)}
                            isActived={tagsSelected.includes(tag.name)}
                        />
                    </li>
                )) }

            </Menu>

            <Search>
                <Input icon={FiSearch} placeholder='Pesquise pelo título'/>
            </Search>

            <Content>
                <Section title="Minha notas">
                    { 
                        notas.map( nota => <Note data={nota}/> )
                    }
                </Section>
            </Content>

            <NewNote to='/new'>
                <FiPlus/>
                Criar nota
            </NewNote>

        </Container>
    )
}