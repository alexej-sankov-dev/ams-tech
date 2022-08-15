import React from 'react'
import { useEffect, useState } from 'react'
import { debounce } from '../../utilities/helpers';
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import Buttons from './Buttons/Buttons';

import './Header.scss'

const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const [subMenuHidden, setSubMenuHidden] = useState(true)
    const [burgerOpen, setBurgerOpen] = useState(false)

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;
        if (!burgerOpen) {
            setPrevScrollPos(currentScrollPos);
            setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 30) || currentScrollPos < 50);
            setSubMenuHidden(true);
        }
    }, 200);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
    
    }, [prevScrollPos, visible, handleScroll]);

    return (
        <header className='mainHeader'>
            <div class="head themeDefault" is='basis-header' style={{top: visible ? '0' : '-96px' }}>
                    <div className='wrapper'>
                        <Logo />
                        <Menu subMenuHidden={subMenuHidden} setSubMenuHidden={setSubMenuHidden} burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
                        <Buttons />
                    </div>
            </div>
        </header>
    )
}

export default Header