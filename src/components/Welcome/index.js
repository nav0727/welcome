/* eslint-disable no-return-assign */
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  onSubscribed = () => {
    this.setState(prevState => ({
      isSubscribe: !prevState.isSubscribe,
    }))
  }

  onSub = () => {
    this.setState(prevState => ({
      isSubscribe: !prevState.isSubscribe,
    }))
  }

  renderAuthButton = () => {
    const {isSubscribe} = this.state
    if (isSubscribe === true) {
      return (
        <button onClick={this.onSubscribed} className="btn" type="button">
          Subscribed
        </button>
      )
    }
    return (
      <button onClick={this.onSub} className="btn" type="button">
        Subscribe
      </button>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p>Thankyou! Happy learning</p>
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default Welcome
