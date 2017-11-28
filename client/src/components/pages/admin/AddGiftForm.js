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
  onLastNameChanged: PropTypes.func.isRequired,
  onAgeChanged: PropTypes.func.isRequired,
  onStreetChanged: PropTypes.func.isRequired,
  onMailingStateChanged: PropTypes.func.isRequired,
  onZipCodeChanged: PropTypes.func.isRequired,
  onSpecialChanged: PropTypes.func.isRequired,
  onStoryChanged: PropTypes.func.isRequired,
  onJammieSizeChanged: PropTypes.func.isRequired,
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
            <Input
              placeholder='First Name'
              onChange={props.onFirstNameChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <Input
              placeholder='Last Name'
              onChange={props.onLastNameChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <Input
              placeholder='Age'
              onChange={props.onAgeChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <Input
              placeholder='Jammie Size'
              onChange={props.onJammieSizeChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <Input
              placeholder='Add a Photo URL (optional)'
              onChange={props.onImageChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <Input
              placeholder='Mailing Street'
              onChange={props.onStreetChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <Input
              placeholder='Mailing State'
              onChange={props.onMailingStateChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <Input
              placeholder='Mailing Zip Code'
              onChange={props.onZipCodeChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <Input
              placeholder='Special Instructions (optional)'
              onChange={props.onSpecialChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <Input
              placeholder='Story (optional)'
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
