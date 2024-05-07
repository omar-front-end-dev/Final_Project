import { useTheme } from "@emotion/react";
import { Box, IconButton, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { BsTrash3 } from "react-icons/bs";
import { removeFromFavorite } from "../../../../RTK/Slices/favoriteSlice"


export const Favorite_Page_Items = ({ favoriteItem }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
  
    const removeFromFavoriteHandler = (id) => {
      dispatch(removeFromFavorite(id));
    };
  
    return (
      <Box
        className="header-drawer-cart-items"
        sx={{
          width: "100%",
          my: "15px",
          p: "20px",
          border: `1px solid #eee`,
          display: "flex",
          justifyContent: "space-between",
          gap: 3,
          flexDirection: {xs: "column", md: "row"},
        }}
      >
        <Box className="header-drawer-cart-items__image" sx={{textAlign: "center"}}>
          <Link
            to={`/${favoriteItem.productGender}/${favoriteItem.productCategory}/products/${favoriteItem.productId}`}
          >
            <img
              style={{ width: "230px",}}
              src={favoriteItem.productColor.default}
              alt="title"
            />
          </Link>
        </Box>
  
        <Box className="header-drawer-cart-items__content" sx={{ flexGrow: 1 }}>
          <Typography
            component={"h6"}
            sx={{ fontSize: "17px", fontWeight: "bold", mb: "5px" }}
          >
            {favoriteItem.productTitle}
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
                  display: favoriteItem.productSale ? "block" : "none",
                }}
              >
                EGP {favoriteItem.productSale * favoriteItem.productQuantity.toFixed(3)}
              </Typography>
  
              <Typography
                component={"p"}
                variant="p"
                sx={{
                  fontWeight: "bold",
                  color: favoriteItem.productSale
                    ? "#666"
                    : theme.palette.ThirdColor.main,
                  textDecoration: favoriteItem.productSale ? "line-through" : "none",
                  fontSize: favoriteItem.productSale ? "14px" : "16px",
                }}
              >
                EGP {favoriteItem.productPrice * favoriteItem.productQuantity}
              </Typography>
            </Box>
  
            <IconButton onClick={() => removeFromFavoriteHandler(favoriteItem.id)}>
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
            sx={{ fontSize: "14px", mb: "10px" }}
          >
            Size{" "}
            <strong style={{ marginLeft: "5px", textTransform :"uppercase" }}>{favoriteItem.productSize}</strong>
          </Typography>
        </Box>
      </Box>
    );
  };

  Favorite_Page_Items.propTypes = {
    favoriteItem: PropTypes.object
  }