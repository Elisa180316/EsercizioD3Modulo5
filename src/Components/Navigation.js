import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap/';

function Navigation() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Epic Books</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Browse</Nav.Link>
                        <NavDropdown title="Altri" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Romanzi</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Sci-Fi</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Horror</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Generi
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
