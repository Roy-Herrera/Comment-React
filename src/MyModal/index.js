import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { Context } from '../context'

function MyModal(props) { 
    const {
        respuesta,
        setRespuesta, 
        comentarios,
        setComentarios,
        key,
    } = React.useContext(Context)


    function onChangeValue(event) {
        setRespuesta(event.target.value);      
    }

    const saveRespuesta = () => {
        if(!respuesta == "") {
            const stateAux = [...comentarios]
            stateAux[key].responder =[...stateAux[key].responder, respuesta]
            setComentarios(stateAux)
            console.log(comentarios)
            setRespuesta('')
            props.handleClose()
        }  
    }

    return (
        <React.Fragment>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header>
                    <Modal.Title>Tu Respuesta es importante </Modal.Title>
                    <Button variant="white" onClick={props.handleClose}>X</Button>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Ingresa Tu Respuesta.</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            value={respuesta}
                            placeholder="Ingrese un Comentario"
                            onChange={onChangeValue} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Cancelar
                    </Button>

                    <Button variant="primary" onClick={saveRespuesta}>
                        Responder
                    </Button>

                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}

export { MyModal }
