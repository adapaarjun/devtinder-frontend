import { createSlice } from "@reduxjs/toolkit";


const feedSlice = createSlice({
  name:'feed',
  initialState :{
      feedData: []
  },
  reducers : {
      addFeed : (state,actions)=>{
          state.feedData = actions.payload
      },
      removeFeed : (state)=>{
        state.feedData = [];
      },
      removeUserFromFeed : (state,actions)=>{
          const newUsersFeed = state.feedData.filter((index)=>index._id !== actions.payload)
          state.feedData = newUsersFeed
      }
  }
})


export const {addFeed,removeFeed,removeUserFromFeed} = feedSlice.actions;

export default feedSlice.reducer;