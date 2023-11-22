import { RiShutDownLine } from 'react-icons/ri';

import { Conteiner, Profile, Logout} from "./styles";

export function Header(){
    return (
        <Conteiner>
            <Profile>
                <img 
                    src="http://www.github.com/viniciusxsousa.png"
                    alt="Foto de perfil do usuário"
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Vinicius Sousa</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Conteiner>
    )
}