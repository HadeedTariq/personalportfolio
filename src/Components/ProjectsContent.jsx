import React from 'react'
import { Link } from 'react-router-dom'

function ProjectsContent({ project }) {
    return (
        <>
            <Link to={project.link} target='_blank' className='nav-link'>
                <div className="project-content">
                    <img src={project.projectImage} alt="" />
                    <h4>{project.projectName}</h4>
                </div>
            </Link>
        </>
    )
}

export default ProjectsContent