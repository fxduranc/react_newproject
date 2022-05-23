import { Container, Col, Row, Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount';

export default function ItemListContainer({ greeting }) {
    return (
        <Container>
            <>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Text>
                            <h4>{greeting}</h4>
                        </Card.Text>
                    </Card.Body>
                    <Card.Img sm md lg xl variant="bottom" width={100} height={350}  src="Images/shopping-bags-and-a-group-of-multiethnic-shoppers_01.png" />
                </Card>
                <br></br>
            </>
            <Row className="justify-content-md-center">
                <Col sm md lg xl></Col>
                <Col sm md lg xl></Col>
                <Col sm md lg xl></Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col sm md lg xl></Col>
                <Col sm md lg xl></Col>
                <Col sm md lg xl></Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col sm md lg xl><ItemCount /></Col>
                <Col sm md lg xl><ItemCount /></Col>
                <Col sm md lg xl><ItemCount /></Col>
            </Row>
        </Container>
    );
}