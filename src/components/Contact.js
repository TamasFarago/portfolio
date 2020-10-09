import React from 'react'
import "../styles/Contact.scss"
import { AiFillGithub, AiOutlineMail } from "react-icons/ai"
import {FaPortrait} from "react-icons/fa"

export default function Contact() {
    return (
        <div className="contact">
        <ul className="contact-list">
            <li><span>github</span> <AiFillGithub/></li>
            <li><span>email</span> <AiOutlineMail /></li>
            <li><span>resume</span> <FaPortrait /></li>
        </ul>
        </div>
    )
}
