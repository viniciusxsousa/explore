import { Container } from './styles'

import { Input } from '../Input'

export function Header(){
    return(
        <Container>
            <h1>RocketMovies</h1>
            
            <Input type='text' placeholder='Pesquise pelo título'/>

            <div className='profile'>                
                <span>
                    <strong>Vinicius Sousa</strong>
                    sair
                </span>
                <img src="https://github.com/viniciusxsousa.png" alt="Foto do usuário" />
            </div>
        </Container>
    )
}