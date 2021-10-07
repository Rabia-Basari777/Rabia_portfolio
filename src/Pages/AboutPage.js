import React from 'react'
import Title from '../Components/Title'
import ImageSection from '../Components/ImageSection'
import SkillsSection from '../Components/SkillsSection'
import ServicesSection from '../Components/ServicesSection'
import projects from "../images/projects.png";

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'React JS'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'JavaScript'} progress={'60%'} width={ '60%' }/>
                <SkillsSection skill={'HTML'} progress={'70%'} width={ '70%' }/>
                <SkillsSection skill={'CSS'} progress={'75%'} width={ '75%'} />
                <SkillsSection skill={'MongoDB'} progress={'60%'} width={ '60%' }/>
                <SkillsSection skill={'NodeJS'} progress={'70%'} width={ '70%' }/>
                <SkillsSection skill={'ExpressJS'} progress={'70%'} width={ '70%' }/>
                <SkillsSection skill={'Redux'} progress={'60%'} width={ '60%' }/>
            </div>
            {/* <Title title={'Services'} span={'Services'} />
            <div className="services-container">
                <ServicesSection image={projects} title={'web design'} text={ 'These are the services I have worked on'}/>
                <ServicesSection image={projects} title={'web design'} text={ 'These are the services I have worked on'} />
                <ServicesSection image={projects} title={ 'web design'} text={ 'These are the services I have worked on'}/>
            </div> */}
        </div>
    )
}

export default AboutPage
