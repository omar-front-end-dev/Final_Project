import { useDispatch, useSelector } from "react-redux";
import { selectQuantity, updateCartData } from "../../../../RTK/Slices/cartSlice";
import { useEffect } from "react";
import { PropTypes } from "prop-types"

export const QuantityHandling = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { userId } = useSelector(state => state.authReducer);
  const { cartItems } = useSelector(state => state.cartReducer); // Add cartItems from the Redux store

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    dispatch(selectQuantity({ productId: cartItem.productId, quantity: newQuantity }));
    dispatch(updateCartData({ id: userId, cart: [{ ...cartItem, productQuantity: newQuantity }] }));
  };

  useEffect(() => {
    // Update cart data in the API when cartItems change
    dispatch(updateCartData({ id: userId, cart: cartItems }));
  }, [dispatch, userId, cartItems]); // Add cartItems to the dependency array

  return (
    <select
      value={cartItem.productQuantity}
      onChange={handleQuantityChange}
      style={{
        padding: "10px 12px",
        fontSize: "16px",
        flexBasis: "10%",
        border: "1px solid #eee",
        cursor: "pointer",
      }}
    >
      {[...Array(cartItem.productMaxQuantity).keys()].map((index) => (
        <option key={index} value={index + 1}>
          {index + 1}
        </option>
      ))}
    </select>
  );
};

QuantityHandling.propTypes = {
  cartItem: PropTypes.object
}