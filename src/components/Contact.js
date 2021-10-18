import React, { Component } from 'react'
import "../styles/Contact.scss"
import { AiFillGithub, AiOutlineMail } from "react-icons/ai"
import {FaPortrait, FaLinkedin} from "react-icons/fa"

export default class Contact extends Component {
    render() {
        return (
            <div className="contact">
        <ul className="contact-list">
            <li onClick={(e) => {
                e.preventDefault();
                window.open(this.makeHref=('https://github.com/TamasFarago'));}}>
            <span>github</span> <AiFillGithub className="contact-icon"/></li>
            <li onClick={(e) => {
                e.preventDefault();
                window.open(this.makeHref=('mailto:tamasendre.farago@gmail.com'));}}>
                <span>email</span> <AiOutlineMail className="contact-icon"/></li>
            <li onClick={(e) => {
                e.preventDefault();
                window.open(this.makeHref=('https://www.linkedin.com/in/tamasendre-farago'));}}>
                <span>LinkedIn</span> <FaLinkedin className="contact-icon"/>
            </li>
        </ul>
        </div>
        )
    }
}
