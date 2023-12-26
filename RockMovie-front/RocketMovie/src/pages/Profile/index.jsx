import { useState } from 'react'
import { useAuth } from '../../hooks/auth';
import { Container, Header, Form, Avatar } from "./styles";

import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonTxt } from "../../components/ButtonTxt";

export function Profile() {
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState('');
    const [passwordNew, setPasswordNew] = useState('');

    function handleUpdateProfile() {
        const user = {
            name,
            email,
            old_password: passwordOld,
            password: passwordNew
        }

        updateProfile(user);

    }

    return(
        <Container>
            <Header>
                <ButtonTxt icon title='voltar' to='/'/>
            </Header>

            <Form>

                <Avatar>
                    <img src="https://github.com/viniciusxsousa.png" alt="foto do usuário" />

                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input type='file' id='avatar'/>
                    </label>
                </Avatar>

                <Input 
                    icon={FiUser} 
                    type='text' 
                    value={name} 
                    onChange={e => setName(e.target.value)}
                />

                <Input 
                    icon={FiMail} 
                    type='mail' 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    icon={FiLock} 
                    type='password' 
                    placeholder='Senha atual'
                    onChange={e => setPasswordOld(e.target.value)}
                />

                <Input 
                    icon={FiLock} 
                    type='password' 
                    placeholder='Nova senha'
                    onChange={e => setPasswordNew(e.target.value)}
                />

                <Button type='button' title='Salvar' onClick={handleUpdateProfile}/>

            </Form>
        </Container>
    )
}