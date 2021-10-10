import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faReact } from '@fortawesome/free-brands-svg-icons';

function SkillsSection({skill, progress, width}) {
    return (
        <div classNmae="SkillsSection">
            <button style={{marginRight: "20px", marginTop: "5rem"}} className="btn">HTML5</button>
            <button style={{marginRight: "20px"}} className="btn">CSS3</button>
            <button style={{marginRight: "20px"}} className="btn">JavaScript</button>
            <button style={{marginRight: "20px"}} className="btn">React</button>
            <button style={{marginRight: "20px"}} className="btn">MongoDB</button>
            <button style={{marginRight: "20px"}} className="btn">NodeJS</button>
            <button style={{marginRight: "20px"}} className="btn">ExpressJS</button>
            <button style={{marginRight: "20px"}} className="btn">Bootstrap</button>
        </div>
    )
}

export default SkillsSection
