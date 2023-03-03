// Write your code here.
import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {searchInput: '', len: 0}

  onChange = event => {
    this.setState({
      searchInput: event.target.value,
      len: event.target.value.length,
    })
    console.log(event.target.value)
  }

  render() {
    const {searchInput, len} = this.state
    return (
      <div className="contain">
        <div className="box">
          <h1>Calculate The Letters You Enter</h1>
          <label htmlFor="g">Enter the phrase</label>
          <br />
          <input
            type="text"
            className="input"
            onChange={this.onChange}
            value={searchInput}
            id="g"
          />
          <p className="result">No.of letters: {len}</p>
        </div>
        <div className="image">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
