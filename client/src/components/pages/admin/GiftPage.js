import React, {Component} from 'react'
import injectSheet from 'react-jss'
import {compose} from 'recompose'
import {withRouter} from 'react-router-dom'
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

// 1) this component needs to be smart so we can lookup a gift by it's ID
// 2) You should probably call this `GiftPageContainer` and actually pass
// the gift to a dumb GiftPage
// 3) We  get the ID out of the url with the help of withRouter
// 4) we use `compose` to enhance a component with multiple things.
// IE styles and withRouter, though once this one becomes dumb, it will only
// need withRotuter

class GiftPage extends Component {
  componentDidMount () {
    console.log(this.props.match.params.giftId) // extract the ID out of the url
    // we then use the ID to to look up the gift. 
    // We can only use Match because we used withRouter
    this.props.giftData.getGiftById(this.props.match.params.giftId)
    // ^ Now we have a gift!
  }

  render () {
    return (
      <div>
        <div className={this.props.classes.mainDiv}>
          <h1 className={this.props.classes.heroTitle}> Spread Holiday Cheer </h1>
          <h3 className={this.props.classes.heroSubTitle}> Spread the Cheer by buying some Pajamas </h3>
        </div>
        <div className={this.props.classes.giftCardContainer} >
          {
            this.props.giftData.gift
              ? <h4> {this.props.giftData.gift.story}</h4>
              : <p>Error Getting Gift</p>
          }
        </div>
      </div>
    )
  }
}

GiftPage.propTypes = {
  classes: PropTypes.object.isRequired,
  gift: AppPropTypes.gift,
  giftData: AppPropTypes.giftData
}

// This componenet needs to be enhanced by more than
// one thing, so we use compose.
// enhance it with injectSheet and then withRouter
// withRouter lets us use this.props.params

const enhancer = compose(
  injectSheet(styles),
  withRouter
)

export default enhancer(GiftPage)
