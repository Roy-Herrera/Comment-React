import  React  from 'react';
import { Card, Button } from 'react-bootstrap'
import { BsFillHeartFill } from "react-icons/bs";
import './comment.css'


function Comment(props) {

    return (
        <React.Fragment>
            <Card className="mt-3" body >
                {props.comentario.text}
                <span className="centro">
                    <BsFillHeartFill className={`${props.comentario.like && 'icono'}`} 
                        onClick={props.cambioColor} 
                    />
                    {props.comentario.cantidad}
                    <Button onClick={props.responder}>Responder</Button> 
                </span>   
            </Card >
        </React.Fragment>
    )
}

export { Comment }