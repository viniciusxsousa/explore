import styled from 'styled-components'

export const Conteiner = styled.header`
    grid-area: header;
    height: 105px;
    width: 100%;

    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
    display: flex;
    justify-content: space-between;

    padding: 0 80px;

    background-color: red;
`