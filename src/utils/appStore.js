import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice'

const appStore = configureStore({
  reducer:{
    userStore : userSlice
  }
})

export default appStore