import PropTypes from 'prop-types'

export const user = PropTypes.shape({
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
})

export const userData = PropTypes.shape({
  isLoaded: PropTypes.bool.isRequired,
  addUser: PropTypes.func.isRequired,
  getAllUsers: PropTypes.func.isRequired,
  getUserById: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired
})

export const gift = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  jammieSize: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  mailingState: PropTypes.string.isRequired,
  zipCode: PropTypes.string.isRequired,
  specialInstructions: PropTypes.string.isRequired,
  story: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
})

export const giftData = PropTypes.shape({
  isLoaded: PropTypes.bool.isRequired,
  addGift: PropTypes.func.isRequired,
  randomGift: PropTypes.func.isRequired

}).isRequired
