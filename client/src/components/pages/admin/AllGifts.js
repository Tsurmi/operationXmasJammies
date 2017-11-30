import React from 'react'
import injectSheet from 'react-jss'
import GiftCard from './gift/GiftCard'
import {withRouter} from 'react-router-dom'
import * as AppPropTypes from '../../../lib/propTypes'
import PropTypes from 'prop-types'
import { Jumbotron } from 'reactstrap'

const propTypes = {
  giftData: AppPropTypes.giftData,
  history: PropTypes.object.isRequired
}

const styles = {
  giftCard: {
    width: '25em',
    margin: '.5%'
  },
  giftCardContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  jumbotronDiv: {
    paddingTop: '10%',
    backgroundImage: 'url("https://static.pexels.com/photos/688017/pexels-photo-688017.jpeg")',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  jumboTrans: {
    backgroundColor: 'rgba(250,250,250,0.7)',
    padding: '5%'
  },
}

const enhancer = injectSheet(styles)

const AllGifts = ({giftData, classes}) => {
  return (
    <div>
      <Jumbotron className={classes.jumbotronDiv}>
        <div className={classes.jumboTrans}>
          <h1 className='display-3'>Spread Holiday Cheer!</h1>
          <p className='lead'>Give the Gift of warm, cozy, and snuggly jammies for a child this Christmas </p>
          <hr className='my-2' />
          <p>You pick the child, you get the jammies, you mail them out. </p>
        </div>
      </Jumbotron>
      <div className={classes.giftCardContainer} >
        {
          giftData && giftData.gifts && giftData.gifts.length > 0
            ? giftData.gifts.map(gift =>
              <div className={classes.giftCard}>
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
