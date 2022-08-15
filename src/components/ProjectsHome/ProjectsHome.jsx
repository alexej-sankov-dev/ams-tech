import React from 'react'
import './ProjectsHome.scss'
import { Link } from 'react-router-dom'

import Project1 from '../../assets/media/project1.png'
import Project2 from '../../assets/media/project2.jpg'
import Project3 from '../../assets/media/project3.png'
import PC from '../../assets/media/pc.png'

import Industry from '../../assets/media/industry/industry.svg'
import Agro from '../../assets/media/industry/agroindustrial.svg'
import Build from '../../assets/media/industry/building.svg'
import Fashion from '../../assets/media/industry/fashion.svg'
import Furniture from '../../assets/media/industry/furniture.svg'
import Jewerly from '../../assets/media/industry/jewelry.svg'
import Education from '../../assets/media/industry/education.svg'
import Health from '../../assets/media/industry/health.svg'



const ProjectsHome = () => {
  return (
    <div id='projects' className='projects-wrapper'>
        <div className='projects'>
            <div className='projects-heading'>
                <span className='m-heading heading-text-project'>Unsere Projekte</span>
            </div>
            <div className='project-item project1'>
                <div className='project-image bg-1'>
                    <div className='image-container img-2'>
                        <img src={Project2} alt='img' />
                    </div>
                </div>
                <div className='project-text'>
                    <div className='project-title'>
                        <h3 className='project-title-text'>Kumpan electric</h3>
                    </div>
                    <p className='project-info'>
                        Shop für Leistungsfähige E-Roller „Made in Germany“. Das modulare CMS und moderne Shopsystem bilden ein Content- und Commerce-Hub, mit dem sich Inhalte und Produkte problemlos erweitern lassen.
                    </p>
                    <div className='project-tags'>
                        <p className='project-tag-item'>E-Commerce</p>
                        <p className='project-tag-item'>UI/UX Design</p>
                        <p className='project-tag-item'>Wordpress</p>
                    </div>
                </div>
            </div>
            <div className='project-item project2'>
                <div className='project-image bg-2'>
                    <div className='image-container img-1'>
                        <img src={Project1} alt='img' />
                    </div>
                </div>
                <div className='project-text'>
                    <div className='project-title'>
                        <h3 className='project-title-text'>Token Place</h3>
                    </div>
                    <p className='project-info'>
                        Multi-Exchange Trading Terminal und Portfolio Management Software. Trading über eine Vielzahl von Krypto-Börsen von einem einzigen Konto aus.
                    </p>
                    <div className='project-tags'>
                        <p className='project-tag-item'>Crypto</p>
                        <p className='project-tag-item'>Web App</p>
                        <p className='project-tag-item'>Mobile App</p>
                    </div>
                </div>
            </div>
            <div className='project-item project3'>
                <div className='project-image bg-3'>
                    <div className='image-container'>
                        <div className='image-container img-3'>
                            <img src={Project3} alt='img' />
                        </div>
                    </div>
                </div>
                <div className='project-text'>
                    <div className='project-title'>
                        <h3 className='project-title-text'>Celbrea</h3>
                    </div>
                    <p className='project-info'>
                    Celbrea ist ein integriertes Brustgesundheitsüberwachungssystem für Frauen mit einem Mapping-Gerät, einer App mit fortschrittlichen dynamischen KI-Algorithmen
                    </p>
                    <div className='project-tags'>
                        <p className='project-tag-item'>Health</p>
                        <p className='project-tag-item'>IOS Development</p>
                        <p className='project-tag-item'>React Native</p>
                    </div>
                </div>
            </div>
            <div className='project-item project-contact'>
                <div className='project-contact-inner'>
                    <div className='project-contact-text'><span>Projektidee?</span></div>
                    <Link className='project-contact-btn' to='/contact'>
                        <span>Kontaktieren Sie uns</span>
                    </Link>
                    <div className='project-contact-img'>
                        <img src={PC} alt='img' />
                    </div>
                </div>
            </div>
        </div>
        <div className='project-contact-2'>
            <div className='project-contact-inner'>
                <div className='project-contact-text'><span>Projektidee?</span></div>
                <Link className='project-contact-btn' to='/contact'>
                    <span>Kontaktieren Sie uns</span>
                </Link>
                <div className='project-contact-img'>
                    <img src={PC} alt='img' />
                </div>
            </div>
        </div>    

        <div className='projects2'>
            <div className='industry-heading'>
                <span className='m-heading heading-text-industry'>Branchen</span>
            </div>
            <div className='project-industry ind1'>
                <img src={Industry} alt='icon' className='industry-icon' />
                <div className='industry-title'>
                    Industrie
                </div>
                <div className='industry-info'>
                    <ul className='industry-services'>
                        <li className='industry-service'>8 Projekte</li>
                        <li className='industry-service'>3 Jahre Branchenerfahrung</li>
                        <li className='industry-service'>3 000+ gelöste Tasks</li>
                    </ul>
                </div>
            </div>
            <div className='project-industry ind2'>
                <img src={Agro} alt='icon' className='industry-icon' />
                <div className='industry-title'>
                    Ernährung
                </div>
                <div className='industry-info'>
                    <ul className='industry-services'>
                        <li className='industry-service'>6 Projekte</li>
                        <li className='industry-service'>5 Jahre Branchenerfahrung</li>
                        <li className='industry-service'>1 200+ gelöste Tasks</li>
                    </ul>
                </div>
            </div>
            <div className='project-industry ind3'>
                <img src={Build} alt='icon' className='industry-icon' />
                <div className='industry-title'>
                    Baugewerbe
                </div>
                <div className='industry-info'>
                    <ul className='industry-services'>
                        <li className='industry-service'>15 Projekte</li>
                        <li className='industry-service'>6 Jahre Branchenerfahrung</li>
                        <li className='industry-service'>6 000+ gelöste Tasks</li>
                    </ul>
                </div>
            </div>
            <div className='project-industry ind4'>
                <img src={Fashion} alt='icon' className='industry-icon' />
                <div className='industry-title'>
                    Fashion
                </div>
                <div className='industry-info'>
                    <ul className='industry-services'>
                        <li className='industry-service'>12 Projekte</li>
                        <li className='industry-service'>7 Jahre Branchenerfahrung</li>
                        <li className='industry-service'>1 500+ gelöste Tasks</li>
                    </ul>
                </div>
            </div>
            <div className='project-industry ind5'>
                <img src={Furniture} alt='icon' className='industry-icon' />
                <div className='industry-title'>
                    Möbel
                </div>
                <div className='industry-info'>
                    <ul className='industry-services'>
                        <li className='industry-service'>4 Projekte</li>
                        <li className='industry-service'>3 Jahre Branchenerfahrung</li>
                        <li className='industry-service'>400+ gelöste Tasks</li>
                    </ul>
                </div>
            </div>
            <div className='project-industry ind6'>
                <img src={Jewerly} alt='icon' className='industry-icon' />
                <div className='industry-title'>
                    Schmuck
                </div>
                <div className='industry-info'>
                    <ul className='industry-services'>
                        <li className='industry-service'>3 Projekte</li>
                        <li className='industry-service'>4 Jahre Branchenerfahrung</li>
                        <li className='industry-service'>500+ gelöste Tasks</li>
                    </ul>
                </div>
            </div>
            <div className='project-industry ind7'>
                <img src={Education} alt='icon' className='industry-icon' />
                <div className='industry-title'>
                    Bildung
                </div>
                <div className='industry-info'>
                    <ul className='industry-services'>
                        <li className='industry-service'>5 Projekte</li>
                        <li className='industry-service'>3 Jahre Branchenerfahrung</li>
                        <li className='industry-service'>400+ gelöste Tasks</li>
                    </ul>
                </div>
            </div>
            <div className='project-industry ind8'>
                <img src={Health} alt='icon' className='industry-icon' />
                <div className='industry-title'>
                    Health
                </div>
                <div className='industry-info'>
                    <ul className='industry-services'>
                        <li className='industry-service'>3 Projekte</li>
                        <li className='industry-service'>4 Jahre Branchenerfahrung</li>
                        <li className='industry-service'>300+ gelöste Tasks</li>
                    </ul>
                </div>
            </div>
            <div className='industry-projects'>
                <div className='industry-projects-num'>182</div>
                <div className='industry-projects-text'>erfolgreiche Projekte</div>
            </div>
        </div>
        <div className='industry-projects-2'>
            <div className='industry-projects-num'>182</div>
            <div className='industry-projects-text'>erfolgreiche Projekte</div>
        </div>
    </div>
  )
}

export default ProjectsHome