import React from 'react'
import "../styles/Leaves.scss"
import leaves1 from "../images/leaves1.png"
import leaves2 from "../images/leaves2.png"
import leaves3 from "../images/leaves3.png"
import leaves4 from "../images/leaves4.png"

export default function Leaves() {
    return (
        <div>
            <div className="set">
                <div><img src={leaves1}></img></div>
                <div><img src={leaves2}></img></div>
                <div><img src={leaves3}></img></div>
                <div><img src={leaves4}></img></div>
                <div><img src={leaves1}></img></div>
                <div><img src={leaves2}></img></div>
                <div><img src={leaves3}></img></div>
                <div><img src={leaves4}></img></div>
                </div>
        </div>
    )
}
