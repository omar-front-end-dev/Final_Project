import { Box } from "@mui/material";
import {
  setIndexImages,
  setIndexSize,
} from "../../../RTK/Slices/singleProductSlice";
import { addItem, updateCartData } from "../../../RTK/Slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import toast from "react-hot-toast";
import {
  addItemToFavorite,
  updateFavoriteData,
  resetFavoriteState,
} from "../../../RTK/Slices/favoriteSlice";
import {
  Single_Product_Info_Accordion,
  Single_Product_Info_Bottom,
  Single_Product_Info_Middle,
  Single_Product_Info_Size,
  Single_Product_Info_Top,
} from "../index";

export const Single_Product_Info = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const [sizeStatus, setSizeStatus] = useState(true);
  const { isAuth, userId } = useSelector((state) => state.authReducer);
  const { cartItems } = useSelector((state) => state.cartReducer);
  const { favoriteItems, favoriteState } = useSelector(
    (state) => state.favoriteReducer
  );
  const navigate = useNavigate();

  const [dataObj, setDataObj] = useState({
    productStock: "",
    productId: "",
    productTitle: "",
    productColor: "",
    productSize: "",
    productSale: null,
    productPrice: 0,
    productQuantity: 1,
    productGender: "",
    productCategory: "",
    productMaxQuantity: "",
    id: "",
  });

  useEffect(() => {
    if (location) {
      dispatch(setIndexImages(0));
      dispatch(setIndexSize(null));
      dispatch(resetFavoriteState(null));
    }
  }, [dispatch, location]);

  useEffect(() => {
    if (product?.size?.length == 1) {
      dispatch(setIndexSize(0));
    }
  }, [dispatch, product?.size?.length]);

  useEffect(() => {
    if (product?.stock < 30) {
      setQuantity(1);
    } else if (product?.stock < 40) {
      setQuantity(2);
    } else if (product?.stock < 50) {
      setQuantity(3);
    } else if (product?.stock < 70) {
      setQuantity(5);
    } else {
      setQuantity(9);
    }
  }, [product?.stock]);

  function generateUniqueId(existingIds, length = 8) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";

    do {
      for (let i = 0; i < length; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
      }
    } while (existingIds.includes(id));

    return id;
  }
  const existingIds = ["abc123", "def456", "ghi789"];

  const newId = generateUniqueId(existingIds);

  useEffect(() => {
    if (
      product &&
      product.title &&
      product.images &&
      product.images.length > 0
    ) {
      setDataObj((prevCartData) => ({
        ...prevCartData,
        productId: product.id,
        productTitle: product.title,
        productColor: product.images[0],
        productStock: product.stock,
        productPrice: product.price,
        productSale: product.sale,
        productGender: product.gender,
        productCategory: product.category,
        productMaxQuantity: quantity,
        id: newId,
        productSize: product.size.length == 1 ? product.size[0] : "",
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product, quantity, cartItems, favoriteItems]);

  const addToCartHandler = () => {
    if (dataObj.productSize !== "") {
      setSizeStatus(true);

      if (isAuth) {
        dispatch(updateCartData({ id: userId, cart: cartItems }));
        dispatch(addItem(dataObj));
        toast.success(`The product has been added to the shopping cart`);
      } else {
        toast.error("You must have an account or log in");
        const navigateInterval = setInterval(() => {
          navigate("/account/login");
          clearInterval(navigateInterval);
        }, 4000);
      }
    } else {
      setSizeStatus(false);
      toast.error("Please select size");
    }
  };

  const handlerAddToFavorites = () => {
    if (dataObj.productSize !== "") {
      setSizeStatus(true);
      if (isAuth) {
        dispatch(updateFavoriteData({ id: userId, favorites: favoriteItems }));
        dispatch(addItemToFavorite(dataObj));
      } else {
        toast.error("You must have an account or log in");
        const navigateInterval = setInterval(() => {
          navigate("/account/login");
          clearInterval(navigateInterval);
        }, 4000);
      }
    } else {
      setSizeStatus(false);
      toast.error("Please select size");
    }
  };

  useEffect(() => {
    dispatch(updateCartData({ id: userId, cart: cartItems }));
  }, [dispatch, userId, cartItems]);

  useEffect(() => {
    if (favoriteItems.length !== 0) {
      dispatch(updateFavoriteData({ id: userId, favorites: favoriteItems }));
    }
  }, [dispatch, userId, favoriteItems]);

  return (
    <Box sx={{ position: "sticky", top: "75px" }}>
      <Box>
        <Single_Product_Info_Top
          title={product?.title}
          price={product?.price}
          sale={product?.sale}
        />
      </Box>
      <Box sx={{ py: "15px" }}>
        <Single_Product_Info_Middle
          images={product?.images}
          setDataObj={setDataObj}
        />
      </Box>

      <Box sx={{ py: "15px" }}>
        <Single_Product_Info_Size
          stock={product?.stock}
          size={product?.size}
          setDataObj={setDataObj}
          sizeStatus={sizeStatus}
          setSizeStatus={setSizeStatus}
        />
        <Box sx={{ mb: "30px" }}>
          <Single_Product_Info_Bottom
            favoriteState={favoriteState}
            setDataObj={setDataObj}
            quantity={quantity}
            addToCartHandler={addToCartHandler}
            handlerAddToFavorites={handlerAddToFavorites}
          />
        </Box>
      </Box>
      <Box>
        <Single_Product_Info_Accordion description={product?.description} />
      </Box>
    </Box>
  );
};

Single_Product_Info.propTypes = {
  product: PropTypes.object,
};
