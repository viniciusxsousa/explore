import { Conteiner } from './styles'

export function ButtonText({title, isActived = false ,...rest}) {
    return (
        <Conteiner
            type='button'
            isActived = {isActived}
            {...rest}
        >
            {title}
        </Conteiner>
    )
}