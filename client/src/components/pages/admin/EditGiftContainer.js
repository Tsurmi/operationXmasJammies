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
    address: undefined,
    specialInstructions: undefined,
    story: undefined,
    image: undefined
  }

  componentDidMount () {
    this.props.giftData.getGiftById(this.props.match.params.giftId)
    setTimeout(() => {
      this.setState({
        firstName: this.props.giftData.gift.firstName,
        lastName: this.props.giftData.gift.lastName,
        age: this.props.giftData.gift.age,
        jammieSize: this.props.giftData.gift.jammieSize,
        address: this.props.giftData.gift.address,
        specialInstructions: this.props.giftData.gift.specialInstructions,
        story: this.props.giftData.gift.story,
        image: this.props.giftData.gift.image,
        loaded: true
      })
    }, 2000)
  }

  onFirstNameChanged = (event) => this.setState({firstName: event.target.value})

  onImageChanged = (event) => this.setState({image: event.target.value})

  onLastNameChanged = (event) => this.setState({lastName: event.target.value})

  onAgeChanged = (event) => this.setState({age: event.target.value})

  onJammieSizeChanged = (event) => this.setState({jammieSize: event.target.value})

  onAddressChanged = (event) => this.setState({address: event.target.value})

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
        onAgeChanged={this.onAgeChanged}
        onJammieSizeChanged={this.onJammieSizeChanged}
        onAddressChanged={this.onStreetChanged}
        onSpecialChanged={this.onSpecialChanged}
        onStoryChanged={this.onStoryChanged}
        onImageChanged={this.onImageChanged}
        onSubmit={this.onSubmit}
      /> : null
    )
  }
}

export default withRouter(EditGiftContainer)
