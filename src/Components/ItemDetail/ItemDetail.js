import { Card, Button, Link, Container, Navbar } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import NavBar from '../NavBar/NavBar';

export default function ItemDetail(item) {
    return (
        <Container fluid>
            <>
                <NavBar />
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            <p>Stock: {item.stock}</p>
                            <p>Price: {item.price}</p>
                        </Card.Text>
                        <Button variant="primary">Product Details</Button>
                    </Card.Body>
                </Card>
            </>
        </Container>
    )

}
