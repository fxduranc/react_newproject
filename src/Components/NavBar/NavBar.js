import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'


export default function NavBar() {
    return (
            <Navbar bg="dark" variant= "dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">ALL FASHION</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#">Inicio</Nav.Link>
                            <Nav.Link href="#">Ropa</Nav.Link>
                            <Nav.Link href="#">Calzado</Nav.Link>
                            <Nav.Link href="#">Accesorios</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Buscar"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Buscar</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );

}