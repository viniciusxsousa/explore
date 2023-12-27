import { useState } from "react";

import { Container, Content, Textarea } from "./styles";

import { Header } from '../../components/Header'
import { ButtonTxt } from '../../components/ButtonTxt'
import { Input } from "../../components/Input";
import { Button } from '../../components/Button'
import { TagItens } from "../../components/TagItens";

export function New() {
    const [markers, setMarkers] = useState([]);
    const [newMarkers, setNewMarkers] = useState("");

    function handleAddMarkers() {
        setMarkers(prevState => [...prevState, newMarkers]);
        setNewMarkers('');
    }

    function handleDeleteMarker(deleted) {
        setMarkers(prevState => prevState.filter(marker => marker !== deleted));
    }

    return(
        <Container>
            <Header/>

            <main>
                <Content>
                    <ButtonTxt icon title='voltar' to='/'/>

                    <h2>Novo Filme</h2>

                    <div className="inputs">
                        <Input type='text' placeholder='Título'/>
                        <Input type='number' placeholder='Sua nota (de 0 a 5)'/>
                    </div>

                    <Textarea placeholder="Observações"/>

                    <h3>Marcadores</h3>

                    <div className="marcadores">

                        {markers.map((marker, index) => (
                            <TagItens 
                                key={index}
                                value={marker}
                                onClick={() => {handleDeleteMarker(marker)}}
                            />
                        ))}

                        <TagItens 
                            value={newMarkers}
                            placeholder='Novo Marcador' 
                            isNew
                            onChange={e => setNewMarkers(e.target.value)}
                            onClick={handleAddMarkers}
                        />
                    </div>

                    <div className="buttons">
                        <Button title='Excluir filme' isBlack/>
                        <Button title='Salvar alterações'/>
                    </div>

                </Content>
            </main>

        </Container>
    )
}