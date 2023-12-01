import { Container } from './styles'

import { FiSearch } from 'react-icons/fi'

import { Link } from 'react-router-dom'

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
                    <Link to='/profile'>
                        <img src="https://github.com/viniciusxsousa.png" alt="Foto do usuário" />
                    </Link>
            </div>
        </Container>
    )
}