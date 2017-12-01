import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap'

const propTypes = {
  classes: PropTypes.object.isRequired,
  firstName: PropTypes.string.isRequired,
  onFirstNameChanged: PropTypes.func.isRequired,
  lastName: PropTypes.string.isRequired,
  onLastNameChanged: PropTypes.func.isRequired,
  address: PropTypes.string.isRequired,
  onAddressChanged: PropTypes.func.isRequired,
  phone: PropTypes.string.isRequired,
  onPhoneChanged: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  onEmailChanged: PropTypes.func.isRequired,
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
    backgroundImage: 'url("https://static.pexels.com/photos/190932/pexels-photo-190932.jpeg")',
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

const EditProfileForm = props => {
  const { classes } = props
  return (
    <div>
      <Jumbotron className={classes.jumbotronDiv}>
        <div className={classes.jumboTrans}>
          <h1 className='display-3'>Edit Your Profile</h1>
          <p className='lead'>This is the information we have on file for you</p>
          <hr className='my-2' />
          <p>Please update any of the Information below as needed</p>
        </div>
      </Jumbotron>
      <div className={classes.container}>
        <Form>
          <FormGroup>
            <Label>First Name</Label>
            <Input
              value={props.firstName}
              onChange={props.onFirstNameChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Last Name</Label>
            <Input
              value={props.lastName}
              onChange={props.onLastNameChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Email Address</Label>
            <Input
              value={props.email}
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
              value={props.address}
              onChange={props.onAddressChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Phone Number</Label>
            <Input
              value={props.phone}
              onChange={props.onPhoneChanged}
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

EditProfileForm.propTypes = propTypes

export default enhancer(EditProfileForm)
