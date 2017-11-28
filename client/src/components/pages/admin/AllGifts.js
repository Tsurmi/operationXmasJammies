import React from 'react'
import injectSheet from 'react-jss'
import GiftCard from './gift/GiftCard'
import {Link, withRouter} from 'react-router-dom'
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
    height: 800,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: 'url("https://static.pexels.com/photos/688017/pexels-photo-688017.jpeg")',
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

const AllGifts = ({giftData, classes}) => {
  return (
    <div>
      <div className={classes.mainDiv}>
        <h1 className={classes.heroTitle}> Operation Xmas Jammies </h1>
        <h3 className={classes.heroSubTitle}> Spread the Cheer by buying some Pajamas </h3>
      </div>
      <div className={classes.giftCardContainer} >
        {
          giftData && giftData.gifts && giftData.gifts.length > 0
            ? giftData.gifts.map(gift =>
              <div className={classes.drinkCardCard}>
                <GiftCard
                  key={gift._id}
                  gift={gift}
                  onDelete={() => giftData.deleteGift(gift._id)}
                />
              </div>
            ) : <h1> No Gifts </h1>
        }
      </div>
    </div>
  )
}

AllGifts.propTypes = {
  classes: PropTypes.object.isRequired,
  gift: AppPropTypes.gift,
  giftData: AppPropTypes.giftData,
  onEdit: PropTypes.func.isRequired,
  deleteGift: PropTypes.func.isRequired
}

AllGifts.propTypes = propTypes

export default enhancer(withRouter(AllGifts))
