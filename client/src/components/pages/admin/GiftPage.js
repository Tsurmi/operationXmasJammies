import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
  formAndPhotoBucket: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  spacer: {
    marginTop: '120px'
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
  firstName: PropTypes.string.isRequired,
  jammieSize: PropTypes.string.isRequired,
  specialInstructions: PropTypes.string.isRequired,
  story: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

const enhancer = injectSheet(styles)

const GiftPage = props => {
  const { classes } = props
  return (
    <div className={props.classes.spacer}>
      <div className={props.classes.formAndPhotoBucket} >
        <div className={props.classes.photoAndCardBucket}>
          <div className={props.classes.publicCard}>
            <img className={props.classes.publicCardImage} src={props.image} />
            <h1> Name: {props.firstName} </h1>
            <p> Jammie Size: {props.jammieSize} </p>
            <p> Special Instructions: {props.specialInstructions}</p>
            <p> Story: {props.story}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
GiftPage.propTypes = propTypes

export default enhancer(GiftPage)
