import React from 'react';
// import gif2 from "../images/gif2.gif";
import reactIcon from "../images/reactIcon.png";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/javascript.png";
import bootstrap from "../images/bootstrap.jpg";
import landing from "../images/landingPage.PNG";
import mongo from "../images/mongodb2.jpg";
import mui from "../images/mui.jpg";
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
                    <p>EaseMyTrip is an Indian Online travel company that provides
                        hotel bookings, air tickets, holiday packages, bus bookings and white-label services.
                    </p>
                    <div className="btnDiv">
                        <button className="projectBtn">Github</button>
                        <button className="projectBtn">Demo</button>
                    </div>
                    <div className="projectIcons">
                        <img src={reactIcon} alt="" />
                        <img src={css} alt="" />
                        <img style={{borderRadius: "48%", height: "50px"}} src={mongo} alt="" />
                        <img style={{borderRadius: "48%", height: "50px"}} src={mui} alt="" />
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
                    <p>Nordstrom is an international e-commerce website, which provides clothing, footwear, handbags, jewellery, accessories, cosmetics and frangrances.</p>
                    <div className="btnDiv">
                        <button className="projectBtn">Github</button>
                        <button className="projectBtn">Demo</button>
                    </div>
                    <div className="projectIcons">
                        <img src={html} alt="" />
                        <img src={css} alt="" />
                        <img src={js} alt="" />
                        <img style={{borderRadius: "48%", height: "55px"}} src={bootstrap} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories
