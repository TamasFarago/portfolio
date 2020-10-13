import React, { Component } from 'react'
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
import "aos/dist/aos.css"

export default class Portfolio extends Component {
    constructor(props){
        super(props);
        this.state = {isEcommerceOpen: false, isGymOpen: false, isResOpen: false, isPortOpen: false, isModalOpen: false}
        this.toggleEcommerce = this.toggleEcommerce.bind(this)
        this.toggleGym = this.toggleGym.bind(this)
        this.toggleRes = this.toggleRes.bind(this)
        this.togglePort = this.togglePort.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }
    componentDidMount() {
        AOS.init({
          duration : 500, disable: function() {
            let maxWidth = 665;
            return window.innerWidth < maxWidth;
          }
        });
      }

    toggleEcommerce() {
        this.setState({isEcommerceOpen: !this.state.isEcommerceOpen, isModalOpen: !this.state.isModalOpen})
    }
    toggleGym() {
        this.setState({isGymOpen: !this.state.isGymOpen, isModalOpen: !this.state.isModalOpen})
    }
    toggleRes() {
        this.setState({isResOpen: !this.state.isResOpen, isModalOpen: !this.state.isModalOpen})
    }
    togglePort() {
        this.setState({isPortOpen: !this.state.isPortOpen, isModalOpen: !this.state.isModalOpen})
    }
    closeModal(){
        this.setState({isEcommerceOpen: false, isGymOpen: false, isPortOpen: false, isResOpen: false, isModalOpen: false})
    }
   
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
                                <div className="project-container" data-aos="fade-right">
                                    <div className="project-1 project">
                                        <h5>Ecommerce website</h5>
                                        <img src={project1}></img>
                                        <button className="project-btn btn1" onClick={this.toggleEcommerce}>View Project</button>
                                    </div>
                                </div>
                                <div className="project-container" data-aos="fade-left">
                                    <div className="project-2 project">
                                        <h5>Gym website</h5>
                                        <img src={project2}></img>
                                        <button className="project-btn btn2" onClick={this.toggleGym}>View Project</button>
                                    </div>
                                </div>
                        </div>
                        <div className="row2">
                                <div className="project-container" data-aos="fade-right">
                                    <div className="project-3 project">
                                        <h5>Restaurant website</h5>
                                        <img src={project3}></img>
                                        <button className="project-btn btn3" onClick={this.toggleRes}>View Project</button>
                                    </div>
                                </div>
                                <div className="project-container prjct-4" data-aos="fade-left">
                                    <div className="project-4 project">
                                        <h5>Portfolio</h5>
                                        <img src={project4} className="four"></img>
                                        <button className="project-btn btn4" onClick={this.togglePort}>View Project</button>
                                    </div>
                                </div>
                        </div>
                        <div className={this.state.isEcommerceOpen? "project-modal modal-open" : "modal-closed project-modal"}>
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
                                        <AiOutlineClose className="modal-close" onClick={this.toggleEcommerce}/>
                                    </div>
                                    <ul className="project-technology">
                                        <li>html</li>
                                        <li>css</li>
                                        <li>ReactJs</li>
                                        <li>material-ui</li>
                                        <li>responsive</li>
                                        <li>javascript</li>
                                        <li>responsive</li>
                                        <li>UI/UX</li>
                                    </ul>
                                    <div className="modal-about">
                                        <h5>about</h5>
                                        <div className="about-text">
                                            <p>I used ReactJs to create this project. The purpose was to showcase my skills in javascript and React. The project has a very simple but modern UI which was created with only html and css. Has all the functionalities an eCommerce website has. Including shopping-cart, search filter, review section etc.</p>
                                        </div>
                                    </div>
                                    <div className="modal-buttons">
                                        <button onClick={(e) => {
                                            e.preventDefault();
                                            window.open(this.makeHref=('https://ecommerce-store-three.vercel.app/'));}} 
                                            className="modal-btn-1"><FaEye className="eye"/>  demo</button>
                                        <button onClick={(e) => {
                                            e.preventDefault();
                                            window.open(this.makeHref=('https://github.com/TamasFarago/ecommerce-store'));}} 
                                            className="modal-btn-2"><FaCode className="code" /> code</button>
                                    </div>
                                </div>

                            </div>
                            
                        </div>

