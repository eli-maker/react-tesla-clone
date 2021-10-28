import { configureStore } from '@reduxjs/toolkit';
import carReducer from "../features/car/carSlice"

export const store = configureStore({
  reducer: {
     car: carReducer
  },
}); 

/* thats pretty much all you have to do o redux,  the store,  you tell what reducers you have   */ 