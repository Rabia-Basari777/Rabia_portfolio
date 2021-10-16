import React from 'react';
// import avatar from "../images/avatar.jpeg";
// import rabia_main2 from "../images/rabia_main2.png";
import rabs from "../images/rabs.jpg";
import { NavLink } from "react-router-dom";


function Navbar() {
    return (
        <div className="Navbar">
            <nav className="nav">
                <div className="profile">
                    <img height="220px" width="200px" src={rabs} alt=""/>
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects" exact activeClassName="active">
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/blogs" exact activeClassName="active">
                            Blogs
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <footer className="footer">
                    <p>@2021 Developer</p>
                </footer>
            </nav>    
        </div>
    )
}

export default Navbar
