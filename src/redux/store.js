import { configureStore } from "@reduxjs/toolkit";
import counterSlice  from "./Counterslice";



// redux toolkit
export const store = configureStore({
  reducer: {
    counter_A:counterSlice,
  },
})
