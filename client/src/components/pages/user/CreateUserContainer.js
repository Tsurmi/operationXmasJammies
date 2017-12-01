import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CreateUser from './CreateUser'
import {userData} from '../../../lib/propTypes'
import {withRouter} from 'react-router-dom'

const propTypes = {
  userData
}

class CreateUserContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    userData: PropTypes.object.isRequired
  }

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    image: undefined,
    address: '',
    phone: ''
  }

  onFirstNameChanged = (event) => this.setState({
    firstName: event.target.value
  })

  onLastNameChanged = (event) => this.setState({
    lastName: event.target.value
  })

  onEmailChanged = (event) => this.setState({
    email: event.target.value
  })

  onPasswordChanged = (event) => this.setState({
    password: event.target.value
  })

  onAddressChanged = (event) => this.setState({
    address: event.target.value
  })

  onPhoneChanged = (event) => this.setState({
    phone: event.target.value
  })

  onSubmit = (event) => {
    event.preventDefault()
    console.log('On Submit triggered')
    this.props.userData.addUser(this.state)
    this.props.history.push('/')
    alert(`Congrats, you are all signed up ${this.state.firstName}`)
  }

  render () {
    return (
      <CreateUser
        {...this.state}
        onFirstNameChanged={this.onFirstNameChanged}
        onLastNameChanged={this.onLastNameChanged}
        onEmailChanged={this.onEmailChanged}
        onPasswordChanged={this.onPasswordChanged}
        onAddressChanged={this.onAddressChanged}
        onPhoneChanged={this.onPhoneChanged}
        onSubmit={this.onSubmit}
      />
    )
  }
}
CreateUserContainer.propTypes = propTypes

export default withRouter(CreateUserContainer)
