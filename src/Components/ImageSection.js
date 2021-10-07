import React from 'react'
import about from "../images/about.png";

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4> I am
                    <span> Rabia Basari</span>
                </h4>
                <p className="about-text">I am an enthusiastic developer. hudjsfbdchf nkdh</p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Country</p>
                    </div>
                    <div className="right-section">
                        <p>: Rabia Basari</p>
                        <p>: Indian</p>
                        <p>: English, Hindi, Telugu</p>
                        <p>: Huda Colony, Chanda Nagar, Hyderabad</p>
                        <p>: India</p>
                    </div>
                </div>
                <a href="https://drive.google.com/file/d/1hkMKDaC-zCSfTZ_mC8xmKClduO6HEt4P/view?usp=sharing" target="_blank">
                    <button width="40%" className="btn">Download Resume</button>
                </a>
            </div>
        </div>
    )
}

export default ImageSection
