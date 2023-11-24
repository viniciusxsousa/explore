import { Container,  Brand, Menu, Search, Content, NewNote} from './styles'

import {ButtonText} from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { FiPlus, FiSearch} from 'react-icons/fi'
import { Input } from '../../components/Input'

export function Home(){
    return (
        <Container>

            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header></Header>

            <Menu>

                <li><ButtonText title='Todos' isActived/></li>
                <li><ButtonText title='React'/></li>
                <li><ButtonText title='Node.js'/></li>

            </Menu>

            <Search>
                <Input icon={FiSearch} placeholder='Pesquise pelo título'/>
            </Search>

            <Content></Content>

            <NewNote>
                <FiPlus/>
                Criar nota
            </NewNote>

        </Container>
    )
}