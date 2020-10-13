import React from 'react'
import "../styles/Footer.scss"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="copyright"><p>&copy; 2020 Tamas Farago. All Rights Reserved</p></div>
            <div className="email"><span>Email:</span> tamasendre.farago@gmail.com</div>
            <div className="tel"><span>Tel:</span> +36301762230</div>
        </footer>
    )
}
