import React from "react"
import "./Person.css"

const Person = (props) => {
  // data deconstruction
  const { name, country, gender, age, average, single, salary, img } =
    props.person
  return (
    <div className="person">
      <div className="intro">
        <div className="avatar">
          <img src={img} alt="" />
        </div>
        <div>
          <h2 className="name">{name}</h2>
          <p className="country">{country}</p>
        </div>
      </div>
      <div className="details">
        <p>
          <span>Gender : </span>
          {gender}
        </p>
        <p>
          <span>Age : </span>
          {age}
        </p>
        <p>
          <span>Average : </span>
          {average} sec.
        </p>
        <p>
          <span>Single : </span>
          {single} sec.
        </p>
        <p>
          <span>Salary : </span>${salary}
        </p>
        <button
          className="hire-now main-btn"
          onClick={() => props.handleHireBtn(props.person)}
        >
          <i className="fas fa-cart-plus"></i> Hire Now
        </button>
      </div>
    </div>
  )
}

export default Person
