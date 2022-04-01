import React from 'react';
import { AddCommnet } from '../addComment';
import { Comment } from '../comment'
import { MyModal } from '../MyModal'
import { Context } from '../context';
import { ImprimirResp } from '../Respuesta'
import { Container } from 'react-bootstrap'

function AppUI() {
    const{
        comentarios,
        setComentarios,
        setKey,
        setRespuesta
    } = React.useContext(Context)

    function cambioColor(key) {
        const comentariosAux = [...comentarios]
        comentariosAux[key].like = true
        setComentarios(comentariosAux)
        comentariosAux[key].cantidad++
    }

    
    const [openModal, setopenModal] = React.useState(false);

    const handleShow  = (key) => {
        setKey(key)
        setopenModal(true)
    };

    const handleClose= () => {
        setopenModal(false)
        setRespuesta("")
    };



    return(
        <React.Fragment>
            <AddCommnet />

            {comentarios?.map((comentario, key) => (
                <React.Fragment>
                    <Comment 
                        comentario={comentario} 
                        cambioColor={() => cambioColor(key)} 
                        responder={() => handleShow(key)}
                        key={key}
                    />

                        <Container>
                            {comentario?.responder.map((comm) => (                     
                                <ImprimirResp comm={comm}/>                        
                            ))}
                        </Container>                                      

                </React.Fragment>
            ))}            

            <MyModal 
                show={openModal}
                handleClose={handleClose}
            />

        </React.Fragment>
    )
}

export { AppUI }
