import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cartItems: [],
};

export const getCartData = createAsyncThunk("cart/getCartData", async (id) => {
  const res = await fetch(`http://localhost:3000/users/${id}`);
  const data = await res.json();
  return data;
});
export const updateCartData = createAsyncThunk(
  "cart/updateCartData",
  async (data) => {
    await fetch("http://localhost:3000/users/" + data.id, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ cart: data.cart }),
    });
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { productId, productSize, productColor, productMaxQuantity } =
        action.payload;

      const existingItem = state.cartItems.find(
        (item) =>
          item.productId === productId &&
          item.productSize === productSize &&
          item.productColor.default === productColor.default
      );

      if (existingItem) {
        if (existingItem.productQuantity < productMaxQuantity) {
          toast.success(`The product has been added to the shopping cart`);
          state.allowedQuantity = existingItem.productQuantity + 1;
          state.cartItems = state.cartItems.map((item) =>
            item.productId === productId &&
            item.productSize === productSize &&
            item.productColor.default === productColor.default
              ? { ...item, productQuantity: item.productQuantity + 1 }
              : item
          );
        } else {
          toast.error(`You have reached the product limit`);
        }
      } else {
        state.cartItems.push(action.payload);
        toast.success(`The product has been added to the shopping cart`);
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id != action.payload
      );
      toast.success("This product has been deleted");
    },
    removeAll: (state) => {
      state.cartItems = [];
      toast.success("All cart list has been deleted");
    },
    selectQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const updatedCartItems = state.cartItems.map((item) =>
        item.id === id ? { ...item, productQuantity: quantity } : item
      );
      state.cartItems = updatedCartItems;
      toast.success(`The product quantity has been modified ${quantity}`);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartData.fulfilled, (state, action) => {
      state.cartItems = action.payload.cart;
    });
  },
});

export const { addItem, removeItem, removeAll, selectQuantity } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
