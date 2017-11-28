import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import {Link} from 'react-router-dom'
import injectSheet from 'react-jss'

const propTypes = {
  classes: PropTypes.object.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  mailingState: PropTypes.string.isRequired,
  zipCode: PropTypes.string.isRequired,
  specialInstructions: PropTypes.string.isRequired,
  story: PropTypes.string.isRequired,
  jammieSize: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

const styles = {
  drinkItem: {
    background: '#ecf0f1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    width: '100%',
    margin: 25,
    borderRadius: '50px 50px 50px 50px',
    paddingBottom: '20px'
  },
  thumbnail: {
    width: '100%',
    borderRadius: '50px 50px 0 0'
  },
  giftTitle: {
    textAlign: 'center'
  },
  imageTitle: {
    background: '#ffffff',
    width: '100%'
  },
  giftDetails: {
    display: 'flex',
    flexDirection: 'column',
    background: '#ecf0f1',
    textAlign: 'center'
  },
  p: {
    fontSize: 12
  },
  price: {
    fontSize: 50
  },
  button: {
    backgroundColor: '#494949',
    color: 'white',
    border: 'solid #34495e 2px',
    padding: 10,
    fontSize: 20,
    borderRadius: 4
  },
  EditButton: {
    backgroundColor: '#494949',
    color: 'white',
    border: 'solid #34495e 2px',
    padding: 10,
    fontSize: 20,
    borderRadius: 4,
    textAlign: 'center',
    textDecoration: 'none'
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
    marginBottom: 10,
    justifyContent: 'space-around',
    background: '#ecf0f1'
  },
  styleWords: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  styleImg: {
    display: 'flex',
    paddingBottom: '10px'
  },
  styleImgMini: {
    width: '100%'
  },
  boolImg: {
    width: '35%'
  }
}

const enhancer = injectSheet(styles)

const GiftCard = props => {
  const { classes } = props
  return (
    <div className={classes.drinkItem}>
      <img
        className={classes.thumbnail}
        src={
          props.gift.image ? props.gift.image :
            'https://static.pexels.com/photos/260184/pexels-photo-260184.jpeg'}
      />
      <div className={classes.imageTitle}>
        <h1 className={classes.giftTitle}> {props.gift.firstName} </h1>
      </div>
      <div className={classes.giftDetails}>
        <p>Age: {props.gift.age}</p>
        <p>Jammie Size: {props.gift.jammieSize}</p>
        <p>Special Instructions: {props.gift.specialInstructions}</p>
        <p>Story: {props.gift.story}</p>
      </div>
      <div className={classes.buttonContainer}>
        <Link className={classes.EditButton} to={`/EditGift/${props.gift._id}`}>
          Edit
        </Link>
      </div>
      <div className={classes.buttonContainer}>
        <button className={classes.button} onClick={props.onDelete}>Delete</button>
      </div>
    </div>
  )
}

GiftCard.propTypes = propTypes

export default enhancer(GiftCard)
