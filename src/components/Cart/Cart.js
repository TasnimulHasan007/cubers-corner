import React from "react"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"

const Cart = (props) => {
  // data destructuring
  const { cart } = props
  // manage cart
  let totalCost = 0
  for (const person of cart) {
    totalCost += person.salary
  }
  const cartItem = [...cart]

  return (
    <div className="cart">
      <div className="icon">
        <i className="fas fa-shopping-cart fa-2x"></i>
      </div>
      <div className="summery">
        <p>
          <span>
            <i className="fas fa-user"></i> Persons Added :{" "}
          </span>{" "}
          {cart.length}
        </p>
        {cartItem.map((item) => (
          <CartItem cart={item} key={item.key}></CartItem>
        ))}
        <p>
          <span>
            <i className="fas fa-dollar-sign"></i> Total Cost :{" "}
          </span>{" "}
          ${parseInt(totalCost)}
        </p>
      </div>
    </div>
  )
}

export default Cart
