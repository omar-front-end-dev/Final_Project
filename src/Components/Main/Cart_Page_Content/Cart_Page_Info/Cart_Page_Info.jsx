import { useTheme } from "@emotion/react";
import { Box, Button, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useSelector } from "react-redux";

export const Cart_Page_Info = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const theme = useTheme();


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
        p: "20px",
        my: "15px",
        border: `1px solid #eee`,
        position: "sticky",
        top: "100px",
        width: "100%"
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
          sx={{ fontSize: "16px", fontWeight: "bold" }}
        >
          Item(s) total
        </Typography>
        <Typography
          component={"h6"}
          sx={{
            fontSize: "16px",
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
          sx={{ fontSize: {xs: "15px", sm: "19px"}, fontWeight: "bold" }}
        >
          Total shopping cost
        </Typography>
        <Typography
          component={"h6"}
          sx={{
            fontSize: {xs: "15px", sm: "19px"},
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
      <Button
        className="cart-drawer__secure-checkout"
        sx={{
          width: "100%",
          bgcolor: theme.palette.ThirdColor.main,
          p: "10px 0",
          color: "#fff",
          fontSize: "16px",
          fontWeight: "bold",
          textTransform: "uppercase",
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: "13px",
        }}
      >
        <LockOutlinedIcon sx={{ color: "#fff" }} />
        Secure checkout
      </Button>
    </Box>
  );
};
