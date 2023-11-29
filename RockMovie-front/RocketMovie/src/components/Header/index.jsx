import { Container } from './styles'

import { FiSearch } from 'react-icons/fi'

import { Input } from '../Input'

export function Header(){
    return(
        <Container>
            <h1>RocketMovies</h1>
            
            <Input icon={FiSearch} type='text' placeholder='Pesquise pelo título'/>

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