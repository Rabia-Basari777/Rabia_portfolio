import React from "react";
import reactMain from "../images/reactMain.png";
import reduxMain from "../images/reduxMain.png";
import htmlMain from "../images/htmlMain.png";
import cssMain from "../images/css3Main.png";
import jsMain from "../images/jsMain.png";
import bootstrapMain from "../images/bootstrapMain.png";
import mongoMain from "../images/mongoMain.png";
import muiMain from "../images/muiMain.png";
import nodeMain from "../images/nodeMain.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faReact } from '@fortawesome/free-brands-svg-icons';

function SkillsSection({ skill, progress, width }) {
  return (
    <div className="SkillsSection">
      <div className="skillsDiv">
        <div className="skillItem">
          <img
            className="skillImg"
            style={{ marginTop: "25px" }}
            src={reactMain}
            alt=""
          />
          <p style={{marginTop: "5px"}}>REACT</p>
        </div>
        <div className="skillItem">
          <img
            className="skillImg"
            // style={{ borderRadius: "50%" }}
            src={nodeMain}
            alt=""
          />
          <p>NodeJs</p>
        </div>
        <div className="skillItem">
          <img
            className="skillImg"
            // style={{ borderRadius: "50%" }}
            src={mongoMain}
            alt=""
          />
          <p>MongoDb</p>
        </div>
        <div className="skillItem">
          <img
            className="skillImg"
            style={{ objectFit: "cover" }}
            src={htmlMain}
            alt=""
          />
          <p>HTML5</p>
        </div>
        <div className="skillItem">
          <img
            className="skillImg"
            // style={{ borderRadius: "50%" }}
            src={cssMain}
            alt=""
          />
          <p>CSS3</p>
        </div>
        <div className="skillItem">
          <img
            className="skillImg"
            // style={{ borderRadius: "50%" }}
            src={jsMain}
            alt=""
          />
          <p>Javascript</p>
        </div>
        <div className="skillItem">
          <img
            className="skillImg"
            // style={{ borderRadius: "50%" }}
            src={muiMain}
            alt=""
          />
          <p>Git</p>
        </div>
        <div className="skillItem">
          <img
            className="skillImg"
            // style={{ height: "80px", width: "90px" }}
            src={bootstrapMain}
            alt=""
          />
          <p>bootstrap</p>
        </div>
        <div className="skillItem">
          <img
            className="skillImg"
            style={{ marginTop: "25px" }}
            src={reduxMain}
            alt=""
          />
          <p style={{ marginTop: "5px" }}>Redux</p>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
