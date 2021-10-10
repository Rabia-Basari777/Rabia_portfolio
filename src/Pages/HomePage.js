import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom'

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span> Rabia Basari</span>
                </h1>
                <p className="home-sub-text">
                    A focused and passionate Full-Stack Web Developer and a team player with a <br />specialization in MERN stack.
                    I like to code things from scratch, and enjoy bringing <br/> ideas to life in the browser.
                </p>
                <div className="icons">
                    <a href="https://github.com/Rabia-Basari777" target="_blank">
                        <div className="icon-holder">
                            <FontAwesomeIcon icon={faGithub} className="icon fb" />
                        </div>
                    </a>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faMedium} className="icon gh" />
                    </Link>
                    <a href="https://www.linkedin.com/in/rabia-basari-2103/" target="_blank">
                        <div className="icon-holder">
                            <FontAwesomeIcon icon={faLinkedin} className="icon yt" />
                        </div>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage
