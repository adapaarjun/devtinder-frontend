import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
  name:'user',
  initialState:{
    userState:null
  },
  reducers:{
    addUser : (state,actions)=>{
        state.userState = actions.payload
    },
    removeUser : (state) => {
      state.userState = null;
    }
  }
});

export const {addUser,removeUser} = userSlice.actions

export default userSlice.reducer;