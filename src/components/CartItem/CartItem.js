import React from "react"
import "./CartItem.css"

const CartItem = (props) => {
  const { name, img } = props.cart
  return (
    <div className="cart-item">
      <span className="name-container">
        <img src={img} alt="" />
        <p>{name}</p>
      </span>
      <i
        className="fas fa-times-circle"
        onClick={() => {
          props.handleClose(props.cart)
        }}
      ></i>
    </div>
  )
}

export default CartItem
