import React from 'react'
import Footer from './Footer'
import Header from './header/Header'
import Main from './Main'
import PropTypes from 'prop-types'

const propTypes = {
  giftData: PropTypes.func.isRequired,
  userData: PropTypes.func.isRequired
}

const Layout = ({giftData, userData}) => {
  return (
    <div>
      <Header userData={userData} />
      <Main giftData={giftData} userData={userData} />
      <Footer />
    </div>
  )
}

Layout.propTypes = propTypes

export default Layout
