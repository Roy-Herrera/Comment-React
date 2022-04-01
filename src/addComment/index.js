import React from "react";
import { InputGroup, FormControl, Container, Button } from "react-bootstrap";
import { Context } from "../context"


function AddCommnet() {
    const {
        individual,
        setIndividual,
        setComentarios,
        comentarios,
    }= React.useContext(Context)

    const individualT = {...individual}

    function onChangeInput(event) {
        individualT.text = event.target.value
        setIndividual(individualT)
    }

    function AddComentarios() {
        if(!individual.text == "") {
            const aux = [...comentarios]
            aux.push({...individual})
            setComentarios(aux)
            individual.text = ""
            setIndividual(individual)
        }
    }

    return (
        //aqui va todo el html y si se quiere escribir js se usa {}
        <Container>
            <InputGroup className="mt-4">
                <FormControl
                    value={individual.text}
                    onChange={onChangeInput}
                    placeholder="Ingrese un comentario"
                />
            </InputGroup>
            <InputGroup className="mt-3 justify-content-center">
                <Button  
                    variant="outline-primary"
                    onClick={AddComentarios}
                >
                    Agregar
                </Button>
            </InputGroup>
        </Container>
    )
}

export { AddCommnet }

