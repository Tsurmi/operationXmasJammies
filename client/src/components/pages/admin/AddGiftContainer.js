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
    street: undefined,
    city: undefined,
    mailingState: undefined,
    zipCode: undefined,
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

  onCityChanged = (event) => this.setState({
    city: event.target.value
  })

  onStreetChanged = (event) => this.setState({
    street: event.target.value
  })

  onMailingStateChanged = (event) => this.setState({
    mailingState: event.target.value
  })

  onZipCodeChanged = (event) => this.setState({
    zipCode: event.target.value
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
      ${this.state.street}
      ${this.state.mailingState}
      ${this.state.zipCode}
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
        onStreetChanged={this.onStreetChanged}
        onCityChanged={this.onCityChanged}
        onMailingStateChanged={this.onMailingStateChanged}
        onZipCodeChanged={this.onZipCodeChanged}
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
