import React, { Component } from 'react'
import Navbar from "../components/Navbar"
import "../styles/Home.scss"
import Leaves from "../components/Leaves"
import { AiFillGithub, AiOutlineMail } from "react-icons/ai"
import {FaPortrait} from "react-icons/fa"

export default class Home extends Component {
    render() {
        return (
            <section className="home">
                <Navbar />
                <div className="main-text">
                    <h1>Hi, i'm Tamas Farago</h1>
                    <h4>a front-end developer based in Budapest, Hungary. <br/> contact me and let's work together </h4>
                    <button>View projects</button>
                </div>
                <div className="contact">
                    <ul className="contact-list">
                        <li><span>github</span> <AiFillGithub/></li>
                        <li><span>email</span> <AiOutlineMail /></li>
                        <li><span>resume</span> <FaPortrait /></li>
                    </ul>
                </div>
                <Leaves />
            </section>
        )
    }
}
