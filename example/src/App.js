import React from 'react'

import { CountDown } from 'volkeno-react-countdown'
import 'volkeno-react-countdown/src/index.css'

const App = () => {
  return <CountDown 
    deadline={`31 Jan 2021 09:00:00 GMT+1`} 
    dayTextLabel={ 'days' }
    hourTextLabel={ 'heure' }
    minuteTextLabel={ 'minute' }
    secondTextLabel={ 'seconde' }
    boxWidth="100"
    boxHeight="100"
    textLineHeight="82"
    textFontSize="30"
    textFontWeight="700"
    className="my-best-countdown-class"
  />
}

export default App
