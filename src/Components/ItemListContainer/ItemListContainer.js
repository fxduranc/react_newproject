import { Container, Col, Row } from 'react-bootstrap'

export default function () {
    return (
        <Container>

            <Row className="justify-content-md-center">
                <Col sm md lg xl></Col>
                <Col sm md lg xl><h3>Aquí se mostrarán los productos</h3></Col>
                <Col sm md lg xl></Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col sm md lg xl></Col>
                <Col sm md lg xl><img src="Images/shopping-bags-and-a-group-of-multiethnic-shoppers.png" atl="banner_image"></img></Col>
                <Col sm md lg xl></Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col sm md lg xl>Producto 1</Col>
                <Col sm md lg xl>Producto 2</Col>
                <Col sm md lg xl>Producto 3</Col>
            </Row>
        </Container>
    );
}