import React, { useEffect, useState } from "react";
import cartLogo from "../assets/cart.gif";
import "./Cart.css";
import { useContext } from "react";
import { Store } from "../App";

function Cart() {
  const { state, dispatch } = useContext(Store)
  const { cart } = state;
  const [total, setSubtotal] = useState(0);

  useEffect(() => {
    setSubtotal(
      cart.reduce((acc, curr) => {
        return acc + curr.price * curr.qty;
      }, 0)
    );
  }, [cart]);

  return (
    <div className="cart-container">
      <div className="wrapper">
        <h1>Shopping Cart</h1>
        {!cart.length ? (
          <div className="empty-cart">
            <img src={cartLogo} alt="cart" />
          </div>
        ) : (
          <div className="project">
            <div className="shop">
              {cart.map((prod) => (
                <div className="box" key={prod.id}>
                  <img src={prod.image} />
                  <div className="content">
                    <h3>{prod.title}</h3>
                    <h4>${prod.price}</h4>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10",
                      }}
                      className="quant-cont"
                    >
                      <button
                        onClick={() => {
                          dispatch({
                            type: "DECREMENT_QTY",
                            data: prod,
                          });
                        }}
                      >
                        -
                      </button>
                      <span>{prod.qty}</span>
                      <button
                        onClick={() =>
                          dispatch({
                            type: "INCREMENT_QTY",
                            data: prod,
                          })
                        }
                      >
                        +
                      </button>
                    </div>
                    <p className="btn-area" onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        data: prod,
                      })
                    }>
                      <span
                        className="btn2"
                      >
                        Remove
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="right-bar">
              <p>
                <span>Subtotal</span> <span>${total}</span>
              </p>
              <hr />
              <p>
                <span>Tax (0%)</span> <span>$0</span>
              </p>
              <hr />
              <p>
                <span>Shipping</span> <span>Free</span>
              </p>
              <hr />
              <p>
                <span>Total</span> <span className="total">${total}</span>
              </p>
              <a href="#">
                <i className="fa fa-shopping-cart"></i>Checkout
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
