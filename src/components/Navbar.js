import React, { Component } from 'react'
import logo from "../images/logo.png"
import "../styles/Navbar.scss"
import {Link} from "react-router-dom"

export default class Navbar extends Component {
    render() {
        return (
            <>
            <div className="navbar">
                <Link to="/">
                    <img src={logo} alt="logo"></img>
                </Link>
            </div>
            </>
            
        )
    }
}
