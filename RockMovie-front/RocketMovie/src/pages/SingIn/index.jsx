import { Container, Form, BackgroundImg } from './styles'

import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonTxt } from '../../components/ButtonTxt'


export function SingIn() {
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input icon={FiMail} type='email' placeholder='E-mail'/>
                <Input icon={FiLock} type='password' placeholder='Senha'/>

                <Button title='Entrar'/>

                <ButtonTxt title='Criar conta'/>

            </Form>
            <BackgroundImg/>
        </Container>
    )
}