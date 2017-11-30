import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import injectSheet from 'react-jss'
import { Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap'


const styles = {
  jumbotronDiv: {
    paddingTop: '10%',
    backgroundImage: 'url("https://static.pexels.com/photos/77078/theme-christmas-77078.jpeg")',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  jumboTrans: {
    backgroundColor: 'rgba(250,250,250,0.7)',
    padding: '5%'
  },
  formBucket: {
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingBottom: '10%'
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
    <div>
      <div>
        <Jumbotron className={classes.jumbotronDiv}>
          <div className={classes.jumboTrans}>
            <h1 className='display-3'>Request A Gift!</h1>
            <p className='lead'>Please enter all of the Required Information in the form below to post your gift request. </p>
            <hr className='my-2' />
            <p>Feel free to elaborate and enter the Optional Information as well!</p>
            <p className='lead'>
              <p> Need Inspiration? </p>
              <Link to={'/AllGifts'}>
                <Button color='primary'>See All Gifts</Button>
              </Link>
            </p>
          </div>
        </Jumbotron>
      </div>
      <div className={classes.formBucket}>
        <Form>
          <h4> Required Information </h4>
          <p> This is the information only a person who is fulfilling
          the Gift will see.  Only after they provide their contact information </p>
          <FormGroup>
            <Label>First Name:</Label>
            <Input
              placeholder='First Name of Recipient '
              onChange={props.onFirstNameChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Last Name:</Label>
            <Input
              placeholder='Last Name of Recipient'
              onChange={props.onLastNameChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Jammie Size:</Label>
            <Input
              placeholder='Jammie Size - youth, adult, and size please. ex. youth large'
              onChange={props.onJammieSizeChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Mailing Street:</Label>
            <Input
              placeholder='House Number, Unit Number, etc. and Street'
              onChange={props.onStreetChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Mailing City:</Label>
            <Input
              placeholder='City'
              onChange={props.onCityChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Mailing State:</Label>
            <Input
              placeholder='Two Letter Abbreviation '
              onChange={props.onMailingStateChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Mailing Zip Code:</Label>
            <Input
              placeholder='Five Digit Zip Code'
              onChange={props.onZipCodeChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
          </FormGroup>
          <h4> Optional Information </h4>
          <p> This is the information everyone will see.
          Fill out as much of it as you like </p>
          <FormGroup>
            <Label>Age:</Label>
            <Input
              placeholder='Age In Years'
              onChange={props.onAgeChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Image URL:</Label>
            <Input
              placeholder='Valid URL/Web Address For Picture ONLY'
              onChange={props.onImageChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Special Instructions:</Label>
            <Input
              type='textarea'
              placeholder='Special Instructions for Jammies'
              onChange={props.onSpecialChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Story:</Label>
            <Input
              type='textarea'
              placeholder='Your Story'
              onChange={props.onStoryChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
          </FormGroup>
          <Button onClick={(event) => props.onSubmit(event)} >Submit</Button>
        </Form>
      </div>
    </div>

  )
}
AddGiftForm.propTypes = propTypes

export default enhancer(AddGiftForm)
