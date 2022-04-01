import React from "react";
import {Card, Container, Row, Col} from 'react-bootstrap'
import './Respusta.css'

function ImprimirResp(props) {
    return (
            <Row>
                <Col>
                    <Card>
                        <Card.Body className="contenedorResp1">{props.comm}</Card.Body>
                    </Card>
                </Col>
            </Row> 
    )
}

export { ImprimirResp }