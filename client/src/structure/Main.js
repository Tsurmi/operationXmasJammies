import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../components/pages/Home'
import AddGiftContainer from '../components/pages/admin/AddGiftContainer'
import AllGifts from '../components/pages/admin/AllGifts'
import EditGiftContainer from '../components/pages/admin/EditGiftContainer'
import ListUsers from '../components/pages/admin/ListUsers'
import CreateUserContainer from '../components/pages/user/CreateUserContainer'
import LoginContainer from '../components/pages/authorization/LoginContainer'
import ProfileContainer from '../components/pages/user/profile/ProfileContainer'
import EditProfileContainer from '../components/pages/user/profile/EditProfileContainer'
import Randomizer from '../components/pages/user/Randomizer'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const propTypes = {
  giftData: PropTypes.object.isRequired,
  userData: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}

const styles = {
  main: {
    marginTop: 0
  }
}

const enhancer = injectSheet(styles)

const Main = ({giftData, userData, classes}) => {
  return (
    <div className={classes.main}>
      <Route path='/'exact component={Home} />
      <Route path='/AddGift' render={() => <AddGiftContainer giftData={giftData} />} />
      <Route path='/AllGifts' render={() => <AllGifts giftData={giftData} />} />
      <Route path='/EditGift/:giftId' render={() => <EditGiftContainer giftData={giftData} />} />
      <Route path='/ListUsers' render={() => <ListUsers />} />
      <Route path='/CreateUser' render={() => <CreateUserContainer userData={userData} />} />
      <Route path='/Login' render={() => <LoginContainer userData={userData} />} />
      <Route path='/Profile' render={(routeProps) => <ProfileContainer userData={userData} history={routeProps.history} />} />
      <Route path='/Randomizer' render={() => <Randomizer giftData={giftData} />} />
      <Route path='/EditProfile' render={(routeProps) => <EditProfileContainer userData={userData} history={routeProps.history} />} />
    </div>
  )
}

Main.propTypes = propTypes

export default enhancer(Main)
