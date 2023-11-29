import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    'header'
    'content';


    > main {
        grid-area: 'content';
        
        padding: 53px 123px 30px;

        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            button {
                width: 207px;
                padding: 16px;
            }
        }
    }
`