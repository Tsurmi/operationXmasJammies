import React from 'react'
import Input from 'material-ui/Input'
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
    height: '30vw'
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
  onLastNameChanged: PropTypes.func.isRequired,
  onAgeChanged: PropTypes.func.isRequired,
  onStreetChanged: PropTypes.func.isRequired,
  onCityChanged: PropTypes.func.isRequired,
  onMailingStateChanged: PropTypes.func.isRequired,
  onZipCodeChanged: PropTypes.func.isRequired,
  onSpecialChanged: PropTypes.func.isRequired,
  onStoryChanged: PropTypes.func.isRequired,
  onJammieSizeChanged: PropTypes.func.isRequired,
  onImageChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const enhancer = injectSheet(styles)

const AddGiftForm = props => {
  const { classes } = props
  return (
    <div className={classes.spacer}>
      <h1 className={classes.header}>Request A Gift</h1>
      <div className={classes.formAndPhotoBucket} >
        <img className={classes.photo} src='https://static.pexels.com/photos/360624/pexels-photo-360624.jpeg' />
        <div className={classes.formBucket}>
          <form className={classes.input}>
            <h4> Required Information </h4>
            <p> This is the information only a person who is fulfilling
            the Gift will see.  Only after they provide their contact information </p>
            <p>First Name:</p>
            <Input
              placeholder={props.firstName}
              onChange={props.onFirstNameChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <p>Last Name:</p>
            <Input
              placeholder={props.lastName}
              onChange={props.onLastNameChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <p>Jammie Size:</p>
            <Input
              placeholder={props.jammieSize}
              onChange={props.onJammieSizeChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <p>Mailing Street:</p>
            <Input
              placeholder={props.street}
              onChange={props.onStreetChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <p>Mailing City:</p>
            <Input
              placeholder={props.city}
              onChange={props.onCityChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <p>Mailing State:</p>
            <Input
              placeholder={props.mailingState}
              onChange={props.onMailingStateChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <p>Mailing Zip Code:</p>
            <Input
              placeholder={props.zipCode}
              onChange={props.onZipCodeChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <h4> Optional Information </h4>
            <p> This is the information everyone will see.
            Fill out as much of it as you like </p>
            <p>Age:</p>
            <Input
              placeholder={props.age}
              onChange={props.onAgeChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <p>Image:</p>
            <Input
              placeholder={props.image}
              onChange={props.onImageChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <img className={props.classes.formImage} src={props.image} />
            <p>Special Instructions:</p>
            <Input
              placeholder={props.specialInstructions}
              onChange={props.onSpecialChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <p>Story:</p>
            <Input
              placeholder={props.story}
              onChange={props.onStoryChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <Button className={classes.button} raised onClick={(event) => props.onSubmit(event)} >Submit</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
AddGiftForm.propTypes = propTypes

export default enhancer(AddGiftForm)
