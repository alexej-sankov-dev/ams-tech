import React from 'react'
import './Services.scss'
import { Link } from 'react-router-dom'

import Web from '../../assets/media/web.svg'
import Mobile from '../../assets/media/mobile.svg'
import Design from '../../assets/media/design.svg'
import Marketing from '../../assets/media/marketing.png'
import Blockchain from '../../assets/media/blockchain.svg'
import Tech from '../../assets/media/tech.svg'

import ReactIcon from '../../assets/media/tech-stack/small/web/React-Copy.png'
import Wordpress from '../../assets/media/tech-stack/small/web/Wordpress.png'
import Shopify from '../../assets/media/tech-stack/small/web/Shopify.png'
import Angular from '../../assets/media/tech-stack/small/web/Angular-1.png'
import Lavarel from '../../assets/media/tech-stack/small/web/Laravel.png'
import Vue from '../../assets/media/tech-stack/small/web/Vue.png'

import SwiftIcon from '../../assets/media/tech-stack/small/mobile/Swift1.png'
import Ionic from '../../assets/media/tech-stack/small/mobile/Ionic.png'
import ReactJSIcon from '../../assets/media/tech-stack/small/web/React-Copy.png'
import Kotlin from '../../assets/media/tech-stack/small/mobile/Kotlin.png'
import IOSApple from '../../assets/media/tech-stack/small/mobile/ios-apple.png'
import Android from '../../assets/media/tech-stack/small/mobile/Andriod.png'

import XD from '../../assets/media/tech-stack/small/design/XD.svg'
import PS from '../../assets/media/tech-stack/small/design/Photoshop.png'
import AI from '../../assets/media/tech-stack/small/design/Illustrator.png'
import Sketch from '../../assets/media/tech-stack/small/design/Sketch.png'
import Figma from '../../assets/media/tech-stack/small/design/Figma.png'
import Anima from '../../assets/media/tech-stack/small/design/Anima.png'

import GAd from '../../assets/media/tech-stack/small/marketing/Google-Adwords.svg'
import Fb from '../../assets/media/tech-stack/small/marketing/Facebook-1.svg'
import Inst from '../../assets/media/tech-stack/small/marketing/Instagram.png'
import Hubspot from '../../assets/media/tech-stack/small/marketing/Hubspot.svg'
import Mailchimp from '../../assets/media/tech-stack/small/marketing/Mailchimp.svg'
import Tiktok from '../../assets/media/tech-stack/small/marketing/Tiktok.png'

import Eth from '../../assets/media/tech-stack/small/blockchain/Eth.png'
import Solidity from '../../assets/media/tech-stack/small/blockchain/Solidity.png'
import Vyper from '../../assets/media/tech-stack/small/blockchain/Vyper.png'
import Btc from '../../assets/media/tech-stack/small/blockchain/Btc.png'
import HL from '../../assets/media/tech-stack/small/blockchain/HL.png'
import MM from '../../assets/media/tech-stack/small/blockchain/MetaMask.png'

import Spark from '../../assets/media/tech-stack/small/performance/Spark.png'
import PT from '../../assets/media/tech-stack/small/performance/PyTorch.png'
import TF from '../../assets/media/tech-stack/small/performance/Tensorflow.png'
import Unity from '../../assets/media/tech-stack/small/performance/unity.png'
import Telegram from '../../assets/media/tech-stack/small/performance/Telegram.png'

