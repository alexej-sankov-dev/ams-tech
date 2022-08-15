import './Header.scss';
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { debounce } from '../../utilities/helpers';



const css = `
    .fv-company-logo .text{-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%);opacity:0;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;-o-transition-property:transform,opacity;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;-webkit-transition-duration:.25s;-o-transition-duration:.25s;transition-duration:.25s;-webkit-transition-timing-function:cubic-bezier(0,0,.23,1);-o-transition-timing-function:cubic-bezier(0,0,.23,1);transition-timing-function:cubic-bezier(0,0,.23,1)}@media (min-width:1280px){.fv-company-logo:hover .text{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1}} 
`

const StyledBurger = styled.div`
    span {
    
        &:nth-child(1) {
            -webkit-transform: ${({burgerOpen}) => burgerOpen ? 'rotate(45deg)' : 'translateY(-9px)'};
            transform: ${({burgerOpen}) => burgerOpen ? 'rotate(45deg)' : 'translateY(-9px)'};
        }
        &:nth-child(2) {
            -webkit-transform: ${({burgerOpen}) => burgerOpen ? 'translate(100%)' : 'translate(0)'};
            transform: ${({burgerOpen}) => burgerOpen ? 'translate(100%)' : 'translate(0)'};
            width: ${({burgerOpen}) => burgerOpen ? '0' : '55%'};

        }
        &:nth-child(3) {
            -webkit-transform: ${({burgerOpen}) => burgerOpen ? 'rotate(-45deg)' : 'translateY(9px)'};
            transform: ${({burgerOpen}) => burgerOpen ? 'rotate(-45deg)' : 'translateY(9px)'};
            width: '68%';

        }
    }
`


