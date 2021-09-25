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
  // add to cart handler
  const handleAddToCart = (person) => {
    // console.log(cart)
    const newCart = [...cart]
    if (!newCart.includes(person)) {
      newCart.push(person)
    } else {
      setError(!error)
      setTimeout(() => {
        setError(error)
      }, 2000)
    }
    setCart(newCart)
  }
  // return
  return (
    <div>
      <div className="shop container">
        {/* persons */}
        <div className="person-container">
          {persons.map((person) => (
            <Person
              key={person.key}
              person={person}
              handleAddToCart={handleAddToCart}
            ></Person>
          ))}
        </div>
        {/* cart */}
        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
      <div className="error" id={error ? "show" : null}>
        <p>Cuber already exists in the cart</p>
      </div>
    </div>
  )
}

export default Shop
