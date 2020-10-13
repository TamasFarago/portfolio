import React, { Component } from 'react'
import "../styles/Contact.scss"
import { AiFillGithub, AiOutlineMail } from "react-icons/ai"
import {FaPortrait} from "react-icons/fa"

export default class Contact extends Component {
    render() {
        return (
            <div className="contact">
        <ul className="contact-list">
            <li onClick={(e) => {
                e.preventDefault();
                window.open(this.makeHref=('https://github.com/TamasFarago'));}}>
            <span>github</span> <AiFillGithub/></li>
            <li onClick={(e) => {
                e.preventDefault();
                window.open(this.makeHref=('mailto:tamasendre.farago@gmail.com'));}}><span>email</span> <AiOutlineMail /></li>
            <li><span>resume</span> <FaPortrait /></li>
        </ul>
        </div>
        )
    }
}
