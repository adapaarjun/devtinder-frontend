import { createSlice } from "@reduxjs/toolkit";


const connectionSlice = createSlice({
  name:'Connection Slice',
  initialState:{
    connections: []
  },
  reducers:{
    addConnection : (state,actions)=>{
          state.connections = actions.payload
    },
    removeConnection : (state)=>{
            state.connections = []
    }
  }
})


export const {addConnection,removeConnection} = connectionSlice.actions

export default connectionSlice.reducer