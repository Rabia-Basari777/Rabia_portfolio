import React from 'react';
import gif2 from "../images/gif2.gif";
import gif4 from "../images/gif4.gif";

function Categories({title}) {
    return (
        <div>
            <div className="ImageSection">
                <div className="img">
                    <img width="100%" src={gif2} alt="" />
                    {/* <iframe src="https://giphy.com/embed/L1R1tvI9svkIWwpVYr" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/Pluralsight-computer-technology-coding-L1R1tvI9svkIWwpVYr">via GIPHY</a></p> */}
                </div>
                <div style={{marginLeft: "20px"}} className="about-info">
                    <h4>
                        <span> Nordstrom Clone</span>
                    </h4>
                    <div className="about-details">
                        <div className="left-section">
                            <p>Team Size</p>
                            <p>Duration</p>
                            <p>Team</p>
                            <p>Objective</p>
                            <p>Tech Stack</p>
                        </div>
                        <div className="right-section">
                            <p>: 3</p>
                            <p>: 6 Days</p>
                            <p>: Neeral Malwal, Rabia Basari, Sumit Kumar</p>
                            <p>: To clone the Nordstrom website</p>
                            <p>: HTML, CSS, JavaScript, MongoDB, ExpressJS</p>
                        </div>
                    </div>
                    <a href="https://github.com/neerajmasai/nordstrom-website-clone.git" target="_blank">
                        <button style={{width: "30%"}} className="btn">Take A Look</button>
                    </a>
                </div>
            </div>
            <div style={{marginLeft: "20px"}} className="ImageSection">
                <div className="img">
                    <img width="80%" src={gif4} alt="" />
                </div>
                <div className="about-info">
                    <h4>
                        <span> EaseMyTrip Clone</span>
                    </h4>
                    <div className="about-details">
                        <div className="left-section">
                            <p>Team Size</p>
                            <p>Duration</p>
                            <p>Team</p>
                            <p>Objective</p>
                            <p>Tech Stack</p>
                        </div>
                        <div className="right-section">
                            <p>: 4</p>
                            <p>: 6 Days</p>
                            <p>: Niket, Rabia Basari, Sumit Kumar, Vipul Soni</p>
                            <p>: To clone the EaseMyTrip website</p>
                            <p>: HTML, CSS, JavaScript, MongoDB, ExpressJS</p>
                        </div>
                    </div>
                    <a href="https://github.com/Rabia-Basari777/easemytrip-clone.git" target="_blank">
                        <button style={{width: "30%"}} className="btn">Take A Look</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Categories
