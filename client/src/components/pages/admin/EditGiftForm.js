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
    flexDirection: 'row',
    paddingLeft: '5%',
    paddingRight: '5%'
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
  },
  formImage: {
    width: '100%'
  },
  photoAndCardBucket: {
    display: 'flex',
    flexDirection: 'column'
  },
  publicCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '2%',
    width: '50%'
  },
  publicCardImage: {
    width: '100%'
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
  city: PropTypes.string.isRequired,
  onCityChanged: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const enhancer = injectSheet(styles)

const EditGiftForm = props => {
  const { classes } = props
  return (
    <div className={props.classes.spacer}>
      <h1 className={classes.header}>Edit A Gift</h1>
      <div className={props.classes.formAndPhotoBucket} >
        <div className={props.classes.photoAndCardBucket}>
          <div className={props.classes.publicCard}>
            <h1> This is what the public sees </h1>
            <img className={props.classes.publicCardImage} src={props.image} />
            <h1> Name: {props.firstName} </h1>
            <p> Jammie Size: {props.jammieSize} </p>
            <p> Special Instructions: {props.specialInstructions}</p>
            <p> Story: {props.story}</p>
          </div>
        </div>
        <div className={props.classes.formBucket}>
          <form className={props.classes.input}>
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
            <Button className={props.classes.button} raised onClick={(event) => props.onSubmit(event)} >Submit</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
EditGiftForm.propTypes = propTypes

export default enhancer(EditGiftForm)
