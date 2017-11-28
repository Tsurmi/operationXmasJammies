import React from 'react'
import Layout from './structure/Layout'
import {BrowserRouter} from 'react-router-dom'
import 'typeface-roboto'
import GiftDataProvider from './GiftDataProvider'
import UserDataProvider from './UserDataProvider'

const App = () =>
  <BrowserRouter>
    <UserDataProvider>
      <GiftDataProvider>
        <Layout />
      </GiftDataProvider>
    </UserDataProvider>
  </BrowserRouter>

export default App
