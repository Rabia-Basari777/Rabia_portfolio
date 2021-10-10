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
                <p className="about-text">I don't like to define myself by the work I have done. I define myself
                    by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning,
                    continue challenging myself, and do interesting things that matter. I like to develop expertise in a number of areas over the course of my life and career.
                </p>
                {/* <div className="about-details">
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
                </div> */}
                <p></p>
                <p>You can read more about my education and much more in the PDF attached below</p>
                <a href="https://drive.google.com/file/d/1hkMKDaC-zCSfTZ_mC8xmKClduO6HEt4P/view?usp=sharing" target="_blank">
                    <button className="btn"> Resume</button>
                </a>
            </div>
        </div>
    )
}

export default ImageSection
