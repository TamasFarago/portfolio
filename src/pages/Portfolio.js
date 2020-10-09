import React, { Component } from 'react'
import "../styles/Portfolio.scss"
import Navbar from "../components/Navbar"
import project1 from "../images/project1.png"
import project2 from "../images/project2.png"
import project3 from "../images/project3.png"
import project4 from "../images/project4.png"

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
                            <div className="project-1 project">
                           
                           </div>
                           <div className="project-2 project">
                           
                           </div>
                        </div>
                        <div className="row2">

                            <div className="project-3 project">
                            
                            </div>
                            <div className="project-4 project">
                            
                            </div>
                        </div>
                       
                    </div>
                </div>
            </section>
            </>
        )
    }
}
