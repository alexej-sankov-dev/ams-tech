import React from 'react'
import { Link } from 'react-router-dom'

import Burger from '../Burger/Burger'
import Submenu from '../Submenu/Submenu'
import { useNavigate } from 'react-router-dom';


import './Menu.scss'

const Menu = (props) => {
    let navigate = useNavigate();
    const onClickSubMenu = (e) => {
        if (props.subMenuHidden) {
            props.setSubMenuHidden(false)
        } else {
            props.setSubMenuHidden(true)
        }
    }

    const handleClickServ = () => {
        navigate('/')
        document.getElementById('services').scrollIntoView()
        props.setBurgerOpen(!props.burgerOpen)
    }

    const handleClickProj = () => {
        navigate('/')
        document.getElementById('projects').scrollIntoView()
        props.setBurgerOpen(!props.burgerOpen)
    }

    const handleClickAbout = () => {
        navigate('/')
        document.getElementById('about').scrollIntoView()
        props.setBurgerOpen(!props.burgerOpen)
    }

    const handleClickContact = () => {
        props.setBurgerOpen(!props.burgerOpen)
    }

    return (
        <>
            <Burger burgerOpen={props.burgerOpen} setBurgerOpen={props.setBurgerOpen} />
            <div className={`menu ${props.burgerOpen ? '' : 'inert'}`}>
                <div className='menu-inner'>
                    <nav>
                        <ul className='menu-list' role='menubar'>
                            <li className={`menu-item ${props.burgerOpen ? 'show' : ''}`}>
                                {/*<Link className='menu-item-link' role='menuitem' to='/' onClick={onClickSubMenu} >*/}
                                <a className='menu-item-link' role='menuitem' href='/#services' onClick={handleClickServ} >
                                    <span className='menu-item-link-text'>Services</span>
                                </a>
                                {/*<Submenu subMenuHidden={props.subMenuHidden} />*/}
                            </li>
                            <li className={`menu-item ${props.burgerOpen ? 'show' : ''}`}>
                                <a className='menu-item-link' role='menuitem' href='/#projects' onClick={handleClickProj}>
                                    <span className='menu-item-link-text'>Projekte</span>
                                </a>
                            </li>
                            <li className={`menu-item ${props.burgerOpen ? 'show' : ''}`}>
                                <a className='menu-item-link' role='menuitem' href='/#about' onClick={handleClickAbout}>
                                    <span className='menu-item-link-text'>Über uns</span>
                                </a>
                            </li>
                            <li className={`menu-item ${props.burgerOpen ? 'show' : ''}`}>
                                <Link className='menu-item-link' role='menuitem' to='/contact' onClick={handleClickContact}>
                                    <span className='menu-item-link-text'>Kontakt</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>  
                </div>
            </div>
        </>
  )
}

export default Menu