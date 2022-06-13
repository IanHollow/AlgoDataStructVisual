import React from "react";
import './Footer.css'

function Footer() {
    return (
        <footer className="bg-light text-center text-lg-start" id="#footer">
            <div className="text-center p-3">
                © 2022 Copyright:
                <a className="text-dark" href="/">Ian Holloway</a>
            </div>
        </footer>
    );
}

export default Footer;