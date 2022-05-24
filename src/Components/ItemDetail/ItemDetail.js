import { Card, Button, Link } from 'react-bootstrap';

export default function ItemDetail(product) {
    return (
        <div>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        <p>Stock: {product.stock}</p>
                        <p>Price: {product.price}</p>
                    </Card.Text>
                    <Button variant="primary">Product Details</Button>
                </Card.Body>
            </Card>
        </div>
    )

}
