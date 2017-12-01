import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {giftData} from '../../../lib/propTypes'
import AddGiftForm from './AddGiftForm'
import {withRouter} from 'react-router-dom'

class AddGiftContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    giftData: PropTypes.object.isRequired
  }
  state = {
    firstName: undefined,
    lastName: undefined,
    age: undefined,
    address: undefined,
    specialInstructions: undefined,
    story: undefined,
    jammieSize: undefined,
    image: undefined
  }

  onFirstNameChanged = (event) => this.setState({
    firstName: event.target.value
  })

  onLastNameChanged = (event) => this.setState({
    lastName: event.target.value
  })

  onAgeChanged = (event) => this.setState({
    age: event.target.value
  })

  onAddressChanged = (event) => this.setState({
    address: event.target.value
  })

  onSpecialChanged = (event) => this.setState({
    specialInstructions: event.target.value
  })

  onImageChanged = (event) => this.setState({
    image: event.target.value
  })

  onStoryChanged = (event) => this.setState({
    story: event.target.value
  })

  onJammieSizeChanged = (event) => this.setState({
    jammieSize: event.target.value
  })

  onSubmit = (event) => {
    event.preventDefault()
    this.props.giftData.addGift(this.state)
    this.props.history.push('/AllGifts')
    console.log('add button worked🍾')
    alert(
      `Congrats, you added a
      ${this.state.firstName}
      ${this.state.lastName}
      ${this.state.age}
      ${this.state.jammieSize}
      ${this.state.address}
      ${this.state.specialInstructions}
      ${this.state.story}
      `)
  }
  render () {
    return (
      <AddGiftForm
        onFirstNameChanged={this.onFirstNameChanged}
        onLastNameChanged={this.onLastNameChanged}
        onAgeChanged={this.onAgeChanged}
        onAddressChanged={this.onAddressChanged}
        onSpecialChanged={this.onSpecialChanged}
        onStoryChanged={this.onStoryChanged}
        onJammieSizeChanged={this.onJammieSizeChanged}
        onImageChanged={this.onImageChanged}
        onSubmit={this.onSubmit}
      />
    )
  }
}

export default withRouter(AddGiftContainer)
