const express = require('express')

const Router = express.Router()
const Gift = require('../models/Gift')

Router.route('/')
  .get((req, res) => {
    Gift.find((err, gifts) => {
      if (err) {
        res.json({ message: err, data: null })
      } else {
        res.json({ message: 'all the gifts ☕️', data: gifts })
      }
    })
  })
  .post((req, res) => {
    const gift = new Gift()
    gift.loadData(req.body)
    gift.save((err, gift) => {
      if (err) {
        res.json({ message: err, data: null })
      } else {
        console.log('added gift from backend', gift)
        res.json({ message: 'Added new Gift 😆', data: gift })
      }
    })
  })
Router.route('/id/:gift_id')
  .delete((req, res) => {
    Gift.remove({_id: req.params.gift_id}, (err) => {
      if (err) {
        res.json({ message: err, data: null })
      } else {
        res.json({ message: 'Gift Deleted', data: {} })
      }
    })
  })
  .put((req, res) => {
    Gift.findById(req.params.gift_id, (er, gift) => {
      if (er) return res.status(500)
      if (!gift) return res.status(404)
      gift.loadData(req.body)
      gift.save((err, updatedGift) => {
        if (err) {
          res.json({ message: err, data: null })
        } else {
          res.json({ updatedGift, message: 'Gift Updated' })
        }
      })
    })
  })
  .get((req, res) => {
    Gift.findById({_id: req.params.gift_id}, (err, gift) => {
      if (err) {
        res.json({ message: err, data: null })
      } else {
        res.json({ message: 'gotchu a gift', data: gift })
      }
    })
  })

Router.route('/random')
  .get((req, res) => {
    Gift.find((err, gifts) => {
      if (err) {
        res.json({ message: err, data: null })
      } else {
        const gift = gifts[Math.floor(Math.random() * gifts.length)]
        res.json({ message: 'random gift', data: gift })
      }
    })
  })
module.exports = Router
