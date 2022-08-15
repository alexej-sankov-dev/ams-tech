import React from 'react'
import Slider from "react-slick";
import './Clients.scss'

import Company1 from '../../assets/media/clients/companies/light/1.png'
import Company2 from '../../assets/media/clients/companies/light/2.png'
import Company3 from '../../assets/media/clients/companies/light/3.png'
import Company4 from '../../assets/media/clients/companies/light/4.png'
import Company5 from '../../assets/media/clients/companies/light/5.png'
import Company6 from '../../assets/media/clients/companies/light/6.png'
import Company7 from '../../assets/media/clients/companies/light/7.png'


const Clients = () => {
    let width = window.innerWidth;

    let settings = {}
    if (width > 700) {

        
       settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            pauseOnHover: false,
            autoplay: true,
            autoplaySpeed: 3000,
            cssEase: "linear",
            arrows: false,
            className: 'slider-clients-class',
            useTransform: false,
        };
    
    } else {
        settings = {
            dots: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            pauseOnHover: false,
            autoplay: true,
            autoplaySpeed: 3000,
            cssEase: "linear",
            arrows: false,
            className: 'slider-clients-class',
            useTransform: false
        };
    }
    return (
        <div className='clients'>
            
            <div className='clients-text'>
                Unsere Experten in Marketing und Web haben mit über 80+ Unternehmen gearbeitet.
            </div>
            <div className='clients-slider'>
                
                <Slider {...settings}>
                    <div>
                        <img className='slider-img' src={Company1} alt='img' />
                    </div>
                    <div>
                        <img className='slider-img' src={Company2} alt='img' />
                    </div>
                        <img className='slider-img' src={Company3} alt='img' />
                    <div>
                        <img className='slider-img' src={Company4} alt='img' />
                    </div>
                    <div>
                        <img className='slider-img' src={Company5} alt='img' />
                    </div>
                    <div>
                        <img className='slider-img' src={Company6} alt='img' />
                    </div>
                    <div>
                        <img className='slider-img' src={Company7} alt='img' />
                    </div>
                </Slider>
            </div>


        </div>
    )
}

export default Clients