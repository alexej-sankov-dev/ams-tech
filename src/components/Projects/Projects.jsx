import React from 'react'
import './Projects.scss'
import Project1 from '../../assets/media/project1.png'

const Projects = () => {
  return (
    <div className='projects'>
        <div className='projects-heading'>
            <span className='m-heading heading-text'>Projekte</span>
        </div>
        <div className='project-item'>
            <div className='project-image'>
                <a href="/" className='image-container'>
                    <img src={Project1} alt="project1" />
                </a>
            </div>
            <div className='project-text'>
                <div className='project-tags'>
                    B2C, Content Management, SAAS
                </div>
                <div className='project-title'>
                    Token Place - Multi-Exchange Trading Terminal und Portfolio Management Service
                </div>
                <a href='/' className='project-btn'>Contact</a>
                <div className='project-technologies'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects