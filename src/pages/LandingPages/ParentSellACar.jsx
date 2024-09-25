import React, { useState } from 'react'
import Sellyourcar from './Sellyourcar'
import SellCarFormVerificationProcess from './SellCarFormVerificationProcess'
import Mechanic from './Mechanic'

function ParentSellACar() {
    const [selectSell, setSelectSell] = useState('')
  return (
    <div>
        <Sellyourcar setSelectSell={setSelectSell} selectSell={selectSell}/>
        <SellCarFormVerificationProcess selectSell={selectSell}/>
        <Mechanic selectSell={selectSell}/>
    </div>
  )
}

export default ParentSellACar