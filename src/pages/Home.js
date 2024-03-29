import React, { Component } from 'react'
import "../styles/Home.scss"
import Stars from "../components/Stars"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import AOS from "aos"
import "aos/dist/aos.css"


export default class Home extends Component {
    componentDidMount() {
        AOS.init({
          duration : 2000
        });
      }
    render() {
        return (
            <section className="home">
                <Navbar />
                <div className="main-text">
                    <h1>Hi, i'm Tamas Farago</h1>
                    <h4>a front-end developer based in Budapest, Hungary <br/> 
                        contact me and let's work together </h4>
                    <Link to="/projects">
                        <button>View projects</button>
                    </Link>
                </div>
                <Stars />
                
                
                
            </section>
        )
    }
}
