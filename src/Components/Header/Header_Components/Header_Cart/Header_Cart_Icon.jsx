import { Badge } from "@mui/material";
import { Header_Drawer_Cart } from "./Header_Drawer_Cart";
import { useSelector } from "react-redux";
export const Header_Cart_Icon = () => {
  const  { cartItems } = useSelector(state => state.cartReducer);
  return (
    <Badge badgeContent={cartItems.length} color="error">
      <Header_Drawer_Cart />
    </Badge>
  );
};
