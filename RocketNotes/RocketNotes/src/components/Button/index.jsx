import { Conteiner } from "./styles";

export function Button({ title, loading }){
    return (
        <Conteiner 
            type='button'
            disabled={loading}
        >
            {loading ? 'Carregando...' : title}
        </Conteiner>
    )
}