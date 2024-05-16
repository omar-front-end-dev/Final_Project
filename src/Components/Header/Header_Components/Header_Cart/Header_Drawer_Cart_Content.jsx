import { Box } from "@mui/material";
import { Header_Drawer_Cart_Empty } from "./Header_Drawer_Cart_Empty";
import { Header_Drawer_Cart_Items } from "./Header_Drawer_Cart_Items";
import { Header_Drawer_Cart_Info } from "./Header_Drawer_Cart_Info";
import { useSelector } from "react-redux";
import { PropTypes } from "prop-types"
export const Header_Drawer_Cart_Content = ({ toggleDrawer }) => {
  const { cartItems } = useSelector((state) => state.cartReducer);

  return (
    <Box sx={{px: "25px" }}>
      {cartItems.length == 0 ? (
        <Header_Drawer_Cart_Empty />
      ) : (
        <Box>
            {cartItems.map((cartItem, index) => {
              return <Header_Drawer_Cart_Items key={index} cartItem={cartItem} toggleDrawer={toggleDrawer} />
            })}
            <Header_Drawer_Cart_Info toggleDrawer={toggleDrawer}/>
        </Box>
      )}
    </Box>
  );
};


Header_Drawer_Cart_Content.propTypes = {
  toggleDrawer: PropTypes.func,
};