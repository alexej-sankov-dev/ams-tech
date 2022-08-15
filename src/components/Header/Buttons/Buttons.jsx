import React from 'react'

import './Buttons.scss'

import { Link } from 'react-router-dom'

import Whatsapp from '../../../assets/media/whatsapp.svg'

const Buttons = () => {
  return (
    <div className='buttons-header'>
        <a className='button-wa' href='https://wa.me/491791306809' target='_blank'>
          <div className='btn-wa'>
            <img src={Whatsapp} alt='img' />
          </div>
          <div className='tel-num'>
              +49 1791-306809
          </div>
        </a>
        <Link className='contact-btn' to='/contact'>
            <span className='contact-btn-text'>Kontakt</span>
        </Link>
    </div>
  )
}

export default Buttons