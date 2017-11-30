import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import injectSheet from 'react-jss'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap'

const propTypes = {
  classes: PropTypes.object.isRequired,
  firstName: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  specialInstructions: PropTypes.string.isRequired,
  story: PropTypes.string.isRequired,
  jammieSize: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

const styles = {
  kidUserButtons: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginBottom: '5%'
  },
  allUserButtons: {
    display: 'flex',
    justifyContent: 'center'
  }
}

const enhancer = injectSheet(styles)

const GiftCard = props => {
  const { classes } = props
  return (
    <div>
      <Card>
        <CardImg top width='100%' src={
          props.gift.image ? props.gift.image :
            'https://static.pexels.com/photos/260184/pexels-photo-260184.jpeg'} alt='Gift Image' />
        <CardBody>
          <CardTitle>{props.gift.firstName}</CardTitle>
          <CardSubtitle>Age: {props.gift.age}</CardSubtitle>
          <CardText>
            <p>Story: {props.gift.story}</p>
            <p>Special Instructions: {props.gift.specialInstructions}</p>
          </CardText>
          <div className={classes.kidUserButtons}>
            <Link to={`/EditGift/${props.gift._id}`}>
              <Button outline color='primary'>Edit Gift</Button>
            </Link>
            <Button outline color='primary'onClick={props.onDelete}>Delete</Button>
          </div>
          <div className={classes.allUserButtons}>
            <Button outline color='primary'>Eventually Add to Cart</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

GiftCard.propTypes = propTypes

export default enhancer(GiftCard)
