import React from "react"
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <h1>
          Welcome to <br />
          <span>CubersCorner</span>
        </h1>
        <h2>Make a cubers team</h2>
        <p>
          Let's make more people interested about <br /> cubers and cubing with
          a web series
        </p>
        <h2>
          Total Budget: <span>$1 Million</span>
        </h2>
        <div className="underline"></div>
        <button
          className="main-btn"
          onClick={() => {
            window.scrollTo(0, window.innerHeight)
          }}
        >
          Get Started Now <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  )
}

export default Header
