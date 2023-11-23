import styled from 'styled-components'

export const Conteiner = styled.button`
    border: none;
    background-color: transparent;

    font-size: 16px;
    color: ${({theme, isActived}) => isActived ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
`