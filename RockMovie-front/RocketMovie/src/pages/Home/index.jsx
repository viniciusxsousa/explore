import { Container } from "./styles"

import { Header } from "../../components/Header"

export function Home(){
  return(
    <Container>
          <Header/>

          <main>
              <div>
                  <h2>Meus Filmes</h2>
              </div>
          </main>
    </Container>
  )
}