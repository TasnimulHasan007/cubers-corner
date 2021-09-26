import React, { useEffect, useState } from "react"
import Cart from "../Cart/Cart"
import Person from "../Person/Person"
import "./Shop.css"

const Shop = () => {
  // states
  const [persons, setPersons] = useState([])
  const [cart, setCart] = useState([])
  const [error, setError] = useState(false)
  // load api
  useEffect(() => {
    fetch("./persons.JSON")
      .then((res) => res.json())
      .then((data) => setPersons(data))
  }, [])
  // hire button handler
  const handleHireBtn = (person) => {
    // console.log(cart)
    const newCart = [...cart]
    if (!newCart.includes(person)) {
      newCart.push(person)
    } else {
      setError(!error)
      setTimeout(() => {
        setError(error)
      }, 1500)
    }
    setCart(newCart)
  }
  // handle close
  const handleClose = (item) => {
    const newCart = [...cart]

    console.log(newCart)

    const index = newCart.indexOf(item)
    if (index > -1) {
      newCart.splice(index, 1)
    }

    console.log(newCart)
    setCart(newCart)
    console.log(cart)
  }
  // clear cart
  const handleClearCart = () => {
    const newcart = []
    if (cart.length) {
      setCart(newcart)
    }
  }
  // return
  return (
    <div>
      {/* shop container start */}
      <div id="#shop" className="shop container">
        {/* cart */}
        <div className="cart-container">
          <Cart
            cart={cart}
            handleClose={handleClose}
            handleClearCart={handleClearCart}
          ></Cart>
        </div>
        {/* persons */}
        <div className="person-container">
          {persons.map((person) => (
            <Person
              key={person.key}
              person={person}
              handleHireBtn={handleHireBtn}
            ></Person>
          ))}
        </div>
      </div>
      {/* shop contianer end */}
      <div className="error" id={error ? "show" : null}>
        <p>Cuber already exists in the cart</p>
      </div>
    </div>
  )
}

export default Shop
