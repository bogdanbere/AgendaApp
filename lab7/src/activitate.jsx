import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Activitate = (props) => {
    const {id, ora, titlu, loc, descriere, sterge} = props;
    const stil = {
        borderBottom: "1px solid #777",
        paddingTop: "10px"
    }
    return (
        <Container>
            <Row style={stil}>
                <Col xs={9}>
                    <h4>{ora} - {titlu}</h4>
                    <h6>Loc: {loc}</h6>
                    <p>Descriere: {descriere}</p>
                </Col>
                <Col xs={3} className="d-flex align-items-center">
                    <Button variant="primary" onClick={() => sterge(id)}>Sterge</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Activitate;