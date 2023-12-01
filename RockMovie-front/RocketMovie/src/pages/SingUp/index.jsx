import { Container, Form, BackgroundImg } from './styles'

import { FiUser, FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonTxt } from '../../components/ButtonTxt'

export function SingUp(){
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input icon={FiUser} type='text' placeholder='Nome' />
                <Input icon={FiMail} type='email' placeholder='E-mail' />
                <Input icon={FiLock} type='password' placeholder='Senha' />

                <Button title='Cadastrar' />

                <ButtonTxt title='Voltar para o login' icon />

            </Form>
            <BackgroundImg/>
        </Container>
    )
}