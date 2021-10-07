import React from 'react';
import Title from '../Components/Title';
import Categories from "../Components/Categories";

function ProjectsPage() {
    return (
        <div className="ProjectsPage">
            <div className="title">
                <Title title={'Projects'} span={'Projects'} />
            </div>
            <div className="projects">
                <Categories />
            </div>
        </div>
    )
}

export default ProjectsPage
