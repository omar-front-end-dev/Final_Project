import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { PropTypes } from "prop-types"

export const Header_Drawer_Cart_Info = ({ toggleDrawer }) => {
  const theme = useTheme();
  const { cartItems } = useSelector((state) => state.cartReducer);

  const Calculate_Shopping_Cost = (cost) => {
    const totalCosts = cartItems
      .reduce((accumulator, currentValue) => {
        const productPrice = currentValue.productSale
          ? parseFloat(currentValue.productSale)
          : parseFloat(currentValue.productPrice);
        return accumulator + productPrice * currentValue.productQuantity;
      }, cost)
      .toFixed(3);

    return totalCosts;
  };

  return (
    <Box
      sx={{
        bgcolor: theme.palette.secondaryTextColor.main,
        position: "sticky",
        bottom: "0px",
        width: "100%",
        py: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: "10px",
        }}
      >
        <Typography component={"p"} sx={{ fontSize: "16px" }}>
          Shipping costs
        </Typography>
        <Typography component={"p"} sx={{ fontSize: "16px" }}>
          EGP 100.00
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          component={"h6"}
          sx={{ fontSize: "17px", fontWeight: "bold" }}
        >
          Item(s) total
        </Typography>
        <Typography
          component={"h6"}
          sx={{
            fontSize: "17px",
            fontWeight: "bold",
            color: theme.palette.ThirdColor.main,
          }}
        >
          EGP {Calculate_Shopping_Cost(0)}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: "5px",
        }}
      >
        <Typography
          component={"h6"}
          sx={{ fontSize: "19px", fontWeight: "bold" }}
        >
          Total shopping product prices
        </Typography>
        <Typography
          component={"h6"}
          sx={{
            fontSize: "19px",
            fontWeight: "bold",
            color: "#ba2026",
          }}
        >
          EGP {Calculate_Shopping_Cost(0.1)}
        </Typography>
      </Box>
      <Typography
        component={"p"}
        sx={{ color: theme.palette.ThirdColor.main, mb: "10px" }}
      >
        Taxes and Duties are added on checkout
      </Typography>
        <Link
          className="cart-drawer__secure-checkout"
          onClick={toggleDrawer("right", false)}
          style={{
            width: "100%",
            backgroundColor: theme.palette.ThirdColor.main,
            padding: "12px 0",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bold",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            transition: ".3s",
            justifyContent :"center",
            gap: 1,
            margin: "13px 0",
            borderRadius: "2px"
          }}
          to={"/account/payment-page"}
        >
          <LockOutlinedIcon />
          Secure checkout
        </Link>
      <Box sx={{ textAlign: "center" }}>
        <Link
          className="cart-drawer__link"
          to={"cart-page"}
          style={{
            textTransform: "uppercase",
            fontSize: "14px",
            color: theme.palette.secondaryColor.main,
            fontWeight: "bold",
            position: "relative",
          }}
        >
          view cart
        </Link>
      </Box>
    </Box>
  );
};

Header_Drawer_Cart_Info.propTypes = {
  toggleDrawer: PropTypes.func,
}