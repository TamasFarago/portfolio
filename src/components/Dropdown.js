import React, { Component } from 'react'
import "../styles/Dropdown.scss"
import {NavLink} from "react-router-dom"

export default class Dropdown extends Component {
    constructor(props){
        super(props)
        this.state = {isOpen: false}
        this.toggleOpen = this.toggleOpen.bind(this)
    }
    

    toggleOpen() {
        this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        return (
            <section className={this.state.isOpen ? "dropdown menu-open" : "dropdown"}>
                <div className="hamburger-menu" onClick={this.toggleOpen}>
                    <div className="line-top line"></div>
                    <div className="line-middle line"></div>
                    <div className="line-bottom line"></div>
                </div>
                <div className={this.state.isOpen ? "menu-container container-op" : "menu-container"}>
                   <NavLink exact to="/" onClick={this.toggleOpen} activeClassName="selected"><h5>About</h5></NavLink>
                    <NavLink exact to="/projects" onClick={this.toggleOpen} activeClassName="selected"><h5>portfolio</h5></NavLink>
                </div>
            </section>
        )
    }
}