const Services = () => {
  return (
        <div id='services' className='services'>
        <div className="services-wrapper">
            <div className="services-heading">
                <span className='m-heading'>Services</span>
            </div>
            <div className="card card1">
                <div className="serv-card">
                    <div className="card-icon">
                        <img src={Web} alt="icon" />
                    </div>
                    <h3 className="card-head">
                        Web Development
                    </h3>
                    <div className="card-text">
                        <ul className="card-text-list">
                            <li className='vis-text-b'>Web App Development</li>
                            <li className='vis-text-s'>Web App Dev</li>
                            <li>Landing page</li>
                            <li>Onlineshops</li>
                            <li className='vis-text-b'>Front-End Development</li>
                            <li className='vis-text-s'>Front-End Dev</li>
                            <li className='vis-text-b'>Back-End Development</li>
                            <li className='vis-text-s'>Back-End Dev</li>
                        </ul>
                    </div>
                    <div className="card-icons">
                        <ul className="card-icons-list">
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={ReactIcon} alt="icon" />
                            </li>
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={Wordpress} alt="icon" />
                            </li>
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={Shopify} alt="icon" />
                            </li>
                        </ul>
                        <ul className="card-icons-list card-icons-list-2">
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={Angular} alt="icon" />
                            </li>
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={Lavarel} alt="icon" />
                            </li>
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={Vue} alt="icon" />
                            </li>
                        </ul>
                    </div>
                    <Link className='card-btn' to='/contact'>
                        <span>Projekt starten</span>
                    </Link>
                </div>
            </div>
            <div className="card card2">
                <div className="serv-card">
                    <div className="card-icon">
                        <img src={Mobile} alt="icon" />
                    </div>
                    <h3 className="card-head">
                        Mobile Apps
                    </h3>
                    <div className="card-text">
                        <ul className="card-text-list">
                            <li className='vis-text-bxs'>IOS Application</li>
                            <li className='vis-text-xs'>IOS Apps</li>
                            <li className='vis-text-bxs'>Android Application </li>
                            <li className='vis-text-xs'>Android Apps </li>
                            <li className='vis-text-bxs'>Cross-Platform App</li>
                            <li className='vis-text-xs'>Cross-Platform</li>
                            <li>Native App</li>
                            <li className='vis-text-bxs'>Progressive Web App</li>
                            <li className='vis-text-xs'>Progressive Web</li>
                        </ul>
                    </div>
                    <div className="card-icons">
                        <ul className="card-icons-list">
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={IOSApple} alt="icon" />
                            </li>
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={Android} alt="icon" />
                            </li>
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={SwiftIcon} alt="icon" />
                            </li>
                        </ul>
                        <ul className="card-icons-list card-icons-list-2">
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={Ionic} alt="icon" />
                            </li>
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={ReactJSIcon} alt="icon" />
                            </li>
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={Kotlin} alt="icon" />
                            </li>
                        </ul>
                    </div>
                    <Link className='card-btn' to='/contact'>
                        <span>Projekt starten</span>
                    </Link>
                </div>
            </div>
            <div className="card card3">
                <div className="serv-card">
                    <div className="card-icon">
                        <img src={Design} alt="icon" />
                    </div>
                    <h3 className="card-head">
                        Design & Branding
                    </h3>
                    <div className="card-text">
                        <ul className="card-text-list">
                            <li>UI/UX Design</li>
                            <li className='vis-text-b'>Social Media Ad Creative</li>
                            <li className='vis-text-s'>Ad Creative</li>
                            <li>Corporate Identity</li>
                            <li>Logo Design</li>
                            <li>2D/3D Animation</li>
                        </ul>
                    </div>
                    <div className="card-icons">
                        <ul className="card-icons-list">
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={XD} alt="icon" />
                            </li>
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={PS} alt="icon" />
                            </li>
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={AI} alt="icon" />
                            </li>
                        </ul>
                        <ul className="card-icons-list card-icons-list-2">
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={Sketch} alt="icon" />
                            </li>
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={Figma} alt="icon" />
                            </li>
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={Anima} alt="icon" />
                            </li>
                        </ul>
                    </div>
                    <Link className='card-btn' to='/contact'>
                        <span>Projekt starten</span>
                    </Link>
                </div>
            </div>
            <div className="card card4">
                <div className="serv-card">
                    <div className="card-icon">
                        <img src={Marketing} alt="icon" />
                    </div>
                    <h3 className="card-head">
                        Digital Marketing
                    </h3>
                    <div className="card-text">
                        <ul className="card-text-list">
                            <li className='vis-text-b'>Social Media Marketing</li>
                            <li className='vis-text-s'>Social Media</li>
                            <li>SEO</li>
                            <li>Google Ads</li>
                            <li className='vis-text-b'>E-commerce Marketing</li>
                            <li className='vis-text-s'>eCom Marketing</li>
                            <li className='vis-text-b'>Email & SMS Marketing</li>
                            <li className='vis-text-s'>Email & SMS</li>
                        </ul>
                    </div>
                    <div className="card-icons">
                        <ul className="card-icons-list">
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={GAd} alt="icon" />
                            </li>
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={Fb} alt="icon" />
                            </li>
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={Inst} alt="icon" />
                            </li>
                        </ul>
                        <ul className="card-icons-list card-icons-list-2">
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={Hubspot} alt="icon" />
                            </li>
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={Mailchimp} alt="icon" />
                            </li>
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={Tiktok} alt="icon" />
                            </li>
                        </ul>
                    </div>
                    <Link className='card-btn' to='/contact'>
                        <span>Projekt starten</span>
                    </Link>
                </div>
            </div>
            <div className="card card5">
                <div className="serv-card">
                    <div className="card-icon">
                        <img src={Blockchain} alt="icon" />
                    </div>
                    <h3 className="card-head">
                        Blockchain
                    </h3>
                    <div className="card-text">
                        <ul className="card-text-list">
                            <li>Smart contracts</li>
                            <li className='vis-text-b'>Decentralised apps (dApps)</li>
                            <li className='vis-text-s'>DApps</li>
                            <li className='vis-text-b'>Non-fungible tokens (NFTs)</li>
                            <li className='vis-text-s'>NFTs</li>
                            <li>Web3 Marketplaces</li>
                            <li>Blockchain security</li>
                        </ul>
                    </div>
                    <div className="card-icons">
                        <ul className="card-icons-list">
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={Eth} alt="icon" />
                            </li>
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={Solidity} alt="icon" />
                            </li>
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={Vyper} alt="icon" />
                            </li>
                        </ul>
                        <ul className="card-icons-list card-icons-list-2">
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={Btc} alt="icon" />
                            </li>
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={HL} alt="icon" />
                            </li>
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={MM} alt="icon" />
                            </li>
                        </ul>
                    </div>
                    <Link className='card-btn' to='/contact'>
                        <span>Projekt starten</span>
                    </Link>
                </div>
            </div>
            <div className="card card6">
                <div className="serv-card">
                    <div className="card-icon">
                        <img src={Tech} alt="icon" />
                    </div>
                    <h3 className="card-head">
                        Performance Tech
                    </h3>
                    <div className="card-text">
                        <ul className="card-text-list">
                            <li>Instagram-Ar-Filter</li>
                            <li>Chatbots</li>
                            <li className='vis-text-b'>Social Media Page Design</li>
                            <li className='vis-text-s'>SM Page Design</li>
                            <li className='vis-text-b'>Machine Learning & KI/AI</li>
                            <li className='vis-text-s'>KI/AI</li>
                            <li>Virtual Reality</li>
                        </ul>
                    </div>
                    <div className="card-icons">
                        <ul className="card-icons-list">
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={Spark} alt="icon" />
                            </li>
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={Inst} alt="icon" />
                            </li>
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={Telegram} alt="icon" />
                            </li>
                        </ul>
                        <ul className="card-icons-list card-icons-list-2">
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={PT} alt="icon" />
                            </li>
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={TF} alt="icon" />
                            </li>
                            <li className="card-icons-list-item">
                                <img className="item-icon" src={Unity} alt="icon" />
                            </li>
                        </ul>
                    </div>
                    <Link className='card-btn' to='/contact'>
                        <span>Projekt starten</span>
                    </Link>
                </div>    
            </div>
        </div>
        </div>
  )
}

export default Services