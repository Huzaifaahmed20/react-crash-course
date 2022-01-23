import { Container, Navbar } from "react-bootstrap";

export default function AppNavbar(props) {
  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">{props.title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
