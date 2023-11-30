import { Container } from "./styles";

import { FiPlus, FiX } from 'react-icons/fi'

export function TagItens({isNew, value, ...rest}) {
    return(
        <Container isNew={isNew}>
            <input type="text" value={value} readOnly={!isNew} {...rest}/>
            { isNew ? <FiPlus/> : <FiX/> }
        </Container>
    )
}