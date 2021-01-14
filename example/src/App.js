import React from 'react'

import { CountDown } from 'volkeno-react-countdown'
import 'volkeno-react-countdown/src/index.css'

const App = () => {
  return <CountDown 
    deadline={`31 Jan 2021 09:00:00 GMT+1`} 
    dayTextLabel={ 'day(s)' }
    hourTextLabel={ 'hour(s)' }
    minuteTextLabel={ 'minute(s)' }
    secondTextLabel={ 'second(s)' }
    boxWidth="100"
    boxHeight="100"
    textLineHeight="82"
    textFontSize="30"
    textFontWeight="700"
    className="my-best-countdown-class"
    numberColor="#FF9800"
    boxBorderColor="#4FADA1"
    textLabelColor="#4FADA1"
  />
}

export default App
