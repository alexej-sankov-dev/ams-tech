import React from 'react'
import styled from 'styled-components'

import './Burger.scss'

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

const Burger = (props) => {
  return (
    <StyledBurger burgerOpen={props.burgerOpen} className='burger'>
        <button onClick={() => props.setBurgerOpen(!props.burgerOpen)} aria-expanded="false" aria-controls="id-1402377977" className="burger-trigger" data-text-close="Navigation schließen" data-text-open="Navigation öffnen" title="Navigation öffnen">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </StyledBurger>
  )
}

export default Burger