import React, { Component } from 'react'
import "../styles/Portfolio.scss"
import Navbar from "../components/Navbar"
import project1 from "../images/project1.png"
import project2 from "../images/project2.png"
import project3 from "../images/project3.png"
import project4 from "../images/project-4-big.png"
import modal1 from "../images/project-1-modal.png"
import { AiOutlineClose } from "react-icons/ai"
import { FaEye, FaCode } from "react-icons/fa"

export default class Portfolio extends Component {
    render() {
        return (
            <>
            
            <section className="portfolio">
            <Navbar />
                <div className="portfolio-container">
                    <div className="portfolio-title">
                        <h2>portfolio</h2>
                        <p>These are the project I've worked on for the past months.</p>
                    </div>
                   
                    <div className="portfolio-grid">
                        <div className="row1">
                                <div className="project-container">
                                    <div className="project-1 project">
                                        <h5>Ecommerce website</h5>
                                        <img src={project1}></img>
                                        <button className="project-btn btn1">View Project</button>
                                    </div>
                                </div>
                                <div className="project-container">
                                    <div className="project-2 project">
                                        <h5>Gym website</h5>
                                        <img src={project2}></img>
                                        <button className="project-btn btn2">View Project</button>
                                    </div>
                                </div>
                        </div>
                        <div className="row2">
                                <div className="project-container">
                                    <div className="project-3 project">
                                        <h5>Restaurant website</h5>
                                        <img src={project3}></img>
                                        <button className="project-btn btn3">View Project</button>
                                    </div>
                                </div>
                                <div className="project-container prjct-4">
                                    <div className="project-4 project">
                                        <h5>Portfolio</h5>
                                        <img src={project4} className="four"></img>
                                        <button className="project-btn btn4">View Project</button>
                                    </div>
                                </div>
                        </div>
                        <div className="project-modal modal1">
                            <div className="modal-grid">
                                <div className="modal-picture">
                                    <img src={modal1}></img>
                                </div>
                                <div className="modal-info">
                                    <div className="project-header">
                                        <div className="modal-title">
                                            <h5>project</h5>
                                            <h3>Ecommerce website</h3>
                                        </div>
                                        <AiOutlineClose className="modal-close" />
                                    </div>
                                    <ul className="project-technology">
                                        <li>html</li>
                                        <li>css</li>
                                        <li>React</li>
                                        <li>material-ui</li>
                                        <li>responsive</li>
                                        <li>javascript</li>
                                        <li>responsive</li>
                                        <li>UX/UI</li>
                                    </ul>
                                    <div className="modal-about">
                                        <h5>about</h5>
                                        <div className="about-text">
                                            <p>I used ReactJs to create this project. The purpose was to showcase my skills in javascript. The project has a very simple but modern UI which was created with only html and css. Has all the functionalities an eCommerce website has. Including shopping-cart, search filter, comment section etc.</p>
                                        </div>
                                    </div>
                                    <div className="modal-buttons">
                                        <button className="modal-btn-1"><FaEye className="eye"/>  demo</button>
                                        <button className="modal-btn-2"><FaCode className="code" /> code</button>
                                    </div>
                                </div>

                            </div>
                            
                        </div>
                       
                    </div>
                </div>
            </section>
            </>
        )
    }
}
