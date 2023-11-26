import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
`

export const Header = styled.header`
    width: 100%;
    height: 144px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;

    padding: 0 124px;

    svg {
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 24px;
    }
`

export const Form = styled.form`
    max-width: 350px;
    margin: 30px auto;
`