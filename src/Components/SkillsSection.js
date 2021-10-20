import React from 'react';
import reactIcon from "../images/react1.png";
import redux from "../images/redux.jpeg";
import html from "../images/html5.png";
import css from "../images/css3.png";
import js7 from "../images/js7.jpg";
import bootstrap from "../images/bootstrap2.png";
import mongo from "../images/mongodb2.jpg";
import mui from "../images/mui2.png";
import node from "../images/node.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faReact } from '@fortawesome/free-brands-svg-icons';

function SkillsSection({skill, progress, width}) {
    return (
        <div className="SkillsSection">
            <div className="skillsDiv">
                <div className="skillItem">
                    <img className="skillImg" style={{borderRadius: "50%"}} src={reactIcon} alt="" />
                    <p >REACT</p>
                </div>
                <div className="skillItem">
                    <img className="skillImg" style={{borderRadius: "50%"}} src={node} alt="" />
                    <p >NodeJs</p>
                </div>
                <div className="skillItem">
                    <img className="skillImg" style={{borderRadius: "50%"}} src={mongo} alt="" />
                    <p >MongoDb</p>
                </div>
                <div className="skillItem">
                    <img className="skillImg" style={{borderRadius: "50%", objectFit: "cover"}} src={html} alt="" />
                    <p >HTML</p>
                </div>
                <div className="skillItem">
                    <img className="skillImg" style={{ borderRadius: "50%"}} src={css} alt="" />
                    <p >CSS</p>
                </div>
                <div className="skillItem">
                    <img className="skillImg" style={{borderRadius: "50%"}} src={js7} alt="" />
                    <p >Javascript</p>
                </div>
                <div className="skillItem">
                    <img className="skillImg" style={{borderRadius: "50%"}} src={mui} alt="" />
                    <p >Material Ui</p>
                </div>
                <div className="skillItem">
                    <img className="skillImg" style={{height: "80px", width: "90px", borderRadius: "50%"}} src={bootstrap} alt="" />
                    <p >bootstrap</p>
                </div>
                <div className="skillItem">
                    <img className="skillImg" style={{borderRadius: "50%"}} src={redux} alt="" />
                    <p >REdux</p>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection
