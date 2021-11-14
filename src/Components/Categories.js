import React from 'react';
// import gif2 from "../images/gif2.gif";
import reactMain2 from "../images/reactMain2.png";
// import redux from "../images/redux.jpeg";
import htmlMain from "../images/htmlMain.png";
import css3Main2 from "../images/css3Main2.png";
import jsMain from "../images/jsMain.png";
import bootstrapMain from "../images/bootstrapMain.png";
import mongoMain from "../images/mongoMain.png";
// import mui from "../images/mui2.png";
import nodeMain2 from "../images/nodeMain2.png";
import landing from "../images/landingPage.PNG";
import ease from "../images/easemyTripLand.jpeg";
import linkedinHome from "../images/linkedinHome.PNG"

function Categories({title}) {
    return (
        <div>
            <div className="projectMainSection">
                <div className="projectSection">
                    <div className="img">
                        <img src={linkedinHome} alt="" />
                        {/* <iframe src="https://giphy.com/embed/L1R1tvI9svkIWwpVYr" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/Pluralsight-computer-technology-coding-L1R1tvI9svkIWwpVYr">via GIPHY</a></p> */}
                    </div>
                    <h1>Linkedin Clone</h1>
                    <p>Built the clone of Linkedin, a platform for professional networking and career developement. Implemented adding posts, like and comment feature. Built the networks page where we can send connect requests to different users. Also implemented the chat functionality where we acn send messages to different users in our network. 
                    </p>
                    <div className="btnDiv">
                        <a href="https://github.com/chiranjeev-thapliyal/linkedin-client.git" target="_blank" rel="noopener noreferrer">
                            <button className="projectBtn">Github</button>
                        </a>
                        <a href="https://linkedin-masai.netlify.app" target="_blank" rel="noopener noreferrer">
                            <button className="projectBtn">Demo</button>
                        </a>
                    </div>
                    <div className="projectIcons">
                        <img src={reactMain2} alt="" width="80px" height="85px" style={{marginTop: "5px"}}/>
                        <img src={css3Main2} alt="" />
                        <img src={mongoMain} alt="" />
                        <img src={nodeMain2} alt="" />
                    </div>
                </div>
            </div>
            <div className="projectMainSection">
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
                        <a href="https://nordstrom-clone-bay.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <button className="projectBtn">Demo</button>
                        </a>
                    </div>
                    <div className="projectIcons">
                        <img src={htmlMain} alt="" />
                        <img src={css3Main2} alt="" />
                        <img src={jsMain} alt="" />
                        <img src={bootstrapMain} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories
