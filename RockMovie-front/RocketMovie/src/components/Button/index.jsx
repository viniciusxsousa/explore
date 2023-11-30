import { Container } from './styles'

export function Button({icon: Icon, title, isBlack}){
    return(
        <Container isBlack={isBlack}>
            {Icon && <Icon/>}
            <p>{title}</p>
        </Container>
    )
}