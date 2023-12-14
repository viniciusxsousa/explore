import { RiShutDownLine } from 'react-icons/ri';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { useAuth } from '../../hook/auth';

import { api } from '../../services/index'

import { Conteiner, Profile, Logout} from "./styles";

export function Header(){
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/file/${user.avatar}` : avatarPlaceholder

    return (
        <Conteiner>
            <Profile to='/profile'>
                <img 
                    src={avatarUrl}
                    alt={user.name}
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine/>
            </Logout>
        </Conteiner>
    )
}