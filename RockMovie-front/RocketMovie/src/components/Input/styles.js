import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 37px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_100};
    border-radius: 10PX;

    > input {
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: none;
        padding: 19px 24px;
        color: ${({theme}) => theme.COLORS.WHITE_200};

        &::placeholder {
            font-size: 14px;
        }
    }
`