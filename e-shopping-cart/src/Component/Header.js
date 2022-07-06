import { Navbar, Container, Nav, Form, Badge, Dropdown } from "react-bootstrap"
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom"

import logo from "../assets/logo.gif"
import "../style.css"

const Header = () => {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" className="header">
      <Container className="main-container">
        <Navbar.Brand href="#home"><img src={logo} alt="logo" className="logo" /></Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Shop</Nav.Link>
            <Nav.Link>About Us</Nav.Link>
            <Nav.Link>Contact Us</Nav.Link>
          </Nav>
          {" "}
          <Form className="d-flex search">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
            />
          </Form>
          <Dropdown className="dropDown">
            <Dropdown.Toggle variant="light">
              <FaShoppingCart fontSize={"20px"} />
              {" "}
              <Badge pill bg="warning">
                10
              </Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              wardrobe fasshion
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}

export default Header