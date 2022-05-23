import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget';


export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">ALL FASHION</Navbar.Brand>
                <Nav
                    className="me-auto my-2 my-lg-0 justify"
                    style={{ maxHeight: '100px' }}
                >
                    <Nav.Link href="#">Inicio</Nav.Link>
                    <Nav.Link href="#">Ropa</Nav.Link>
                    <Nav.Link href="#">Calzado</Nav.Link>
                    <Nav.Link href="#">Accesorios</Nav.Link>
                </Nav>
                <CartWidget count={7} />
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Buscar"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Buscar</Button>
                </Form>
            </Container>
        </Navbar>
    );

}