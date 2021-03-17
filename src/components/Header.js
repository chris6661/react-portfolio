import React from 'react'
import Type from 'react-typed'; 
const Header = () => {
    return (
        <div className = "header-wrapper">
            <div className = "main-info">
                <h1>Web Development</h1>
                <Type
                className="typed-text"
                strings={["Web Development", "Professional Shark Wrangler", "Tamer Of Lions"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href= '#' className="btn-main-offer"> Contact Me </a>
            </div>
        </div>
    )
}

export default Header;
