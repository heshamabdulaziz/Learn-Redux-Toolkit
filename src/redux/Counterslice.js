import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
  name: 'counter', //slice Name
 initialState:{ // state and initial valu 
  count:0,
  name:'Laptop'
},
  reducers: {
    increment:(state)=>{
     state.count+=1
     console.log(state.count)
    
    }
    ,
    decrement:(state)=>{state.count-=1},
    // get date from inputs
    incrementByAmount:(state,action)=>{state.count+=action.payload},
     incrementByInputValue:(state,action)=>{state.count+=action.payload},
     reset:(state,action)=>{state.count=action.payload}
    
  },
})

// Action creators are generated for each case reducer function
export const{increment,decrement,incrementByAmount, incrementByInputValue,reset}=counterSlice.actions
export default counterSlice.reducer

