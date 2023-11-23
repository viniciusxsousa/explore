import { Container,  Brand, Menu, Search, Content, NewNote} from './styles'

import { Header } from '../../components/Header'

export function Home(){
    return (
        <Container>

            <Brand>
                RocketNotes
            </Brand>

            <Header></Header>

            <Menu></Menu>

            <Search></Search>

            <Content></Content>

            <NewNote></NewNote>

        </Container>
    )
}