import React, { useEffect, useState } from "react";
import cartLogo from "../assets/cart.gif";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, incrementQty, decrementQty } from "../actions/index";

function Cart() {
  const { cart } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

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
                      <button onClick={() => dispatch(decrementQty(prod))}>
                        -
                      </button>
                      <span>{prod.qty}</span>
                      <button onClick={() => dispatch(incrementQty(prod))}>
                        +
                      </button>
                    </div>
                    <p
                      className="btn-area"
                      onClick={() => dispatch(removeFromCart(prod))}
                    >
                      <span className="btn2">Remove</span>
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
