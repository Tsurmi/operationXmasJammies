import React, {Component} from 'react'
import injectSheet from 'react-jss'
import {compose} from 'recompose'
import {withRouter, Link} from 'react-router-dom'
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
    width: '100%',
    justifyContent: 'center'
  },
  giftContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '50%',
    alignItems: 'center',
    marginTop: '2%'
  },
  thumbnail: {
    width: '100%',
    borderRadius: '50px 50px 0 0'
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
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
    width: '45%',
    marginTop: 10,
    justifyContent: 'space-around',
    background: '#ecf0f1'
  },
  EditButtonBuy: {
    backgroundColor: 'red',
    color: 'white',
    border: 'solid #34495e 2px',
    padding: 10,
    fontSize: 20,
    borderRadius: 4,
    textAlign: 'center',
    textDecoration: 'none'
  },
  buttonContainerBuy: {
    display: 'flex',
    flexDirection: 'column',
    width: '45%',
    marginTop: 10,
    justifyContent: 'space-around',
    background: 'red'
  },
  buttonMainContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 25
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
              ?
              <div className={this.props.classes.giftContainer}>
                <img
                  className={this.props.classes.thumbnail}
                  src={
                    this.props.giftData.gift.image ? this.props.giftData.gift.image :
                      'https://static.pexels.com/photos/260184/pexels-photo-260184.jpeg'}
                />
                <div className={this.props.classes.nameContainer}>
                  <p> Name: </p>
                  <h1> {this.props.giftData.gift.firstName} </h1>
                </div>
                <p> Jammie Size: </p>
                <h2> {this.props.giftData.gift.jammieSize} </h2>
                <p> Special Instructions: </p>
                <p> {this.props.giftData.gift.specialInstructions}</p>
                <p> Story: </p>
                <p> {this.props.giftData.gift.story} </p>
                <div className={this.props.classes.buttonMainContainer}>
                  <div className={this.props.classes.buttonContainer}>
                    <Link className={this.props.classes.EditButton} to={'/AllGifts'}>
                      Return to All Gifts
                    </Link>
                  </div>
                  <div className={this.props.classes.buttonContainerBuy}>
                    <Link className={this.props.classes.EditButtonBuy} to={'/AllGifts'}>
                      Add to Cart!
                    </Link>
                  </div>
                </div>

              </div>
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