                        <div className={this.state.isGymOpen? "project-modal modal-open" : "modal-closed project-modal"}>
                            <div className="modal-grid">
                                <div className="modal-picture">
                                    <img src={modal2}></img>
                                </div>
                                <div className="modal-info">
                                    <div className="project-header">
                                        <div className="modal-title">
                                            <h5>project</h5>
                                            <h3>Gym website</h3>
                                        </div>
                                        <AiOutlineClose className="modal-close" onClick={this.toggleGym}/>
                                    </div>
                                    <ul className="project-technology">
                                        <li>html</li>
                                        <li>css</li>
                                        <li>ReactJs</li>
                                        <li>responsive</li>
                                        <li>javascript</li>
                                        <li>responsive</li>
                                        <li>UI/UX</li>
                                    </ul>
                                    <div className="modal-about">
                                        <h5>about</h5>
                                        <div className="about-text">
                                            <p>On this project I designed most of the UI. The goal was to create a stylish and competitive platform for a gym. I worked with ReactJs.</p>
                                        </div>
                                    </div>
                                    <div className="modal-buttons">
                                        <button onClick={(e) => {
                                            e.preventDefault();
                                            window.open(this.makeHref=('https://gym-website-blue.vercel.app/'));}} 
                                            className="modal-btn-1"><FaEye className="eye"/>  demo</button>
                                        <button onClick={(e) => {
                                            e.preventDefault();
                                            window.open(this.makeHref=('https://github.com/TamasFarago/gym-website'));}} 
                                            className="modal-btn-2"><FaCode className="code" /> code</button>
                                    </div>
                                </div>

                            </div>
                            
                        </div>

                        <div className={this.state.isResOpen? "project-modal modal-open" : "modal-closed project-modal"}>
                            <div className="modal-grid">
                                <div className="modal-picture">
                                    <img src={modal3}></img>
                                </div>
                                <div className="modal-info">
                                    <div className="project-header">
                                        <div className="modal-title">
                                            <h5>project</h5>
                                            <h3>Restaurant website</h3>
                                        </div>
                                        <AiOutlineClose className="modal-close" onClick={this.toggleRes}/>
                                    </div>
                                    <ul className="project-technology">
                                        <li>html</li>
                                        <li>css</li>
                                        <li>responsive</li>
                                        <li>javascript</li>
                                        <li>Jquery</li>
                                        <li>responsive</li>
                                        <li>UI/UX</li>
                                    </ul>
                                    <div className="modal-about">
                                        <h5>about</h5>
                                        <div className="about-text">
                                            <p>For this simple restaurant website I used html, css and javascript. Many layouts on the page was made with the help of bootstrap. </p>
                                        </div>
                                    </div>
                                    <div className="modal-buttons">
                                        <button onClick={(e) => {
                                            e.preventDefault();
                                            window.open(this.makeHref=('https://foodncoffee.netlify.app'));}} 
                                            className="modal-btn-1"><FaEye className="eye"/>  demo</button>
                                        <button onClick={(e) => {
                                            e.preventDefault();
                                            window.open(this.makeHref=('https://github.com/TamasFarago/restaurant-page'));}} 
                                            className="modal-btn-2"><FaCode className="code" /> code</button>
                                    </div>
                                </div>

                            </div>
                            
                        </div>
                       
                        <div className={this.state.isPortOpen? "project-modal modal-open" : "modal-closed project-modal"}>
                            <div className="modal-grid">
                                <div className="modal-picture">
                                    <img src={modal4}></img>
                                </div>
                                <div className="modal-info">
                                    <div className="project-header">
                                        <div className="modal-title">
                                            <h5>project</h5>
                                            <h3>Portfolio</h3>
                                        </div>
                                        <AiOutlineClose className="modal-close" onClick={this.togglePort}/>
                                    </div>
                                    <ul className="project-technology">
                                        <li>html</li>
                                        <li>sass</li>
                                        <li>ReactJs</li>
                                        <li>responsive</li>
                                        <li>javascript</li>
                                        <li>responsive</li>
                                        <li>UI/UX</li>
                                    </ul>
                                    <div className="modal-about">
                                        <h5>about</h5>
                                        <div className="about-text">
                                            <p>The Idea behind this project was to showcase my skills and my projects of the past months. I tried to keep the UI as simple as possible. This application was built with ReactJs and SASS. </p>
                                        </div>
                                    </div>
                                    <div className="modal-buttons">
                                    <button onClick={(e) => {
                                            e.preventDefault();
                                            window.open(this.makeHref=('https://tamasfarago.github.io/portfolio'));}} 
                                            className="modal-btn-1"><FaEye className="eye"/>  demo</button>
                                        <button onClick={(e) => {
                                            e.preventDefault();
                                            window.open(this.makeHref=('https://github.com/TamasFarago/portfolio'));}} 
                                            className="modal-btn-2"><FaCode className="code" /> code</button>
                                    </div>
                                </div>

                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className={this.state.isModalOpen? "dark-bg" : ""} onClick={this.closeModal}></div>
            </section>
            </>
        )
    }
}
