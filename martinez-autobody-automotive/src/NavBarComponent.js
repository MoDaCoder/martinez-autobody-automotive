import React from "react";

const NavBarComponent = () => (
    <>
        <nav className="navbar-container">
            <div className="navbar">
                <div className="brand">
                <img src='/img/icons8-tire-burning-rubber-50.png' alt="tire icon"></img>
                </div>
                <ul className="nav-links" id="nav-links">
                    <li><>Home</></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="hamburger" id="hamburger">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </nav>
    </>
);

export default NavBarComponent;