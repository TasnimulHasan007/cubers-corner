import React from "react"
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <h2>Make a cubers team</h2>
        <p>
          Let's make more people interested about cubers and cubing with a web
          series
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
          Get Started Now
        </button>
      </div>
    </div>
  )
}

export default Header
