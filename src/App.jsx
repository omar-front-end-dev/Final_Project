import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartData, updateCartData } from "./RTK/Slices/cartSlice";
import { Toaster } from "react-hot-toast";
import { Box } from "@mui/material";
import {
  getFavoriteData,
  updateFavoriteData,
} from "./RTK/Slices/favoriteSlice";
import {
  Shopping_By_Shop_Types_Page,
  Shopping_By_ShopTypes_And_Categories_Page,
  Home,
  Favorite_Products,
  Cart_Page,
  Authentication_Page,
  Single_Product,
} from "./Pages/index";

function App() {
  const { isAuth, userId } = useSelector((state) => state.authReducer);
  const { cartItems } = useSelector((state) => state.cartReducer);
  const { favoriteItems } = useSelector((state) => state.favoriteReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) dispatch(getCartData(userId));
    dispatch(getFavoriteData(userId));
  }, [dispatch, isAuth, userId]);

  useEffect(() => {
    if (userId && cartItems.length > 0) {
      dispatch(updateCartData({ id: userId, cart: cartItems }));
    }
  }, [dispatch, userId, cartItems]);

  useEffect(() => {
    if (userId && favoriteItems.length > 0) {
      dispatch(updateFavoriteData({ id: userId, favorites: favoriteItems }));
    }
  }, [dispatch, userId, favoriteItems, cartItems]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="favorites" element={<Favorite_Products />} />
        <Route
          path="/:gender/:category/products/:productId"
          element={<Single_Product />}
        />
        <Route
          path="account/:authenticationType"
          element={<Authentication_Page />}
        />
        <Route path="cart-page" element={<Cart_Page />} />
        <Route
          path={`shopping/:shoppingType`}
          element={<Shopping_By_Shop_Types_Page />}
        />
        <Route
          path={`shopping/:shoppingType/:category`}
          element={<Shopping_By_ShopTypes_And_Categories_Page />}
        />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <Box
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
          textTransform: "capitalize",
        }}
      >
        <Toaster position="top-center" />
      </Box>
    </>
  );
}

export default App;
