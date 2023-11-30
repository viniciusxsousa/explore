import { Container, Header, Form, Avatar } from "./styles";

import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
    return(
        <Container>
            <Header/>

            <Form>

                <Avatar>
                    <img src="https://github.com/viniciusxsousa.png" alt="foto do usuário" />

                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input type='file' id='avatar'/>
                    </label>
                </Avatar>

                <Input icon={FiUser} type='text' value='Vinicius Sousa'/>
                <Input icon={FiMail} type='mail' value='viniciusxsousa@outlook.com'/>
                <Input icon={FiLock} type='password' placeholder='Senha atual'/>
                <Input icon={FiLock} type='password' placeholder='Nova senha'/>

                <Button title='Salvar'/>

            </Form>
        </Container>
    )
}