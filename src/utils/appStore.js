import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice'
import feedSlice from './feedSlice'
import connectionSlice from './connectionsSlice'
import requestSlice from './requestSlice'

const appStore = configureStore({
  reducer:{
    userStore : userSlice,
    feedStore : feedSlice,
    connectionStore : connectionSlice,
    requestStore : requestSlice
  }
})

export default appStore