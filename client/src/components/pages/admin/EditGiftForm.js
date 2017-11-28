import React from 'react'
import Input from 'material-ui/Input'
import {FormControlLabel} from 'material-ui/Form'
import Switch from 'material-ui/Switch'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
  formAndPhotoBucket: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  input: {
    display: 'flex',
    flexDirection: 'column',
    margin: 10,
    width: '33.33333333333vw',
    height: '30vw',
    border: 'solid black'
  },
  inputTag: {
    border: 'solid yellow',
    width: ''
  },
  photo: {
    display: 'flex',
    width: 700,
    height: 500
  },
  button: {
    margin: 20,
    width: 20
  },
  header: {
    fontFamily: 'Merriweather',
    margin: 10,
    paddingLeft: '70%'
  },
  spacer: {
    marginTop: '120px'
  }
}

const propTypes = {
  classes: PropTypes.object.isRequired,
  onFirstNameChanged: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  onLastNameChanged: PropTypes.func.isRequired,
  lastName: PropTypes.string.isRequired,
  onAgeChanged: PropTypes.func.isRequired,
  age: PropTypes.string.isRequired,
  onJammieSizeChanged: PropTypes.func.isRequired,
  jammieSize: PropTypes.string.isRequired,
  onStreetChanged: PropTypes.func.isRequired,
  street: PropTypes.string.isRequired,
  onMailingStateChanged: PropTypes.func.isRequired,
  mailingState: PropTypes.string.isRequired,
  onZipCodeChanged: PropTypes.func.isRequired,
  zipCode: PropTypes.string.isRequired,
  onSpecialChanged: PropTypes.func.isRequired,
  specialInstructions: PropTypes.string.isRequired,
  onStoryChanged: PropTypes.func.isRequired,
  story: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onImageChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const enhancer = injectSheet(styles)

const EditGiftForm = props => {
  const { classes } = props
  return (
    <div className={props.classes.spacer}>
      <h1 className={classes.header}>Edit A Drink</h1>
      <div className={props.classes.formAndPhotoBucket} >
        <img className={props.classes.photo} src='https://burst.shopifycdn.com/photos/grey-coffee-mug_925x.jpg' />
        <div className={props.classes.formBucket}>
          <form className={props.classes.input}>
            <Input
              placeholder='Edit First Name'
              value={props.firstName}
              onChange={props.onFirstNameChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <Input
              placeholder='Edit Last First Name'
              value={props.lastName}
              onChange={props.onLastNameChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <Input
              placeholder='Edit Age'
              value={props.age}
              onChange={props.onAgeChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <Input
              placeholder='Edit Jammie Size'
              value={props.jammieSize}
              onChange={props.onJammieSizeChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <Input
              placeholder='Edit Special Instructions'
              value={props.specialInstructions}
              onChange={props.onSpecialChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <Input
              placeholder='Edit Story'
              value={props.story}
              onChange={props.onStoryChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />

            <Input
              placeholder='Edit Photo URL'
              value={props.image}
              onChange={props.onImageChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <Button className={props.classes.button} raised onClick={(event) => props.onSubmit(event)} >Submit</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
EditGiftForm.propTypes = propTypes

export default enhancer(EditGiftForm)
