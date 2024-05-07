import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ProductApi } from "./Slices/product";
import { authReducer } from "./Slices/authSlice";
import { cartReducer } from "./Slices/cartSlice";
import { singleProductImagesReducer } from "./Slices/singleProductSlice";
import { favoriteReducer } from "./Slices/favoriteSlice"

export const store = configureStore({
  reducer: {
    [ProductApi.reducerPath]: ProductApi.reducer,
    authReducer,
    cartReducer,
    singleProductImagesReducer,
    favoriteReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware),
});

setupListeners(store.dispatch);
