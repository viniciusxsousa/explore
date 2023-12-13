import { RiShutDownLine } from 'react-icons/ri';

import { useAuth } from '../../hook/auth';

import { Conteiner, Profile, Logout} from "./styles";

export function Header(){
    const { signOut } = useAuth();

    return (
        <Conteiner>
            <Profile to='/profile'>
                <img 
                    src="http://www.github.com/viniciusxsousa.png"
                    alt="Foto de perfil do usuário"
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Vinicius Sousa</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine/>
            </Logout>
        </Conteiner>
    )
}