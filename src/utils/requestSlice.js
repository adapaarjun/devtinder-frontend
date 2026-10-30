import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name:'requestSlice',
  initialState:{
    requestData:[]
  },
  reducers:{
    addRequest:(state,actions)=>{
      state.requestData = actions.payload
    },
    removeSlice:(state)=>{
      state.requestData = []
    },
    removeRequestUser:(state,actions)=>{
      console.log(typeof(actions.payload));
      console.log(state.requestData);
      const newRequestStore = state.requestData.filter((index)=>index._id !== actions.payload);
      state.requestData = newRequestStore;
    }
  }
})

export const{addRequest,removeSlice,removeRequestUser} = requestSlice.actions

export default requestSlice.reducer