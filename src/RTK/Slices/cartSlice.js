import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
      body: JSON.stringify({cart: data.cart }),
    });
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { productId, productSize, productColor } = action.payload;
      const existingItem = state.cartItems.find(item => 
        item.productId === productId && 
        item.productSize === productSize && 
        item.productColor.default === productColor.default
      );
    
      if (existingItem) {
       
        state.cartItems = state.cartItems.map(item =>
          item.productId === productId && 
          item.productSize === productSize && 
          item.productColor.default === productColor.default
            ? { ...item, productQuantity: item.productQuantity + 1 }
            : item
        );
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id != action.payload
      );
    },
    removeAll: (state) => {
      state.cartItems = [];
    },
    selectQuantity: (state, action) => {
      const { productId } = action.payload;
      const itemToUpdate = state.cartItems.find(item => item.productId === productId);
      if (itemToUpdate) {
        const updatedCartItems = state.cartItems.map(item =>
          item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
        state.cartItems = updatedCartItems;
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCartData.fulfilled, (state, action) => {
      state.cartItems = action.payload.cart;
    });
  },
});

export const {
  addItem,
  removeItem,
  removeAll,
  selectQuantity
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
