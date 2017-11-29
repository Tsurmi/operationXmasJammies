import React from 'react'
import injectSheet from 'react-jss'
import GiftCard from './gift/GiftCard'
import {Route, withRouter} from 'react-router-dom'
import * as AppPropTypes from '../../../lib/propTypes'
import PropTypes from 'prop-types'

const propTypes = {
  giftData: AppPropTypes.giftData,
  history: PropTypes.object.isRequired
}

const styles = {
  drinkCardContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: '20px',
    width: '100%',
    justifyContent: 'center'
  },
  drinkCardCard: {
    width: '25%',
    margin: '1%'
  },
  mainDiv: {
    height: 300,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: 'url("https://static.pexels.com/photos/298826/pexels-photo-298826.jpeg")',
    position: 'relative',
    justifyContent: 'center'
  },
  heroTitle: {
    fontSize: '4em',
    color: 'white',
    fontFamily: 'Bookman',
    textShadow: '1px 1px 2px black'
  },
  heroButton: {
    width: '25%'
  },
  heroSubTitle: {
    fontSize: '2em',
    color: 'white',
    fontFamily: 'Bookman',
    textShadow: '1px 1px 2px black'
  },
  giftCardContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap'
  }
}

const enhancer = injectSheet(styles)

const GiftPage = (props, giftData) => {
  return (
    <div>
      <div className={props.classes.mainDiv}>
        <h1 className={props.classes.heroTitle}> Spread Holiday Cheer </h1>
        <h3 className={props.classes.heroSubTitle}> Spread the Cheer by buying some Pajamas </h3>
      </div>
      <div className={props.classes.giftCardContainer} >
        Pizza
      </div>
    </div>
  )
}

GiftPage.propTypes = {
  classes: PropTypes.object.isRequired,
  gift: AppPropTypes.gift,
  giftData: AppPropTypes.giftData,
}

GiftPage.propTypes = propTypes

export default enhancer(withRouter(GiftPage))
