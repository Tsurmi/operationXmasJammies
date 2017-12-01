import React, {Component} from 'react'
import PropTypes from 'prop-types'
import EditProfileForm from './EditProfileForm'
import {withRouter} from 'react-router-dom'

class EditProfileContainer extends Component {
  static propTypes = {
    userData: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }

  state = {
    loaded: false,
    firstName: undefined,
    lastName: undefined,
    address: undefined,
    phone: undefined,
    email: undefined
  }

  componentDidMount () {
    if (!this.props.userData || !this.props.userData.user) {
      this.props.history.push('/login')
    } else {
      this.setState({
        firstName: this.props.userData.user.local.firstName,
        lastName: this.props.userData.user.local.lastName,
        address: this.props.userData.user.local.address,
        phone: this.props.userData.user.local.phone,
        email: this.props.userData.user.local.email,
        loaded: true
      })
    }
  }

onFirstNameChanged = (event) => this.setState({firstName: event.target.value})

onLastNameChanged = (event) => this.setState({lastName: event.target.value})

onAddressChanged = (event) => this.setState({address: event.target.value})

onPhoneChanged = (event) => this.setState({phone: event.target.value})

onEmailChanged = (event) => this.setState({email: event.target.value})

onSubmit = (event) => {
  event.preventDefault()
  this.props.userData.updateUser(this.props.userData.user._id, this.state)
  this.props.history.push('/profile')
  console.log('Submit Form Worked')
}

render () {
  return (
    this.state.loaded ? <EditProfileForm
      {...this.state}
      onFirstNameChanged={this.onFirstNameChanged}
      onLastNameChanged={this.onLastNameChanged}
      onAddressChanged={this.onAddressChanged}
      onPhoneChanged={this.onPhoneChanged}
      onEmailChanged={this.onEmailChanged}
      onSubmit={this.onSubmit}
    /> : null)
}
}

export default withRouter(EditProfileContainer)
