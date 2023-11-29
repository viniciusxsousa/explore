import { Container } from './styles'

export function Button({icon: Icon}){
    return(
        <Container>
            {Icon && <Icon/>}
            <p>Adicionar filme</p>
        </Container>
    )
}