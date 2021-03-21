import React from 'react'
import Type from 'react-typed'; 
const Header = () => {
    return (
        <div id = 'home' className = "header-wrapper">
            <div className = "main-info">
                <h1>Web Development</h1>
                <Type
                className="typed-text"
                strings={["Web Development", "Professional Shark Wrangler", "Tamer Of Lions"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href= '#contact' className="btn-contact"> Contact Me </a>
            </div>
        </div>
    )
}

{/*<li className = "btn-contact">
<Link smooth = {true} to = "contact" offset = {-110} className = 'btn-contact' href=#'#'> Contact Me </Link>
</li>/}

{/* <li className="nav-item">
              <Link smooth = {true} to = "contact" offset = {-110} className="nav-link" href="#">Contact Me</Link>
            </li> */}

export default Header;
