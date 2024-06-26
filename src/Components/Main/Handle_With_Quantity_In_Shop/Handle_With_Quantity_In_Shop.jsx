import { useDispatch, useSelector } from "react-redux";
import { selectQuantity, updateCartData } from "../../../RTK/Slices/cartSlice";
import { useEffect } from "react";
import { PropTypes } from "prop-types"

export const Handle_With_Quantity_In_Shop = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { userId } = useSelector(state => state.authReducer);
  const { cartItems } = useSelector(state => state.cartReducer);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    dispatch(selectQuantity({ id: cartItem.id, quantity: newQuantity }));
    dispatch(updateCartData({ id: userId, cart: [{ ...cartItem, productQuantity: newQuantity }] }));
  };

  useEffect(() => {
    
    dispatch(updateCartData({ id: userId, cart: cartItems }));
  }, [dispatch, userId, cartItems]); 

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

Handle_With_Quantity_In_Shop.propTypes = {
  cartItem: PropTypes.object
}