import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    border-radius: 8px;
    padding: 32px;

    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.BLACK_100};

    font-size: 16px;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
`