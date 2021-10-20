import React from 'react';
// import gif2 from "../images/gif2.gif";
import reactIcon from "../images/react1.png";
import redux from "../images/redux.jpeg";
import html from "../images/html5.png";
import css from "../images/css3.png";
import js7 from "../images/js7.jpg";
import bootstrap from "../images/bootstrap2.png";
import mongo from "../images/mongodb2.jpg";
import mui from "../images/mui2.png";
import node from "../images/node.png";
import landing from "../images/landingPage.PNG";
import ease from "../images/easemyTripLand.jpeg";

function Categories({title}) {
    return (
        <div>
            <div>
                <div className="projectSection">
                    <div className="img">
                        <img src={ease} alt="" />
                        {/* <iframe src="https://giphy.com/embed/L1R1tvI9svkIWwpVYr" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/Pluralsight-computer-technology-coding-L1R1tvI9svkIWwpVYr">via GIPHY</a></p> */}
                    </div>
                    <h1>EaseMyTrip Clone</h1>
                    <p>Built the clone of EaseMyTrip, an online travel portal where users can be able to search for flights basis date, departure and arrival places. Also implemented Filter functionality for airlines. 
                    </p>
                    <div className="btnDiv">
                        <a href="https://github.com/Rabia-Basari777/easemytrip-clone.git" target="_blank" rel="noopener noreferrer">
                            <button className="projectBtn">Github</button>
                        </a>
                        <a href="https://drive.google.com/file/d/1ZaJGsQXw-Pl9zNtJFRg9HVngTOwjwHUT/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button className="projectBtn">Demo</button>
                        </a>
                    </div>
                    <div className="projectIcons">
                        <img style={{borderRadius: "50%"}} src={reactIcon} alt="" />
                        <img style={{borderRadius: "50%"}} src={css} alt="" />
                        <img style={{borderRadius: "48%", height: "50px"}} src={mongo} alt="" />
                        <img style={{borderRadius: "48%", height: "50px"}} src={node} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div className="projectSection">
                    <div className="img">
                        <img src={landing} alt="" />
                        {/* <iframe src="https://giphy.com/embed/L1R1tvI9svkIWwpVYr" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/Pluralsight-computer-technology-coding-L1R1tvI9svkIWwpVYr">via GIPHY</a></p> */}
                    </div>
                    <h1>Nordstrom Clone</h1>
                    <p>Cloned the e-commerce website Nordstrom, in which different products related to men, women and beautycare are available. Implemented sort functionalities for price and Product zoom-in feature in the Product page. </p>
                    <div className="btnDiv">
                        <a href="https://github.com/Rabia-Basari777/nordstrom_clone.git" target="_blank" rel="noopener noreferrer">
                            <button className="projectBtn">Github</button>
                        </a>
                        <a href="https://drive.google.com/file/d/1C5JfF0t1I6_cHZREayOVHTEhYkAvms0-/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button className="projectBtn">Demo</button>
                        </a>
                    </div>
                    <div className="projectIcons">
                        <img style={{borderRadius: "50%"}} src={html} alt="" />
                        <img style={{borderRadius: "50%"}} src={css} alt="" />
                        <img style={{borderRadius: "50%"}} src={js7} alt="" />
                        <img style={{borderRadius: "50%"}} src={bootstrap} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories
