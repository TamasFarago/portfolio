import React from 'react'
import "../styles/Error.scss"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"

export default function Error() {
    return (
        <div className="error">
            <Navbar />
            <div className="error-text">
                <h2>404</h2>
                <Link to="/"><button>Go to home page</button></Link>
            </div>
        </div>
    )
}
