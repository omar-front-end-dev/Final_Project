import { Box, Typography } from "@mui/material";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";

export const Header_Drawer_Cart_Empty = () => {
    const theme = useTheme();
  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        pt: "100px",
      }}
    >
      <Box
        sx={{
          bgcolor: theme.palette.bgLightGrayColor.main,
          width: "70px",
          height: "70px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          mb: "20px",
        }}
      >
        <RemoveShoppingCartOutlinedIcon
          sx={{ fontSize: "30px", color: theme.palette.ThirdColor.main }}
        />
      </Box>
      <Typography
        component={"h5"}
        variant="h6"
        sx={{ fontWeight: "bold", mb: "40px" }}
      >
        CART IS EMPTY
      </Typography>
      <Typography
        component={"p"}
        variant="p"
        sx={{ textTransform: "capitalize", fontSize: "17px" }}
      >
        Please
        <Link
          to={"login"}
          className="header-cart__Link"
          style={{
            margin: "0 5px",
            fontWeight: "bold",
            color: theme.palette.secondaryColor.main,
            position: "relative",
          }}
        >
          SIGN IN
        </Link>
        to view your saved Cart.
      </Typography>
    </Box>
  );
};