import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    'header'
    'content';


    > main {
        grid-area: 'content';
    }
`