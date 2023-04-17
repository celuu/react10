import React from "react"
import { Link } from "react-router-dom"
import "./Navigation.css"

const Navigation = () => {
    return(
        <div className="nav-container">
            <Link to="/" className="calc-name">Home</Link>
            <Link to="/calculator" className="calc-name">Calculator</Link>
        </div>
    )
}

export default Navigation