const Header = () => {
    const [subMenuHidden, setSubMenuHidden] = useState(true)

    const [burgerOpen, setBurgerOpen] = useState(false)

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;
        if (!burgerOpen) {
            setPrevScrollPos(currentScrollPos);
            setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 30) || currentScrollPos < 50);
            setSubMenuHidden(true);
        }
    }, 100);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
    
    }, [prevScrollPos, visible, handleScroll]);


    const onClickSubMenu = (e) => {
        if (subMenuHidden) {
            setSubMenuHidden(false)
        } else {
            setSubMenuHidden(true)
        }
    }



    return (
        <header className='mainHeader'>
            <div class="head themeDefault" is='basis-header' style={{top: visible ? '0' : '-96px' }}>
                <div className='wrapper'>
                    <div className='logo'>
                        <a className='logo-link' href='/' title='Zur Startseite'>
                            <span className='logo-icon' aria-hidden='true'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 796.2 131.9" style={{ enableBackground:"new 0 0 796.2 131.9" }} xmlSpace="preserve" className="fv-company-logo">
                                <style>{css}</style>
                                <g className="text">
                                    <path 
                                        fill="currentColor" 
                                        d="M242.6 26.5v13.8h19.2v6.9h-19.2v21.7h-7.9V19.5h31.1v6.9h-23.2v.1zM291.8 50.1h-10.9V69H273V19.6h20c2.2 0 4.3.3 6.2 1 1.9.7 3.5 1.6 4.9 2.9s2.5 2.9 3.2 4.8c.8 1.9 1.2 4.1 1.2 6.6 0 3.6-.8 6.5-2.3 8.9-1.5 2.3-3.6 4-6.2 5.1l11.1 20.2h-8.9l-10.4-19zm.2-7c1.2 0 2.3-.2 3.3-.5s1.9-.8 2.7-1.6c.8-.7 1.4-1.6 1.8-2.6s.7-2.2.7-3.6-.2-2.6-.7-3.7c-.4-1-1-1.9-1.8-2.6s-1.7-1.2-2.7-1.6c-1-.3-2.1-.5-3.3-.5h-11.2V43l11.2.1zM319.1 69V19.6h7.9V69h-7.9zM346.5 26.5v13.6h20.3v6.8h-20.3V62h23.2v7h-31.1V19.6h31.1v6.9h-23.2zM410.8 69l-24.4-34.9V69h-7.9V19.6h6.6l24.4 35v-35h7.9V69h-6.6zM448.9 19.5c3.4 0 6.6.6 9.6 1.7 2.9 1.1 5.5 2.7 7.7 4.9 2.2 2.1 3.8 4.7 5.1 7.8 1.2 3.1 1.8 6.5 1.8 10.4s-.6 7.4-1.9 10.5c-1.2 3.1-2.9 5.6-5.1 7.8-2.2 2.1-4.7 3.7-7.7 4.8s-6.2 1.7-9.6 1.7h-19.6V19.7h19.7v-.2zm-12 42.7h11.9c2.4 0 4.6-.4 6.6-1.2s3.7-1.9 5.2-3.4 2.6-3.4 3.4-5.6 1.2-4.8 1.2-7.8c0-2.9-.4-5.5-1.2-7.8-.8-2.2-1.9-4.1-3.3-5.6s-3.1-2.6-5.1-3.4-4.2-1.2-6.6-1.2h-12v36h-.1zM495.9 69l-20.7-49.5h8.6l15.5 37.1 15.5-37.1h8.7l-20.8 49.4-6.8.1zM537.9 26.5v13.6h20.3v6.8h-20.3V62h23.2v7H530V19.6h31.1v6.9h-23.2zM602.2 69l-24.4-34.9V69h-7.9V19.6h6.6l24.4 35v-35h7.9V69h-6.6zM641.2 26.5V69h-7.9V26.5h-17.6v-6.9h43v6.9h-17.5zM706.1 49.7c0 3.2-.5 6-1.4 8.5s-2.3 4.6-4.1 6.2c-1.8 1.7-3.9 3-6.4 3.8-2.5.9-5.3 1.3-8.4 1.3-3.1 0-5.9-.4-8.5-1.3-2.5-.9-4.6-2.2-6.4-3.8-1.7-1.7-3.1-3.8-4-6.2-.9-2.5-1.4-5.3-1.4-8.5V19.5h7.9v30.1c0 4.3 1.1 7.6 3.2 9.7 2.1 2.2 5.2 3.3 9.2 3.3 3.9 0 7-1.1 9.2-3.3s3.3-5.4 3.3-9.7V19.5h7.9l-.1 30.2zM736.2 50.1h-10.9V69h-7.9V19.6h20c2.2 0 4.3.3 6.2 1s3.5 1.6 4.9 2.9 2.5 2.9 3.2 4.8c.8 1.9 1.2 4.1 1.2 6.6 0 3.6-.8 6.5-2.3 8.9-1.5 2.3-3.6 4-6.2 5.1l11.1 20.2h-8.9l-10.4-19zm.2-7c1.2 0 2.3-.2 3.3-.5s1.9-.8 2.7-1.6c.8-.7 1.4-1.6 1.8-2.6.4-1 .7-2.2.7-3.6s-.2-2.6-.7-3.7c-.4-1-1-1.9-1.8-2.6s-1.7-1.2-2.7-1.6c-1-.3-2.1-.5-3.3-.5h-11.2V43l11.2.1zM771.3 26.5v13.6h20.3v6.8h-20.3V62h23.2v7h-31.1V19.6h31.1v6.9h-23.2z">
                                    </path>
                                    <path 
                                        fill="currentColor"
                                        d="M265.6 112.9c.9-2.3 1.4-4.9 1.4-7.8s-.5-5.5-1.4-7.8-2.2-4.2-3.7-5.8c-1.6-1.6-3.5-2.8-5.6-3.6-2.2-.8-4.5-1.2-7.1-1.2h-14.4v36.9h14.3c2.5 0 4.9-.4 7.1-1.2 2.2-.8 4.1-2 5.7-3.6 1.5-1.6 2.8-3.6 3.7-5.9zm-6.8 3.2c-1.2 1.2-2.6 2.2-4.3 2.8-1.6.6-3.4.9-5.4.9h-10V90.3h10.1c2 0 3.8.3 5.4.9s3 1.6 4.2 2.8c1.2 1.2 2.1 2.8 2.8 4.6.7 1.8 1 4 1 6.4s-.3 4.5-1 6.4c-.7 1.9-1.6 3.5-2.8 4.7zM283.5 86.7h4.4v36.9h-4.4zM322.4 108.7h12.2v.1c-.2 1.9-.6 3.6-1.3 5-.7 1.4-1.6 2.6-2.7 3.6-1.1.9-2.3 1.6-3.8 2.1-1.4.4-3 .7-4.7.7-2 0-3.8-.3-5.4-1-1.6-.6-3.1-1.6-4.3-2.9-1.2-1.3-2.1-2.8-2.8-4.7-.7-1.9-1-4.1-1-6.5s.3-4.6 1-6.5 1.6-3.5 2.8-4.7c1.2-1.3 2.6-2.2 4.3-2.9 1.6-.6 3.5-1 5.5-1 1.6 0 3.1.2 4.5.7 1.4.4 2.6 1.1 3.7 2 1.1.8 2 1.9 2.7 3.1s1.1 2.6 1.4 4.1l4.5-.7c-.4-2-1-3.9-2-5.4-1-1.6-2.2-3-3.7-4.1s-3.2-1.9-5-2.5c-1.9-.6-3.9-.9-6-.9-2.6 0-5 .4-7.2 1.3-2.2.8-4.1 2.1-5.7 3.7s-2.9 3.6-3.8 5.9-1.4 5-1.4 8 .5 5.7 1.4 8 2.2 4.3 3.8 5.9c1.6 1.6 3.5 2.8 5.7 3.7 2.2.9 4.6 1.3 7.2 1.3s5-.4 7-1.2c2.1-.8 3.9-2 5.3-3.5 1.5-1.5 2.6-3.4 3.4-5.6s1.2-4.7 1.2-7.4V105h-16.9l.1 3.7zM355.8 86.7h4.4v36.9h-4.4zM374.6 90.5h13.8v33.1h4.4V90.5h13.8v-3.8h-32zM446.9 123.6l-15.4-36.9h-3.7l-15.4 36.9h4.7l3.9-9.4h17.3v.1l3.8 9.4 4.8-.1zm-24.3-13.2.1-.1 7-16.9 7 17.1-14.1-.1zM465.9 86.7h-4.4v36.9h23v-3.9h-18.6zM516.8 86.7h-3.7l-15.4 36.9h4.7l3.9-9.4h17.3v.1l3.8 9.4h4.7l-15.3-37zm-8.9 23.7.1-.1 7-16.9 7 17.1-14.1-.1z">
                                    </path>
                                    <path 
                                        fill="currentColor"
                                        d="m508 110.2-.1.1H522l-7-17.1-7 17zm.2 0 6.8-16.4 6.7 16.4h-13.5z">
                                    </path>
                                    <path 
                                        fill="currentColor"
                                        d="M561.4 108.7h12.2v.1c-.2 1.9-.6 3.6-1.3 5s-1.6 2.6-2.7 3.6c-1.1.9-2.3 1.6-3.8 2.1-1.4.4-3 .7-4.7.7-2 0-3.8-.3-5.4-1-1.6-.6-3.1-1.6-4.3-2.9s-2.1-2.8-2.8-4.7c-.7-1.9-1-4.1-1-6.5s.3-4.6 1-6.5 1.6-3.5 2.8-4.7c1.2-1.3 2.6-2.2 4.3-2.9 1.6-.6 3.5-1 5.5-1 1.6 0 3.1.2 4.5.7 1.4.4 2.6 1.1 3.7 2 1.1.8 2 1.9 2.7 3.1s1.1 2.6 1.4 4.1l4.5-.7c-.4-2-1-3.9-2-5.4-1-1.6-2.2-3-3.7-4.1s-3.2-2-5-2.5c-1.9-.6-3.9-.9-6-.9-2.6 0-5 .4-7.2 1.3-2.2.8-4.1 2.1-5.7 3.7-1.6 1.6-2.9 3.6-3.8 5.9-.9 2.3-1.4 5-1.4 8s.5 5.7 1.4 8 2.2 4.3 3.8 5.9 3.5 2.8 5.7 3.7c2.2.9 4.6 1.3 7.2 1.3 2.6 0 5-.4 7-1.2 2.1-.8 3.9-2 5.3-3.5s2.6-3.4 3.4-5.6 1.2-4.7 1.2-7.4V105h-16.9l.1 3.7zM594.8 123.6h22.8v-3.9h-18.5v-13.3h16.3v-3.8h-16.3V90.5h18.5v-3.8h-22.8zM656.4 115.6l-.2-.3-19.9-28.6h-3.7v36.9h4.4V94.7l.2.2 19.8 28.7h3.7V86.7h-4.3zM675.2 90.5H689v33.1h4.4V90.5h13.8v-3.8h-32zM746.6 109.7c0 3.5-.9 6.1-2.8 7.9-1.8 1.7-4.4 2.6-7.6 2.6-3.2 0-5.8-.9-7.6-2.6s-2.8-4.4-2.8-7.9v-23h-4.3v23.1c0 2.3.3 4.4 1 6.2.7 1.8 1.7 3.3 2.9 4.5 1.3 1.2 2.8 2.1 4.6 2.8 1.8.6 3.8.9 6.1.9 2.2 0 4.3-.3 6.1-.9s3.4-1.6 4.6-2.8c1.3-1.2 2.3-2.7 3-4.5s1-3.8 1-6.2V86.7h-4.3l.1 23zM796.2 123.6l-8.7-15.6h.1c2-.7 3.7-1.9 4.9-3.6s1.8-3.9 1.8-6.6c0-1.8-.3-3.5-.9-4.8-.6-1.4-1.4-2.5-2.4-3.4s-2.2-1.6-3.6-2.1-2.9-.7-4.4-.7h-14.2v36.9h4.4v-14.9h9.8l8.3 14.8h4.9zm-13.7-18.7h-9.4V90.5h9.4c1 0 2 .1 2.8.4s1.7.7 2.3 1.3c.7.6 1.2 1.3 1.6 2.2.4.9.6 2 .6 3.2s-.2 2.3-.6 3.2c-.4.9-.9 1.7-1.6 2.2-.7.6-1.5 1-2.3 1.3-.9.4-1.8.6-2.8.6z">
                                    </path>
                                    <path
                                        fill="currentColor" 
                                        d="M789.2 100.9c.4-.9.6-2 .6-3.2s-.2-2.3-.6-3.2c-.4-.9-.9-1.7-1.6-2.2-.7-.6-1.5-1-2.3-1.3s-1.8-.4-2.8-.4h-9.4V105h9.4c1 0 2-.1 2.8-.4.9-.3 1.7-.7 2.3-1.3.7-.8 1.2-1.5 1.6-2.4zm-15.9 3.8v-14h9.2c1 0 1.9.1 2.8.4.9.3 1.6.7 2.3 1.3.6.6 1.2 1.3 1.6 2.2.4.9.6 1.9.6 3.1s-.2 2.3-.6 3.1c-.4.9-.9 1.6-1.6 2.2-.6.6-1.4 1-2.3 1.3-.9.3-1.8.4-2.8.4h-9.2z">
                                    </path>
                                    </g>
                                    <path fill="currentColor" className="bildmarke" d="m199.7 0-33.1 42.8-33-42.8h-44l55 71.4-22.7 29.5L44.1 0H0l101.7 131.9L204.1 0z"></path>
                            </svg>
                            </span>
                        </a>
                    </div>
                    <StyledBurger burgerOpen={burgerOpen} className='burger'>
                        <button onClick={() => setBurgerOpen(!burgerOpen)} aria-expanded="false" aria-controls="id-1402377977" className="burger-trigger" data-text-close="Navigation schließen" data-text-open="Navigation öffnen" title="Navigation öffnen">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </StyledBurger>
                    <div className={`menu ${burgerOpen ? '' : 'inert'}`}>
                        <div className='menu-inner'>
                            <nav>
                                <ul className='menu-list' role='menubar'>
                                    <li className={`menu-item ${burgerOpen ? 'show' : ''}`}>
                                        <Link className='menu-item-link' role='menuitem' to='/'>
                                            <span className='menu-item-link-text'>Agentur</span>
                                        </Link>
                                    </li>
                                    <li className={`menu-item ${burgerOpen ? 'show' : ''}`}>
                                        <Link className='menu-item-link' role='menuitem' to='/services' onClick={onClickSubMenu}>
                                            <span className='menu-item-link-text'>Services</span>
                                        </Link>
                                        <div className='submenu' aria-hidden={subMenuHidden}>
                                            <div className='mega'>
                                                <div className='mega-text'>
                                                    <p className="mittlerer-text">
                                                        <span className="kicker">Was wir gut können</span>
                                                        <span className="kicker-divider">: </span>
                                                        Digitale Lösungen, die Euch weiterbringen
                                                    </p>
                                                </div>
                                                <div className='mega-cols'>
                                                    <div className="mega-col col-first">
                                                        <div className="mega-label kicker">Technologien</div>
                                                        <ul className="mega-list">
                                                            <li className="mega-item ">
                                                                <a className="mega-link" href="https://www.friendventure.de/wordpress-agentur/">
                                                                    <span className="mega-link-text">WordPress</span>
                                                                </a>
                                                            </li>
                                                            <li className="mega-item ">
                                                                <a className="mega-link" href="https://www.friendventure.de/typo3-agentur/">
                                                                    <span className="mega-link-text">TYPO3</span>
                                                                </a>
                                                            </li>
                                                            <li className="mega-item ">
                                                                <a className="mega-link" href="https://www.friendventure.de/craft-cms-agentur/">
                                                                    <span className="mega-link-text">CraftCMS</span>
                                                                </a>
                                                            </li>
                                                            <li className="mega-item ">
                                                                <a className="mega-link" href="https://www.friendventure.de/shopware-agentur/">
                                                                    <span className="mega-link-text">Shopware</span>
                                                                </a>
                                                            </li>
                                                            <li className="mega-item ">
                                                                <a className="mega-link" href="https://www.friendventure.de/laravel-agentur/">
                                                                    <span className="mega-link-text">Laravel</span>
                                                                </a>
                                                            </li>
                                                            <li className="mega-item ">
                                                                <a className="mega-link" href="https://www.friendventure.de/php-agentur/">
                                                                    <span className="mega-link-text">PHP</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="mega-col">
                                                        <div className="mega-label kicker">Leistungen</div>
                                                        <ul className="mega-list">
                                                            <li className="mega-item ">
                                                                <a className="mega-link" href="https://www.friendventure.de/webdesign-agentur/">
                                                                    <span className="mega-link-text">Webdesign</span>
                                                                </a>
                                                            </li>
                                                            <li className="mega-item ">
                                                                <a className="mega-link" href="https://www.friendventure.de/ux-ui-design-agentur/">
                                                                    <span className="mega-link-text">UX/UI-Design</span>
                                                                </a>
                                                            </li>
                                                            <li className="mega-item ">
                                                                <a className="mega-link" href="https://www.friendventure.de/webentwicklung-agentur/">
                                                                    <span className="mega-link-text">Webentwicklung</span>
                                                                </a>
                                                            </li>
                                                            <li className="mega-item ">
                                                                <a className="mega-link" href="https://www.friendventure.de/frontend-entwicklung-agentur/">
                                                                    <span className="mega-link-text">Frontend-Entwicklung</span>
                                                                </a>
                                                            </li>
                                                            <li className="mega-item ">
                                                                <a className="mega-link" href="https://www.friendventure.de/google-ads-agentur/">
                                                                    <span className="mega-link-text">Google Ads</span>
                                                                </a>
                                                            </li>
                                                            <li className="mega-item ">
                                                                <a className="mega-link" href="https://www.friendventure.de/social-ads-agentur/">
                                                                    <span className="mega-link-text">Social Ads</span>
                                                                </a>
                                                            </li>
                                                            <li className="mega-item ">
                                                                <a className="mega-link" href="https://www.friendventure.de/seo-agentur/">
                                                                    <span className="mega-link-text">SEO</span>
                                                                </a>
                                                            </li>
                                                            <li className="mega-item ">
                                                                <a className="mega-link" href="https://www.friendventure.de/infografik-agentur/">
                                                                    <span className="mega-link-text">Infografiken</span>
                                                                </a>
                                                            </li>
                                                            <li className="mega-item ">
                                                                <a className="mega-link" href="https://www.friendventure.de/erklaervideo-agentur/">
                                                                    <span className="mega-link-text">Erklärvideos</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={`menu-item ${burgerOpen ? 'show' : ''}`}>
                                        <Link className='menu-item-link' role='menuitem' to='/'>
                                            <span className='menu-item-link-text'>Projekte</span>
                                        </Link>
                                    </li>
                                    <li className={`menu-item ${burgerOpen ? 'show' : ''}`}>
                                        <Link className='menu-item-link' role='menuitem' to='/'>
                                            <span className='menu-item-link-text'>About Us</span>
                                        </Link>
                                    </li>
                                    <li className={`menu-item ${burgerOpen ? 'show' : ''}`}>
                                        <Link className='menu-item-link' role='menuitem' to='/'>
                                            <span className='menu-item-link-text'>Kontakt</span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>  
                        </div>
                    </div>
                    <div className='buttons buttons--desktop'>
                        <div className='buttons-cta'>
                            <div className='cta'>
                                <div className='cta-inner'>
                                    <a href='/' className='button button--arrow cta-link data-basis-sidebar-trigger' title='Projektanfrage' aria-expanded='false'>
                                        Projektanfrage
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header