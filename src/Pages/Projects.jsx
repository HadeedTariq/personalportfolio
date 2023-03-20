import React, { useState } from 'react'
import '../Css/Projects.css'
import { ProjectsContent,ProjectData } from '../constants'
function Projects() {
  const [project,setProject]=useState(ProjectData)
  return (
    <>
    <div className="project-changer">
      <select>
        <option>Basic</option>
        <option>advanced</option>
      </select>
    </div>
    
    <div className="project">
      {
        project?.map((project,index)=>
         <div className="projects-data" key={index}>
           <ProjectsContent project={project}/>
         </div>
        )
      }
    </div>
    </>
  )
}

export default Projects