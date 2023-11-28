import { Container, Background, Forms } from './styles'
import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiMail, FiUser, FiLock } from 'react-icons/fi'

export function SignUp() {
    return(
        <Container>
            <Background/>

            <Forms>

                <h1>Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>

                <Input
                    icon={FiUser} 
                    placeholder='Nome'
                    type="text"
                />

                <Input 
                    icon={FiMail}
                    placeholder='E-mail'
                    type='email'
                />

                <Input
                    icon={FiLock}
                    placeholder='Senha'
                    type='password'
                />

                <Button title='Cadastrar'/>

                <Link to='/'>Voltar para o login</Link>

            </Forms>


        </Container>
    )
}