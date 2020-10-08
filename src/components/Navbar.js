import React, { Component } from 'react'
import logo from "../images/logo.png"
import "../styles/Navbar.scss"

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <img src={logo}></img>
                <div className="hamburger-menu">
                    <div className="line-top line"></div>
                    <div className="line-middle line"></div>
                    <div className="line-bottom line"></div>
                </div>
            </div>
        )
    }
}
