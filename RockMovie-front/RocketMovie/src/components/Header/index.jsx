import { Container } from './styles'

export function Header(){
    return(
        <Container>
            <h1>RocketMovies</h1>
    
            <div>                
                <span>
                    <strong>Vinicius Sousa</strong>
                    sair
                </span>
                <img src="https://github.com/viniciusxsousa.png" alt="Foto do usuário" />
            </div>
        </Container>
    )
}