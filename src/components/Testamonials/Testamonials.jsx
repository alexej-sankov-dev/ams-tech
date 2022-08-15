import React from "react";
import { useEffect, useState, useRef } from 'react'

import Slider from "react-slick";
import './Testamonials.scss'

import Quote from '../../assets/media/clients/quote1.svg'
import Stars from '../../assets/media/clients/stars.svg'

import Client1 from '../../assets/media/clients/persons/1.jpg'
import Client2 from '../../assets/media/clients/persons/2.jpg'
import Client3 from '../../assets/media/clients/persons/3.jpg'
import Client4 from '../../assets/media/clients/persons/4.png'
import Client5 from '../../assets/media/clients/persons/5.png'
import Client6 from '../../assets/media/clients/persons/6.png'

const data = [
    {
        text: "Unser Unternehmen arbeitete mit AMS Tech zusammen, um eine Website zu entwickeln mit einem CMS System. Während des gesamten Prozesses war jeder bei AMS Tech kommunikativ, entgegenkommend und positiv. Sie waren immer bereit, unsere Anfragen zu besprechen und haben eigene Ideen vorgeschlagen.",
        name: "Tim Peitz",
        position: "Corporate Development / SEA Limited",
        img: Client1
    },
    {
        text: "AMS Tech ist über die Neugestaltung unserer Website hinausgegangen. Sie sind flexibel, professionell, schnell und kreativ. Ihr Kundenservice ist erstaunlich und man merkt, dass es ihnen wirklich wichtig ist, kleine Unternehmen durch ihre Arbeit zu unterstützen. Ich empfehle sie jedem.",
        name: "Juliane Stöckel",
        position: "Marketing Lead / Immobilienmarkler",
        img: Client2
    },
    {
        text: "Die Zusammenarbeit mit AMS Tech war wirklich eine wunderbare Erfahrung. Von unserem Briefing bis zu unserer Implementierung hatte AMS Tech die Kerativität, um von einer Idee zu einem vollständigem Ergebnis zu gelangen. Darüber hinaus sind sie Weltklasse-Kommunikatoren, was den Prozess sehr transparent macht.",
        name: "David Kalt",Briefing: "CEO /",
        img: Client6
    },
    {
        text: "AMS Tech ist ein unglaublicher Partner für unser Geschäft! Sie sind keine gewöhnliche Digitalagentur. Ihr fokussierter Ansatz und ihre wahre Leidenschaft, Ihr Geschäft zu verstehen, heben sie von anderen ab! Wir arbeiten mit AMS Tech nicht nur im Bereich Marketing, sondern nutzen sie als unseren CTO.",
        name: "Mark Scheppmann",
        position: "CEO / ABS",
        img: Client4
    },
    {
        text: "Ich arbeite jetzt seit fast zwei Jahren mit AMS Tech zusammen. Ich war sehr zufrieden mit ihrer Arbeit. Sie haben für mich zwei Websites erstellt. Beide Websites sind einfach benutzerfreundlich und ästhetisch sehr modern. Wir haben viele positive Kommentare von Kunden bezüglich unserer Webseiten  erhalten.",
        name: "Annika Heinson",
        position: "Founder / Zentrum für Veterinärchirurgie",
        img: Client5
    },
    {
        text: "AMS Tech ist großartig! Wir arbeiteten früher mit einer anderen Agentur zusammen, bekamen aber keine Bestellungen, nachdem wir Budget für Google ausgegeben hatten. AMS Tech hat uns geholfen die Designs auf der Website zu überarbeiten, bei Marketing und SEO, sodass unser Geweinn stark gestiegen ist.",
        name: "Mark Danilov",
        position: "CEO / Onlineshop für Autoteile",
        img: Client3
    }
]


const Testamonials = () => {

    const sliderRef = useRef();

    const gotoNext = () => {
        sliderRef.current.slickNext();
    }
    
   
    const [progressPercentage, setProgressPercentage] = useState(0);
    

    const step = 0.25
    const interval = 10
    const maxProgress = 100

     
    useEffect(() => {
        const updateProgress = () => setProgressPercentage(progressPercentage + step)
        if (progressPercentage < maxProgress) {
            setTimeout(updateProgress, interval)
        } else {
            setProgressPercentage(0)
            gotoNext()
        }
    }, [progressPercentage])
    


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        speed: 500,
        arrows: false,
        useTransform: false,
        //cssEase: "linear",
        //fade: true

    };


    return (
        <div className='test-wrapper'>
            <div className="test">
                <div className='test-heading'>Was unsere Kunden sagen</div>
                <Slider className='test-slider' ref={sliderRef} {...settings}>

                    {data.map((item, index) => {
                        return (
                            <div className="test-item" key={index}>
                                <div className="test-box">
                                    <div className="test-info">
                                        <div className='test-info-img'>
                                            <img src={item.img} alt='img' />
                                        </div>
                                        <p>
                                            {item.name}
                                            <span>{item.position}</span>
                                        </p>
                                    </div>
                                    <div className="test-text">
                                        <div className='test-text-quote'>
                                            <img src={Quote} alt='img' />
                                        </div>
                                        <div className='test-text-stars'>
                                            <img src={Stars} alt='img' />
                                        </div>
                                        <p>
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
            <div className="bar" style={{ width: progressPercentage + "%" }}></div>
        </div>
    )
}

export default Testamonials;