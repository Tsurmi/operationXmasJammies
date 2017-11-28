import React, {Component} from 'react'
import * as ServerApi from './lib/serverApi'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.element.isRequired,
  userData: PropTypes.object.isRequired
}

class GiftDataProvider extends Component {
  state = {
    isLoaded: false,
    gifts: [],
    randomGift: undefined,
    gift: undefined
  }

  methods = {
    getAllGifts: () =>
      ServerApi.getAllGifts()
        .then(gifts => {
          console.log(gifts, 'where are all the gifts!')
          this.setState({
            isLoaded: true,
            gifts: gifts
          })
        }),

    addGift: (newGift) =>
      ServerApi.addGift(newGift)
        .then(() => {
          this.methods.getAllGifts()
        }),

    deleteGift: (giftId) =>
      ServerApi.deleteGift(giftId)
        .then(() => {
          this.methods.getAllGifts()
        }),

    getRandomGift: () =>
      ServerApi.getRandomGift()
        .then((res) => {
          console.log('random gift response', res)
          this.setState({
            isLoaded: true,
            randomGift: res
          })
        }),

    getGiftById: (giftId) => {
      ServerApi.getGiftById(giftId)
        .then((gift) => {
          this.setState({
            gift: gift
          })
        })
    },

    updateGift: (giftId, gift) =>
      ServerApi.updateGift(giftId, gift)
        .then(this.methods.getAllGifts)
  }

  componentDidMount () {
    this.methods.getAllGifts()
  }

  render () {
    const giftData = {
      ...this.state,
      ...this.methods
    }
    return React.cloneElement(this.props.children, {giftData, userData: this.props.userData})
  }
}

GiftDataProvider.propTypes = propTypes

export default GiftDataProvider
