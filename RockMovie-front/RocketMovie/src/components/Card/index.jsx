import { Container } from './styles';

import { FaStar, FaRegStar } from 'react-icons/fa'

export function Card(){
    return(
        <Container>
            <h3>Interestellar</h3>

            <div>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaRegStar/>
            </div>

            <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...</p>

            <p>Ficção Cientifica</p>
        </Container>
    )
}