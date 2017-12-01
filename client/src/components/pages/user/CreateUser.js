import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import {FormControlLabel} from 'material-ui/Form'
import injectSheet from 'react-jss'
import {Link} from 'react-router-dom'
import { Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap'


const propTypes = {
  classes: PropTypes.object.isRequired,
  firstName: PropTypes.string.isRequired,
  onFirstNameChanged: PropTypes.func.isRequired,
  lastName: PropTypes.string.isRequired,
  onLastNameChanged: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  onEmailChanged: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  onPasswordChanged: PropTypes.func.isRequired,
  address: PropTypes.string.isRequired,
  onAddressChanged: PropTypes.func.isRequired,
  phone: PropTypes.string.isRequired,
  onPhoneChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '5%'
  },
  jumbotronDiv: {
    paddingTop: '10%',
    backgroundImage: 'url("https://static.pexels.com/photos/257855/pexels-photo-257855.jpeg")',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  jumboTrans: {
    backgroundColor: 'rgba(250,250,250,0.7)',
    padding: '5%'
  }
}

const enhancer = injectSheet(styles)

const CreateUser = props => {
  const { classes } = props

  return (
    <div>
      <Jumbotron className={classes.jumbotronDiv}>
        <div className={classes.jumboTrans}>
          <h1 className='display-3'>Create Gift Request User</h1>
          <p className='lead'>This account type will allow you to create Gift/s for the Virtual Giving Tree</p>
          <hr className='my-2' />
          <p>Please enter all of the Required Information below to create your account. Be sure to keep track of your password!</p>
        </div>
      </Jumbotron>
      <div className={classes.container}>
        <Form>
          <FormGroup>
            <Label>First Name</Label>
            <Input
              placeholder='First Name'
              onChange={props.onFirstNameChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Last Name</Label>
            <Input
              placeholder='Last Name'
              onChange={props.onLastNameChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Email Address</Label>
            <Input
              placeholder='Email Address'
              onChange={props.onEmailChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Mailing Address</Label>
            <Input
              type='textarea'
              placeholder='Mailing Address - Include Country if out of USA'
              onChange={props.onAddressChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Phone Number</Label>
            <Input
              placeholder='Phone Number'
              onChange={props.onPhoneChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              type='password'
              placeholder='Password'
              onChange={props.onPasswordChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
          </FormGroup>
          <Button raised onClick={(event) => props.onSubmit(event)} >Submit</Button>
        </Form>
      </div>
    </div>
  )
}

CreateUser.propTypes = propTypes

export default enhancer(CreateUser)
