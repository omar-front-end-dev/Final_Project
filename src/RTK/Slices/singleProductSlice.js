import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  indexImages: 0,
  indexSize: null,
};


const singleProductSlice = createSlice({
  name: "singleProductImages",
  initialState,
  reducers: {
    setIndexImages: (state, action) => {
      state.indexImages = action.payload;
    },
    setIndexSize: (state, action) => {
      state.indexSize = action.payload;
    },
   
  },
});

export const { setIndexImages, setIndexSize} = singleProductSlice.actions;
export const singleProductImagesReducer = singleProductSlice.reducer;
