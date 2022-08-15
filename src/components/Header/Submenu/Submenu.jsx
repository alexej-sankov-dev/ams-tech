import React from 'react'

import './Submenu.scss'

const Submenu = (props) => {
  return (
    <div className='submenu' aria-hidden={props.subMenuHidden}>
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
  )
}

export default Submenu