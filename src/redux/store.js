import { configureStore } from "@reduxjs/toolkit";
import counterSlice  from "./Counterslice";
import userSlice  from "./UserSlice";



// redux toolkit
export const store = configureStore({
  reducer: {
    counter_A:counterSlice,
    // here we can add multi reducers put (R1,R2,R3,.... )
    user:userSlice,
  },
})
