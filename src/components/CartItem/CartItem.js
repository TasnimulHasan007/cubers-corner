import React from "react"
import "./CartItem.css"

const CartItem = (props) => {
  const { name, salary } = props.cart
  return (
    <div className="cart-item">
      <p>
        {name}: <span>${salary}</span>
      </p>
      <i className="fas fa-times-circle"></i>
    </div>
  )
}

export default CartItem
