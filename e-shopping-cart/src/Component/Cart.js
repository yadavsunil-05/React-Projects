import { useContext, useEffect, useState } from "react"
import { ListGroup, Button, Row, Col, Image, Form } from "react-bootstrap"
import { cartStore } from "../Context/ContextStore"
import { AiFillDelete } from "react-icons/ai"

const Cart = () => {

  const { state: { cart }, dispatch } = useContext(cartStore)

  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(cart.reduce((acc, ele) => acc + (ele.price * ele.qty), 0))
  }, [cart])

  console.log(cart)

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup className="cart-list-prod">
          {
            cart.map(prod => (
              <ListGroup.Item size="lg">
                <Row>
                  <Col md={3}>
                    <Image src={prod.image} fluid rounded className="cart-prod-img" />
                  </Col>
                  <Col md={3}>
                    <span className='prod-cart-title'>{`${prod.title.slice(0, 15)}...`}</span>
                  </Col>
                  <Col md={2} className='prod-price'>
                    ₹{prod.price}
                  </Col>
                  <Col md={2}>
                    <Form.Control as="select" value={prod.qty}
                      onChange={(e) => dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value
                        }
                      })}
                    >
                      {[...Array(prod.inStock).keys()].map(x => (
                        <option>{x + 1}</option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button variant="danger"
                      onClick={() => dispatch(
                        {
                          type: "REMOVE_FROM_CART",
                          payload: prod
                        }
                      )}
                    > <AiFillDelete />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))
          }
        </ListGroup>
      </div>
      <div className="cart-filters summary">
        <span className="title"> SubTotal ({cart.length} items)</span>
        <span className="total">Total : ₹ {total.toFixed(2)} </span>
        {" "}
        <Button size="md" className="Buy-Btn">Proceed to Checkout</Button>
      </div>
    </div>
  )
}

export default Cart