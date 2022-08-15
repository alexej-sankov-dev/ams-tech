import React from 'react'
import './About.scss'

import Years from '../../assets/media/whyus/shield.svg'
import Team from '../../assets/media/whyus/staff.svg'
import Projects from '../../assets/media/whyus/chalice.svg'
import Smile from '../../assets/media/whyus/smile.svg'
import Forbes from '../../assets/media/whyus/forbes.svg'

import Award1 from '../../assets/media/whyus/awards1.png'
import Award2 from '../../assets/media/whyus/awards2.svg'
import Award3 from '../../assets/media/whyus/awards3.png'

import Decor from '../../assets/media/whyus/about-decor.svg'

import PointBg from '../../assets/media/whyus/process/point-bg.svg'
import Point from '../../assets/media/whyus/process/point1.png'
import LineBg from '../../assets/media/whyus/process/line-bg.svg'
import Line from '../../assets/media/whyus/process/line1.png'
import CircleBg from '../../assets/media/whyus/process/circle-bg.svg'
import Circle from '../../assets/media/whyus/process/circle1.png'
import CircleDark from '../../assets/media/whyus/process/circle-dark4.png'


const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-heading'>
            <span className='m-heading heading-text-about'>Über uns</span>
        </div>
        <div className='about-main'>
            <img src={Decor} className='about-img' alt='img' />
            <div className='about-main-title'>TOP-10</div>
            <div className='about-main-text'>
                In Raitings als Digitalagentur laut Branchenexperten
            </div>
            <div className='about-main-logos'>
                <img className='award1' src={Award1} alt='img' />
                <img className='award2' src={Award2} alt='img' />
                <img className='award3' src={Award3} alt='img' />
            </div>
        </div>
        <div className='about-text-info'>
            <p>
                <span>«AMS Tech»</span> ist keine durchschnittliche Digitalagentur. <b>Wir arbeiten daran Ihr Unternemhen zu verstehen</b> und Technologie- und Marketinglösungen zu nutzen, um Umsatz zu generieren und Gewinne zu steigern. Wir bieten <b>die absolut besten digitalen Spezialisten</b> in Marketing, Softwareentwicklung und Webdesign Detuschlands.
            </p>
        </div>
        <div className='about-card c1'>
            <span className='about-icon'>
                <img src={Smile} alt='icon' />
            </span>
            <span className='about-title'>
                Langfristige Partnerschaft
            </span>
            <div className='about-text'>
                Wir streben danach langfristige Beziehungen zu unseren Kunden aufzubauen.
            </div>
        </div>
        <div className='about-card c2'>
            <span className='about-icon'>
                <img src={Forbes} alt='icon' />
            </span>
            <span className='about-title'>
                Transparenz
            </span>
            <div className='about-text'>
                Wir sind bei jedem Schritt offen und ehrlich mit unseren Kunden.
            </div>
        </div>
        <div className='about-card c3'>
            <span className='about-icon'>
                <img src={Years} alt='icon' />
            </span>
            <span className='about-title'>
                6 Jahre
            </span>
            <div className='about-text'>
                Seit 6 Jahren entwickeln wir Projekte, die Unternehmen beim Wachsen unterstützen.
            </div>
        </div>
        <div className='about-card c4'>
            <span className='about-icon'>
                <img src={Team} alt='icon' />
            </span>
            <span className='about-title'>
                15 Team Mitglieder
            </span>
            <div className='about-text'>
                Mehr als 15 Talente sind Teil unseres Teams und wir freuen uns auf viele weitere.
            </div>
        </div>
        <div className='about-card c5'>
            <span className='about-icon'>
                <img src={Projects} alt='icon' />
            </span>
            <span className='about-title'>
                182 Projekte
            </span>
            <div className='about-text'>
                Bis heute haben wir 182 Projekte erfolgreich absolviert, von denen wir gerne erzählen.
            </div>
        </div>
        <div className='process-heading'>
            <span className='m-heading'>Unser Projekt Entwicklungs Prozess</span>
        </div>
        <div className='process-wrapper'>
            <div className='process'>
                <div className='process-side process-left'>
                    <span className='process-edge-text'>
                        Briefing
                    </span>
                    <div className='point-wrapper-first'>
                        <span className='point'>
                            <span className='point1'>
                                <img className='point-bg' src={PointBg} alt='img' />
                            </span>
                            <img className='point-img' src={Point} alt='img' />
                        </span>
                    </div>
                    <div className='line-wrapper'>
                        <span className='line'>
                            <span className='line1'>
                                <img className='line-bg' src={LineBg} alt='img' />
                            </span>
                            <img className='line-img' src={Line} alt='img' />
                        </span>
                    </div>
                    <div className='point-wrapper-second'>
                        <span className='point'>
                            <span className='point1'>
                                <img className='point-bg' src={PointBg} alt='img' />
                            </span>
                            <img className='point-img' src={Point} alt='img' />
                        </span>
                    </div>
                </div>
                <div className='process-circle process-circle-left'>
                    <div className='circle-outer'>
                        <span className='circle'>
                            <span className='circle1'>
                                <img className='circle-bg' src={CircleBg} alt='img' />
                            </span>
                            <img className='circle-img' src={Circle} alt='img' />
                        </span>
                    </div>
                    <div className='circle-inner'></div>
                    <span className='circle-text'>
                        Analyse
                    </span>
                </div>
                <div className='process-circle process-circle-center'>
                    <div className='circle-outer'>
                        <span className='circle'>
                            <span className='circle1'>
                                <img className='circle-bg' src={CircleBg} alt='img' />
                            </span>
                            <img className='circle-img' src={CircleDark} alt='img' />
                        </span>
                    </div>
                    <div className='circle-inner'></div>
                    <span className='circle-text'>
                        Design
                    </span>
                </div>
                <div className='process-circle process-circle-right'>
                    <div className='circle-outer'>
                        <span className='circle'>
                            <span className='circle1'>
                                <img className='circle-bg' src={CircleBg} alt='img' />
                            </span>
                            <img className='circle-img' src={Circle} alt='img' />
                        </span>
                    </div>
                    <div className='circle-inner'></div>
                    <span className='circle-text'>
                        Development
                    </span>
                </div>
                <div className='process-side process-right'>
                    <span className='process-edge-text'>
                        Betrieb    
                    </span>
                    <div className='point-wrapper-first'>
                        <span className='point'>
                            <span className='point1'>
                                <img className='point-bg' src={PointBg} alt='img' />
                            </span>
                            <img className='point-img' src={Point} alt='img' />
                        </span>
                    </div>
                    <div className='line-wrapper'>
                        <span className='line'>
                            <span className='line1'>
                                <img className='line-bg' src={LineBg} alt='img' />
                            </span>
                            <img className='line-img' src={Line} alt='img' />
                        </span>
                    </div>
                    <div className='point-wrapper-second'>
                        <span className='point'>
                            <span className='point1'>
                                <img className='point-bg' src={PointBg} alt='img' />
                            </span>
                            <img className='point-img' src={Point} alt='img' />
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className='process-stage1'>
            <div className='process-stage-heading'>
                1. Analyse & Strategie
            </div>
            <div className='process-stage-text'>
                In dieser Phase geht es vorallem ums Verstehen von Märkten und Zielgruppen. Auf diesem Verständnis definieren wir mit Ihnen die Ziele und erarbeiten die beste Strategie.
            </div>
        </div>
        <div className='process-stage2'>
            <div className='process-stage-heading'>
                2. UI & Web Design
            </div>
            <div className='process-stage-text'>
                Unser Design-Ansatz macht unseren Design Prozess hocheffizient. Wir arbeiten Wireframes und High-Fidelity-Mockups für Ihr Produkt aus, um eine einfache und zugängliche UI zu erstellen.
            </div>
        </div>
        <div className='process-stage3'>
            <div className='process-stage-heading'>
                3. Development
            </div>
            <div className='process-stage-text'>
            Aus Ideen werden greifbare Ergebnisse. Wir entwickeln Prototypen und Zeile für Zeile den Code, der später so zuverlässig funktioniert. Agil, zielführend und absolut gekonnt.
            </div>
        </div>
    </div>
  )
}

export default About