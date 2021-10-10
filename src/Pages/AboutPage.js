import React from 'react'
import Title from '../Components/Title'
import ImageSection from '../Components/ImageSection'
import SkillsSection from '../Components/SkillsSection'
// import SkillsSection from '../Components/SkillsSection';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBootstrap, faCss3, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';


// import ServicesSection from '../Components/ServicesSection'
// import projects from "../images/projects.png";

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'} />
            <SkillsSection />
        </div>
    )
}

export default AboutPage
