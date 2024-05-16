import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState = {
  favoriteItems: [],
  favoriteState: null,
};


export const getFavoriteData = createAsyncThunk("favorite/getFavoriteData", async (id) => {
  const res = await fetch(`http://localhost:3000/users/${id}`);
  const data = await res.json();
  return data;
});

export const updateFavoriteData = createAsyncThunk(
  "favorite/updateFavoriteData",
  async (data) => {
    await fetch("http://localhost:3000/users/" + data.id, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ favorites: data.favorites }),
    });
  }
);

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addItemToFavorite: (state, action) => {
      const { productId, productSize, productColor } = action.payload;
      const existingItem = state.favoriteItems.find(
        (item) =>
          item.productId === productId &&
          item.productSize === productSize &&
          item.productColor.default === productColor.default
      );

      if (existingItem) {
        state.favoriteState = false;
        toast.error("This product is already in your favorite list")
      }else{
        state.favoriteState = true;
        state.favoriteItems.push(action.payload);
        toast.success("This product has been added to favorite list")
      }
      
    },
    removeFromFavorite: (state, action) => {
      state.favoriteItems = state.favoriteItems.filter(
        (item) => item.id != action.payload
      );
      toast.error("This product has been deleted from the favorites list");
    },
    removeAllFromFavorite: (state) => {
      state.favoriteItems = [];
      toast.error("All favorites list has been deleted");
    },
    resetFavoriteState: (state, action) =>{
      state.favoriteState = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getFavoriteData.fulfilled, (state, action) => {
      state.favoriteItems = action.payload.favorites;
    });
  },
});

export const { addItemToFavorite, removeFromFavorite, removeAllFromFavorite, resetFavoriteState } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
