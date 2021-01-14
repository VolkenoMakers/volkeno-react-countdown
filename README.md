# volkeno-react-countdown

> React Countdown Package work with Bootstap 4

[![NPM](https://img.shields.io/npm/v/volkeno-react-countdown.svg)](https://www.npmjs.com/package/volkeno-react-countdown) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save volkeno-react-countdown
```

## Usage

```jsx
import React, { Component } from 'react'

import { CountDown } from 'volkeno-react-countdown'
import 'volkeno-react-countdown/src/index.css'

class CountDown extends Component {
  render() {
    return(
      <MyComponent
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
    )
  }
}
```

## License

MIT © [sadiosan](https://github.com/sadiosan)
