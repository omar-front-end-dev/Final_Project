import { Box, Drawer, IconButton, Stack, Typography } from "@mui/material";
import { useToggle } from "../../../../Hooks/useToggle";
import CloseIcon from "@mui/icons-material/Close";

import { useTheme } from "@emotion/react";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Header_Drawer_Cart_Content } from "./Header_Drawer_Cart_Content";
import { useDispatch, useSelector } from "react-redux";
import { removeAll } from "../../../../RTK/Slices/cartSlice";
export const Header_Drawer_Cart = () => {
  const theme = useTheme();
  const { state, toggleDrawer } = useToggle();
  const { cartItems } = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();

  return (
    <Box className="Drawer-cart">
      <LocalMallOutlinedIcon
        className="header-cart__icon"
        onClick={toggleDrawer("right", true)}
        style={{
          display: "flex",
          cursor: "pointer",
          fontSize: "23px",
          color: theme.palette.secondaryTextColor.main,
          transition: ".2s",
        }}
      />

      <Drawer anchor={"right"} open={state.right}>
        <Box
          sx={{
            width: { xs: "100%", sm: "540px" },
          }}
        >
          <Stack
            alignItems={"center"}
            direction={"row"}
            justifyContent={"space-between"}
            className="Drawer-cart__top"
            sx={{ py: "15px", px: "25px" }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography
                component={"span"}
                sx={{ fontWeight: "600", fontSize: "18px" }}
              >
                My Shopping Cart
              </Typography>
              <Typography
                sx={{ fontSize: "22px", color: theme.palette.ThirdColor.main }}
              >{`(${cartItems.length})`}</Typography>
            </Box>

            <Box>
              <IconButton
                onClick={toggleDrawer("right", false)}
                sx={{ "&:hover": { color: theme.palette.ThirdColor.main } }}
              >
                <CloseIcon className={"Close__Drawer"} />
              </IconButton>
            </Box>
          </Stack>

          <Box sx={{ display: cartItems.length == 0 ? "none" : "block"  }}>
            <Typography
              component={"span"}
              onClick={() => dispatch(removeAll())}
              sx={{
                cursor: "pointer",
                color: "#ba2026",
                fontWeight: "bold",
                textTransform: "uppercase",
                px: "25px",
                mb: "5px",
                textDecoration: "underLine",
              }}
            >
              REMOVE ALL
            </Typography>
          </Box>

          <Box className="Drawer-cart__content">
            <Header_Drawer_Cart_Content toggleDrawer={toggleDrawer} />
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};
