import React from 'react'
import './index.css'
import CountdownComponent from './components/countdownComponent/CountdownComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
// 

export const CountDown = ( props ) => {
  return(
    <CountdownComponent 
      deadline={ props.deadline } 
      dayTextLabel={ props.dayTextLabel }
      hourTextLabel={ props.hourTextLabel }
      minuteTextLabel={ props.minuteTextLabel }
      secondTextLabel={ props.secondTextLabel }
      boxWidth={ props.boxWidth }
      boxHeight={ props.boxHeight }
      textLineHeight={ props.textLineHeight }
      textFontSize={ props.textFontSize }
      textFontWeight={ props.textFontWeight }
      className={ props.className }
    />
  )
}

