import React from 'react'
import { Link } from 'react-router-dom'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {FaHome} from 'react-icons/fa'
import {FcAbout} from 'react-icons/fc'
import {GrProjects} from 'react-icons/gr'
import '../Css/NavBar.css'
function NavBar() {
  return (
    <div className="nav">
        <div className="nav-bar">
            <Link to={'/'} className='nav-icons'><FaHome size={30}  title='Home'/></Link>
            <Link to={'/about'} className='nav-icons'><FcAbout size={30}  title='About'/></Link>
            <Link to={'/project'} className='nav-icons'><GrProjects size={30}  title='Projects'/></Link>
            <Link className='nav-icons' to={'https://github.com/HadeedTariq'}target='_blank'><BsGithub  title='Github' size={30}/></Link>
            <Link to={'https://www.linkedin.com/in/hadeed-tariq-16b45925a/'} className='nav-icons' target={'_blank'}><BsLinkedin  title='Linkedin' size={30}/></Link>
        </div>
    </div>
  )
}

export default NavBar