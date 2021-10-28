import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [" Model S", "Model 3", "Model X", " Model Y"],
};

const carSlice = createSlice({
  name: "car",    /* slice */
  initialState,
  reducers: {},
});




export const selectCars = state => state.car.cars 


export default carsSlice.reducer