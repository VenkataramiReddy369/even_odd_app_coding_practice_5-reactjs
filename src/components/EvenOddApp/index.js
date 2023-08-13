import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {value: 0}

  onIncrement = () => {
    this.setState(prevState => ({value: prevState.value + 1}))
  }

  render() {
    const {value} = this.state

    let result
    if (value % 2 === 0) {
      result = <p className="count">Count is Even</p>
    } else {
      result = <p className="count">Count is Odd</p>
    }

    return (
      <div className="container">
        <div className="card-container">
          <h1>Count {value}</h1>
          {result}
          <button type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="paragraph">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
