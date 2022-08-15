import React from 'react'
import './ContactInfo.scss'
import { Link } from 'react-router-dom'
import Mail from '../../assets/media/mail.svg'

import Decor from '../../assets/media/whyus/about-decor.svg'
import Whatsapp from '../../assets/media/whatsapp-white.svg'


const ContactInfo = () => {
  return (
    <div className='contact-info-wrapper'>
      <div className='contact-info'>
        <div className='contact-info-bg-wrapper'>
          <img className='contact-info-bg' src={Decor} alt='img' preserveaspectration='none' />
        </div> 
        <div className='contact-info-text'>
          <div className='contact-info-text-big'>Ready to Grow?</div>
          <div className='contact-info-text-small'>
            Gerne besprechen wir Ihre Projektdetails mit Ihnen und beantworten Ihre Fragen.  
          </div>
        </div>
        <div className='contact-info-sec'>
          <Link className='contact-info-btn' to='/contact'>
            <span className='contact-btn-text'>Projekt starten</span>
            <span className='contact-btn-icon'>
              <img src={Mail} alt='img' />
            </span>
          </Link>
          <div className='contact-info-logos'>
            
            <a href='https://wa.me/491791306809' target='_blank'>
              <img src={Whatsapp} alt='img' />
            </a>
            <a href='https://t.me/amstechcontact' target='_blank'>
              <svg width="24" height="24" viewBox="0 0 24 24"><path d="M23.602 2.034a1.8 1.8 0 0 0-.944.068S1.63 9.659.43 10.496c-.259.18-.346.284-.389.408-.208.595.439.858.439.858l5.42 1.766a.6.6 0 0 0 .274-.017l13.05-8.07c.101-.031.176 0 .16.075-.264.905-9.911 9.478-9.964 9.53a.2.2 0 0 0-.059.079c-.013.031-.018.064-.016.098l-.504 5.288s-.211 1.65 1.435 0c1.168-1.169 2.288-2.137 2.85-2.607 1.864 1.286 3.869 2.709 4.734 3.45a1.5 1.5 0 0 0 1.098.424c.825-.031 1.05-.934 1.05-.934s3.831-15.416 3.96-17.483c.012-.203.029-.332.031-.471.007-.161-.009-.322-.047-.478-.04-.179-.173-.324-.35-.378z"></path></svg>
            </a>
            <a href='https://instagram.com/amstech' target='_blank'>
              <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 15.8a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0-3.291 5.7A3.8 3.8 0 0 0 12 15.8h0zM16.749.6h-9.5A6.66 6.66 0 0 0 .6 7.251v9.5A6.66 6.66 0 0 0 7.251 23.4h9.5a6.66 6.66 0 0 0 6.649-6.651v-9.5A6.66 6.66 0 0 0 16.749.6zM12 17.7A5.71 5.71 0 0 1 6.3 12 5.71 5.71 0 0 1 12 6.3a5.71 5.71 0 0 1 5.7 5.7 5.71 5.71 0 0 1-5.7 5.7zm6.65-11.4a.95.95 0 0 1 0-1.9.95.95 0 1 1 0 1.9z"></path></svg>
            </a>
            <a href='https://twiiter.com/amstech' target='_blank'>
              <svg width="24" height="24" viewBox="0 0 24 24"><path d="M24.075 4.325c-.9.375-1.8.675-2.85.75 1.05-.6 1.8-1.575 2.175-2.7-.975.6-2.025.975-3.15 1.2C19.35 2.6 18.075 2 16.725 2c-2.7 0-4.95 2.175-4.95 4.95 0 .375.075.75.15 1.125C7.8 7.85 4.2 5.9 1.725 2.9a4.72 4.72 0 0 0-.675 2.475c0 1.725.9 3.225 2.175 4.125-.825 0-1.575-.225-2.25-.6v.075c0 2.4 1.725 4.35 3.975 4.8-.45.075-.825.15-1.275.15-.3 0-.6 0-.9-.075.6 1.95 2.475 3.375 4.575 3.45-1.65 1.35-3.825 2.1-6.15 2.1-.375 0-.825 0-1.2-.075 2.25 1.35 4.875 2.175 7.65 2.175 9.075 0 14.025-7.5 14.025-14.025v-.6c.9-.75 1.725-1.575 2.4-2.55z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo