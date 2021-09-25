import React, { useEffect, useState } from "react"
import Cart from "../Cart/Cart"
import Person from "../Person/Person"
import "./Shop.css"

const Shop = () => {
  // states
  const [persons, setPersons] = useState([])
  const [cart, setCart] = useState([])
  // load api
  useEffect(() => {
    fetch("./persons.JSON")
      .then((res) => res.json())
      .then((data) => setPersons(data))
  }, [])
  // add to cart handler
  const handleAddToCart = (person) => {
    const newCart = [...cart, person]
    setCart(newCart)
  }
  // return
  return (
    <div className="container shop">
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
  )
}

export default Shop
