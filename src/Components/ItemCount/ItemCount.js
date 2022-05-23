import { Card, Button, Form, Row, Col, ToastContainer } from 'react-bootstrap';
import React from 'react';
import { toast } from 'react-toastify';

export default function ItemCount() {
    const [count, setCount] = React.useState(1)
    const stock = 15

    const onAdd = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const onDecrease = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const onSubmit = () => {
        toast.success(`Se agrego ${count} al carrito`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    return (
        <Card className="text-center">
            <Card.Header>Producto</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Form>
                    <Row>
                        <Col >
                            <Button variant="outline-secondary" onClick={onDecrease}>-</Button>
                        </Col>
                        <Col>
                            {count}
                        </Col>
                        <Col>
                            <Button variant="outline-secondary" onClick={onAdd}>+</Button>
                        </Col>
                    </Row>
                </Form>
                <Button variant="primary" onClick={onSubmit}>Añadir al carrito</Button>
            </Card.Body>
        </Card>
    );
}