import React from 'react'
import {Link} from 'react-router-dom'

import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '10%',
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  cardBucket: {
    width: '25%',
    marginRight: '5%'
  },
  jumbotronDiv: {
    paddingTop: '10%',
    backgroundImage: 'url("https://static.pexels.com/photos/17795/christmas-xmas-christmas-tree-decoration.jpg")',
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
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'center'
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
    <div>
      <div>
        <Jumbotron className={classes.jumbotronDiv}>
          <div className={classes.jumboTrans}>
            <h1 className='display-3'>Edit Your Gift</h1>
            <p className='lead'>Update any of the information below, but be sure to keep All Required Information filled out. </p>
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
      <div className={props.classes.headerContainer}>
        <Card className={props.classes.cardBucket}>
          <CardImg top width='100%' src={
            props.image ? props.image :
              'https://static.pexels.com/photos/260184/pexels-photo-260184.jpeg'} alt='Gift Image' />
          <CardBody>
            <CardTitle>{props.firstName}</CardTitle>
            <CardSubtitle>Age: {props.age}</CardSubtitle>
            <CardText>
              <p>Story: {props.story}</p>
              <p>Special Instructions: {props.specialInstructions}</p>
            </CardText>
          </CardBody>
        </Card>
      </div>
      <div className={classes.formBucket}>
        <Form>
          <h4> Required Information </h4>
          <p> This is the information only a person who is fulfilling
          the Gift will see.  Only after they provide their contact information </p>
          <FormGroup>
            <Label>First Name:</Label>
            <Input
              placeholder={props.firstName}
              onChange={props.onFirstNameChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Last Name:</Label>
            <Input
              placeholder={props.lastName}
              onChange={props.onLastNameChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Jammie Size:</Label>
            <Input
              placeholder={props.jammieSize}
              onChange={props.onJammieSizeChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Mailing Street:</Label>
            <Input
              placeholder={props.street}
              onChange={props.onStreetChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Mailing City:</Label>
            <Input
              placeholder={props.city}
              onChange={props.onCityChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Mailing State:</Label>
            <Input
              placeholder={props.mailingState}
              onChange={props.onMailingStateChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Mailing Zip Code:</Label>
            <Input
              placeholder={props.zipCode}
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
              placeholder={props.age}
              onChange={props.onAgeChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Image URL:</Label>
            <Input
              placeholder={props.image}
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
              placeholder={props.specialInstructions}
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
              placeholder={props.story}
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
EditGiftForm.propTypes = propTypes

export default enhancer(EditGiftForm)
