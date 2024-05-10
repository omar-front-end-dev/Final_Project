import { useTheme } from "@emotion/react";
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { BsTrash3 } from "react-icons/bs";
import { PropTypes } from "prop-types";
import { useDispatch } from "react-redux";
import { removeItem } from "../../../../RTK/Slices/cartSlice";
import { Handle_With_Quantity_In_Shop } from "../../../Main/index";

export const Header_Drawer_Cart_Items = ({ cartItem, toggleDrawer }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const removeItemHandler = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <Box
      className="header-drawer-cart-items"
      sx={{
        my: "15px",
        p: "20px",
        border: `1px solid #eee`,
        display: "flex",
        justifyContent: "space-between",
        gap: 3,
      }}
    >
      <Box className="header-drawer-cart-items__image">
        <Link
          onClick={toggleDrawer("right", false)}
          to={`/${cartItem.productGender}/${cartItem.productCategory}/products/${cartItem.productId}`}
        >
          <img
            style={{ width: "85px" }}
            src={cartItem.productColor.default}
            alt="title"
          />
        </Link>
      </Box>

      <Box className="header-drawer-cart-items__content" sx={{ flexGrow: 1 }}>
        <Typography
          component={"h6"}
          sx={{ fontSize: "15px", fontWeight: "bold", mb: "5px" }}
        >
          {cartItem.productTitle}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: "5px",
          }}
        >
          <Box>
            <Typography
              component={"p"}
              variant="p"
              sx={{
                fontWeight: "bold",
                color: "#ba2026",
                display: cartItem.productSale ? "block" : "none",
              }}
            >
              EGP {cartItem.productSale * cartItem.productQuantity}
            </Typography>

            <Typography
              component={"p"}
              variant="p"
              sx={{
                fontWeight: "bold",
                color: cartItem.productSale
                  ? "#666"
                  : theme.palette.ThirdColor.main,
                textDecoration: cartItem.productSale ? "line-through" : "none",
                fontSize: cartItem.productSale ? "14px" : "16px",
              }}
            >
              EGP {cartItem.productPrice * cartItem.productQuantity}
            </Typography>
          </Box>

          <IconButton onClick={() => removeItemHandler(cartItem.id)}>
            <BsTrash3
              style={{
                color: theme.palette.secondaryColor.main,
                fontSize: "18px",
              }}
            />
          </IconButton>
        </Box>
        <Typography
          component={"p"}
          variant="p"
          sx={{ fontSize: "14px", mb: "10px",}}
        >
          Size{" "}
          <strong style={{ marginLeft: "5px", textTransform :"uppercase" }}>{cartItem.productSize}</strong>
        </Typography>

        <Handle_With_Quantity_In_Shop cartItem={cartItem} />
      </Box>
    </Box>
  );
};

Header_Drawer_Cart_Items.propTypes = {
  cartItem: PropTypes.object,
  toggleDrawer: PropTypes.func,
};
