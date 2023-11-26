import { Container, Header, Form, Avatar } from './styles'

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile(){
    return(
        <Container>
            <Header>
                <a href="/"> <FiArrowLeft/> </a>
            </Header>

            <Form>
                <Avatar>
                    <img 
                        src="https://www.github.com/viniciusxsousa.png" 
                        alt="foto do usuário" 
                    />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input 
                            type="file"
                            id='avatar' 
                        />
                    </label>

                </Avatar>

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