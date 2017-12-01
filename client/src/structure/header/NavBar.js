import React from 'react'
import {NavLink} from 'react-router-dom'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import Gravatar from 'react-gravatar'

const propTypes = {
  classes: PropTypes.object.isRequired,
  userData: PropTypes.object.isRequired
}

const styles = {
  navLinks: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    top: 0,
    width: '33%'
  },
  links: {
    textDecoration: 'none',
    color: 'black',
    fontFamily: 'Merriweather'
  },
  navLinksLinks: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '75%'
  },
  navLinksGravatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '25%'
  },
  gravatarImg: {
    borderRadius: '50px'
  }
}
const enhancer = injectSheet(styles)

const NavBar = props => {
  const { classes, userData } = props
  return (
    <div className={classes.navLinks}>
        <NavLink className={classes.links} to='/'>Home</NavLink>
        <NavLink className={classes.links} to='/AllGifts'>Giving Tree</NavLink>
        <NavLink className={classes.links} to='/CreateUser'>Create User</NavLink>
        <NavLink className={classes.links} to='/LogIn'>Login</NavLink>
        <NavLink className={classes.links} to='/Profile'>Profile</NavLink>
        <NavLink className={classes.links} to='/AddGift'>Create Gift</NavLink>


    </div>
  )
}
NavBar.propTypes = propTypes

export default enhancer(NavBar)
