import { Navbar, Container, Nav, Form, Badge, Dropdown, Button } from "react-bootstrap"
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillDelete } from "react-icons/ai"
import { Link } from "react-router-dom"
import { cartStore } from "../Context/ContextStore";
import logo from "../assets/logo.gif"
import "../style.css"
import { useContext } from "react";
import empty from "../assets/empty.gif"

const Header = () => {

  const { state: { cart }, dispatch, filterDispatch } = useContext(cartStore)

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
              placeholder="Search Product"
              className="me-2"
              onChange={(e) => filterDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value
              })}
            />
          </Form>
          <Dropdown className="dropDown">
            <Dropdown.Toggle variant="light">
              <FaShoppingCart fontSize={"20px"} />
              {" "}
              <Badge pill bg="warning">
                {cart.length}
              </Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {
                cart.length > 0 ? (
                  <>
                    {
                      cart.map(product => (
                        <span className="cartitem" key={product.id}>
                          <img
                            src={product.image}
                            className="cartItemImg"
                            alt="product"
                          />
                          <div className="cartItemDetail">
                            <span className='prod-cart-title'>{`${product.title.slice(0, 10)}...`}</span>
                            <span className='prod-price'>${product.price}</span>
                          </div>
                          <Button variant="danger"
                            onClick={() => dispatch(
                              {
                                type: "REMOVE_FROM_CART",
                                payload: product
                              }
                            )}
                          > <AiFillDelete />
                          </Button>
                        </span>
                      ))
                    }
                  </>) :
                  <img src={empty} alt="cart" className="empty-cart" />
              }
              <Link to="/cart">
                {
                  (cart.length === 0) ? <></> :
                    <Button variant="success">
                      Go to Cart
                    </Button>
                }
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}

export default Header