import { Container } from "./styles"

import { FiPlus } from 'react-icons/fi'

import { Link } from 'react-router-dom';

import { Header } from "../../components/Header"
import { Button } from '../../components/Button'
import { Card } from "../../components/Card"

export function Home(){
  return(
    <Container>
          <Header/>

          <main>
              <div>
                  <h2>Meus Filmes</h2>
                  <Link to='/new'>
                    <Button icon={FiPlus} title='Adicionar filme'/>
                  </Link>
              </div>

              <Card/>
              <Card/>
              <Card/>
              <Card/>
          </main>
    </Container>
  )
}