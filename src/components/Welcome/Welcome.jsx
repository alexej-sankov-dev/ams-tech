import React from 'react'
import './Welcome.scss'
import animation from '../../assets/media/animation-workers-20001.mp4'
import animation2 from '../../assets/media/animation-workers-20002.mp4'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import {ReactComponent as GIcon} from '../../assets/media/google-partner.svg'
import {ReactComponent as YIcon} from '../../assets/media/yext.svg'
import {ReactComponent as CIcon} from '../../assets/media/clutch.svg'
import { ColorLens } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faS } from '@fortawesome/free-solid-svg-icons';


const Welcome = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  let screenwd = window.screen.width;
  document.documentElement.style.setProperty('--screenwd', `${screenwd}px`);  

  return (
    <div id='home' className='welcome'>
        <div className='wel-wrapper'>
            <div className='wel-text-1'>
                <h1 className='wel-text-big'>A <span className='wel-text-pur'>digital agency</span><br />focused on growth.</h1>
                <div className='wel-text-small'>
                     Wir helfen Statups und Unternehmen digitale Produkte zu entwickeln und immer einen Schritt voraus zu sein durch  
                     <div className='wel-text-pur wel-text-animated'>
                        <Typewriter
                            options={{
                            strings: ['Web Development', 'Design', 'Mobile Development', 'Marketing'],
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            pauseFor: 2000
                        }}
                        />
                    </div>
                </div>
                <div className='wel-btns'>
                    <Link className='wel-contact-btn' to="/contact">
                        <span className='wel-contact-btn-text'>Lass uns reden</span>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </Link>
                </div>
            </div>
            <div className='wel-media'>
                <video loop autoPlay muted playsInline={true} src={animation} className='wel-video vid-b'></video>
                <video loop autoPlay muted playsInline={true} src={animation2} className='wel-video vid-s'></video>
            </div>
            <div className='wel-awards'>
                <ul className='wel-awards-list'>
                    <li className='wel-award'>
                        <GIcon className='wel-icon'/>
                    </li>
                    <li className='wel-award aw-b-icon'>
                        <YIcon className='wel-icon'/>
                    </li>
                    <li className='wel-award wel-award-last '>
                        <CIcon className='wel-icon'/>
                    </li>
                </ul>
            </div>
            
            
        </div>
    </div>

  )
}

export default Welcome