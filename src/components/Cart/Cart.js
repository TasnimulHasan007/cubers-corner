import React from "react"
import "./Cart.css"

const Cart = (props) => {
  // data destructuring
  const { cart } = props
  // manage calculations
  let totalCost = 0
  for (const person of cart) {
    totalCost += person.salary
  }

  return (
    <div className="cart">
      <div className="icon">
        <i className="fas fa-shopping-cart fa-2x"></i>
      </div>
      <div className="summery">
        <p>
          <span>Persons Added : </span> {cart.length}
        </p>
        <p>
          <span>Total Cost : </span> ${parseInt(totalCost)}
        </p>
      </div>
    </div>
  )
}

export default Cart
