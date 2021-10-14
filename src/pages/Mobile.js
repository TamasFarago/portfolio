import React from 'react'
import Navbar from "../components/Navbar"
import "../styles/Mobile.scss"
import a from "../images/a-min.png"
import b from "../images/b-min.png"
import c from "../images/c-min.png"
import d from "../images/d-min.png"
import e from "../images/e-min.png"
import f from "../images/f-min.png"
import g from "../images/g-min.png"
import h from "../images/h-min.png"
import AOS from "aos"


export default function Mobile() {
    return (
        <>
        <section className="apps">
        <Navbar />
            <div className="portfolio-container">
                <div className="portfolio-title">
                    <h2>Mobile Apps</h2>
                </div>
            </div>
            <div className="app-item">
                <div>
                    <h2>Fuvar.hu</h2>
                    <p>An app created for package delivery drivers who can search for jobs and complete them.</p>
                </div>
                <div className="image-container">
                    <img src={a}/>
                    <img src={b}/>
                    <img src={c}/>
                    <img src={d}/>
                </div>
            </div>
            <div className="app-item">
                <div>
                    <h2 className="renter-title">MusicBuddy</h2>
                    <p>Built for musicians who want to find people to collaborate with.</p>
                </div>
                <div className="image-container">
                    <img src={g}/>
                    <img src={e}/>
                    <img src={f}/>
                    <img src={h}/>
                </div>
            </div>
        </section>
        </>
    )
}
