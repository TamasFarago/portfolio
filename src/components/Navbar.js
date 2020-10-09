import React, { Component } from 'react'
import logo from "../images/logo.png"
import "../styles/Navbar.scss"
import {NavLink, Link} from "react-router-dom"

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <Link to="/">
                    <img src={logo}></img>
                </Link>
                <div className="hamburger-menu">
                    <div className="line-top line"></div>
                    <div className="line-middle line"></div>
                    <div className="line-bottom line"></div>
                </div>
            </div>
        )
    }
}
