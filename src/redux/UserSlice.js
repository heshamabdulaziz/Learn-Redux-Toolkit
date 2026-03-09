import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user', //slice Name
 initialState:{ // state and initial valu 
  name:"",
   email:"",
},
  reducers: {

    decrement:(state)=>{state.count-=1},
    // get date from inputs
    incrementByAmount:(state,action)=>{state.count+=action.payload},
     incrementByInputValue:(state,action)=>{state.count+=action.payload},
     reset:(state,action)=>{state.count=action.payload}
    
  },
})

// Action creators are generated for each case reducer function
export const{increment,decrement,incrementByAmount, incrementByInputValue,reset}=userSlice.actions
export default userSlice.reducer

