import React from 'react'
import Sellyourcar from './Sellyourcar'
import SellCarFormVerificationProcess from './SellCarFormVerificationProcess'
import { SellACarContextProvider } from '../../Context/SellACarContext'

function ParentSellCar() {
  return (
    <SellACarContextProvider>
        <Sellyourcar/>
        <SellCarFormVerificationProcess/>
    </SellACarContextProvider>
  )
}

export default ParentSellCar