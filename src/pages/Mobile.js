import React from 'react'
import Navbar from "../components/Navbar"
import "../styles/Mobile.scss"
import a from "../images/a.png"
import b from "../images/b.png"
import c from "../images/c.png"
import d from "../images/d.png"
import e from "../images/e.png"
import f from "../images/f.png"
import g from "../images/g.png"
import h from "../images/h.png"
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
                    <p>An app created for package delivery drivers who can search for jobs and complete them.</p>
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
