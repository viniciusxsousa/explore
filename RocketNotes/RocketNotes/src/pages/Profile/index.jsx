import { Container, Header, Form, Avatar } from './styles'

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hook/auth';
import { useState } from 'react';

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile(){
    const { user } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState('');
    const [passwordNew, setPasswordNew] = useState('');

    return(
        <Container>
            <Header>
                <Link to='/'> <FiArrowLeft/> </Link>
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
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder='E-mail'
                    type='email'
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder='Senha atual'
                    type='password'
                    icon={FiLock}
                    onChange={e => setPasswordOld(e.target.value)}
                />

                <Input
                    placeholder='Nova senha'
                    type='password'
                    icon={FiLock}
                    onChange={e => setPasswordNew(e.target.value)}
                />

                <Button title='Salvar' />

            </Form>

        </Container>
    )
}