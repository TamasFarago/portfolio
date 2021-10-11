import React, { useState } from 'react'
import "../styles/Portfolio.scss"
import Navbar from "../components/Navbar"
import project1 from "../images/project1.png"
import project2 from "../images/project2.png"
import project3 from "../images/project3.png"
import project4 from "../images/project-4-big.png"
import modal1 from "../images/project-1-modal.png"
import modal2 from "../images/project-2-modal.png"
import modal3 from "../images/project-3-modal.png"
import modal4 from "../images/project-4-modal.jpg"
import { AiOutlineClose } from "react-icons/ai"
import { FaEye, FaCode } from "react-icons/fa"
import AOS from "aos"
import { Link } from 'react-router-dom'
import "aos/dist/aos.css"
import Mobile from "../images/mobile.svg"
import Desktop from "../images/desktop.svg"

export default function Portfolio() {
    
   
        return (
            <>
            <section className="portfolio">
            <Navbar />
                <div className="portfolio-container">
                    <div className="portfolio-title">
                        <h2>Portfolio</h2>
                    </div>
                </div>
                <div className="select-container">
                    <Link to="/projects/mobile">
                    <div className="select-container_box">
                        <h2>Mobile Apps</h2>
                        <img src={Mobile} className="mobile"/>
                    </div>
                    </Link>
                    {/* <Link to="/projects/desktop">
                    <div className="select-container_box">
                        <h2>Websites</h2>
                        <img src={Desktop} className="desktop"/>
                    </div>
                    </Link> */}
                </div>
            </section>
            </>
        )
    }

