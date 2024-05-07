import { Box } from "@mui/material";
import { Cart_Page_Empty } from "./Cart_Page_Empty/Cart_Page_Empty";
import { Cart_Page_Items } from "./Cart_Page_Items/Cart_Page_Items";
import { Cart_Page_Info } from "./Cart_Page_Info/Cart_Page_Info";
import { useSelector } from "react-redux";


 
export const Cart_Page_Content = () => {
    const  { cartItems } = useSelector(state => state.cartReducer);

     
  return (
    <Box>
      
        {cartItems.length == 0 ? (
        <Cart_Page_Empty/>
      ) : (

        <Box sx={{display: "flex", justifyContent: "space-between", flexWrap: "wrap", flexDirection: {xs: "column", md: "row"}}}>

            <Box sx={{width: {xs: "100%", lg: "50%"}}}>
                {cartItems.map((cartItem, index) => {
                  return <Cart_Page_Items key={index} cartItem={cartItem} />
                })}
            </Box>
            <Box sx={{width: {xs: "100%", lg: "40%"}}}>
            <Cart_Page_Info />
            </Box>
        </Box>
      )}
    </Box>
  )
}


