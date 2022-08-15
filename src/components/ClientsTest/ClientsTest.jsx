import React from 'react'
import Clients from '../Clients/Clients'
import Testamonials from '../Testamonials/Testamonials'
import './ClientsTest.scss'


const ClientsTest = () => {
  return (
    <div className='clients-test'>
      <div className='clients-wrapper'>
        <div className='clients-inner'>
          <Clients />
        </div>
      </div>
      <div className='clients-test-wrapper'>
          <div className='test-wrapper'>
              <Testamonials />
          </div>
      </div>
    </div>
  )
}

export default ClientsTest