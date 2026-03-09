import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name:'user', //slice Name
 initialState:{ // state and initial valu 
  name:"hesham",
   email:"heshamAbdulaziz@gmail.com",
},
  reducers: {
    addUser:(state,action)=>{
      state.name=action.payload;
      state.email=action.payload;
    
    }
  },
})

// Action creators are generated for each case reducer function
export const{addUser}=userSlice.actions
export default userSlice.reducer

