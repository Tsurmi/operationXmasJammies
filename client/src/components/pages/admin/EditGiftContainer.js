import React, {Component} from 'react'
import PropTypes from 'prop-types'
import EditGiftForm from './EditGiftForm'
import {withRouter} from 'react-router-dom'

class EditGiftContainer extends Component {
  static propTypes = {
    giftData: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  }

  state = {
    loaded: false,
    firstName: undefined,
    lastName: undefined,
    age: undefined,
    jammieSize: undefined,
    street: undefined,
    mailingState: undefined,
    zipCode: undefined,
    specialInstructions: undefined,
    story: undefined,
    nickName: undefined,
    image: undefined
  }

  componentDidMount () {
    this.props.giftData.getGiftById(this.props.match.params.giftId)
    setTimeout(() => {
      this.setState({
        firstName: this.props.giftData.gift.firstName,
        lastName: this.props.giftData.gift.lastName,
        nickName: this.props.giftData.gift.nickName,
        age: this.props.giftData.gift.age,
        jammieSize: this.props.giftData.gift.jammieSize,
        street: this.props.giftData.gift.street,
        mailingState: this.props.giftData.gift.mailingState,
        zipCode: this.props.giftData.gift.zipCode,
        specialInstructions: this.props.giftData.gift.specialInstructions,
        story: this.props.giftData.gift.story,
        image: this.props.giftData.gift.image,
        loaded: true
      })
    }, 2000)
  }

  onFirstNameChanged = (event) => this.setState({firstName: event.target.value})

  onNickNameChanged = (event) => this.setState({nickName: event.target.value})

  onImageChanged = (event) => this.setState({image: event.target.value})

  onLastNameChanged = (event) => this.setState({lastName: event.target.value})

  onAgeChanged = (event) => this.setState({age: event.target.value})

  onJammieSizeChanged = (event) => this.setState({jammieSize: event.target.value})

  onStreetChanged = (event) => this.setState({street: event.target.value})

  onMailingStateChanged = (event) => this.setState({mailingState: event.target.value})

  onZipCodeChanged = (event) => this.setState({zipCode: event.target.value})

  onSpecialChanged = (event) => this.setState({specialInstructions: event.target.value})

  onStoryChanged = (event) => this.setState({story: event.target.value})


  onSubmit = (event) => {
    event.preventDefault()
    this.props.giftData.updateGift(this.props.match.params.giftId, this.state)
    this.props.history.push('/AllGifts')
    console.log('edited gift')
  }

  render () {
    return (
      this.state.loaded ? <EditGiftForm
        {...this.state}
        onFirstNameChanged={this.onFirstNameChanged}
        onLastNameChanged={this.onLastNameChanged}
        onNickNameChanged={this.onNickNameChanged}
        onAgeChanged={this.onAgeChanged}
        onJammieSizeChanged={this.onJammieSizeChanged}
        onStreetChanged={this.onStreetChanged}
        onMailingStateChanged={this.onMailingStateChanged}
        onZipCodeChanged={this.onZipCodeChanged}
        onSpecialChanged={this.onSpecialChanged}
        onStoryChanged={this.onStoryChanged}
        onImageChanged={this.onImageChanged}
        onSubmit={this.onSubmit}
      /> : null
    )
  }
}

export default withRouter(EditGiftContainer)
