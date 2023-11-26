import { Container, Header, Form } from './styles'

import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile(){
    return(
        <Container>
            <Header>
                <a href="/"> <FiArrowLeft/> </a>
            </Header>

            <Form>

                <Input
                    placeholder='Nome'
                    type='text'
                    icon={FiUser}
                />

                <Input
                    placeholder='E-mail'
                    type='email'
                    icon={FiMail}
                />

                <Input
                    placeholder='Senha atual'
                    type='password'
                    icon={FiLock}
                />

                <Input
                    placeholder='Nova senha'
                    type='password'
                    icon={FiLock}
                />

                <Button title='Salvar' />

            </Form>

        </Container>
    )
}