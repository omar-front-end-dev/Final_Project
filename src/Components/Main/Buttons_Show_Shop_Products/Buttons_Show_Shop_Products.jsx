import { Box, Button } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@emotion/react";
import { PropTypes } from "prop-types";

export const Buttons_Show_Shop_Products = ({
  products,
  productsSlicing,
  setProductsSlicing,
}) => {
  const theme = useTheme();

  const showProductsButtonHandler = () => {
    if (productsSlicing.length !== products.length) {
      setProductsSlicing(products.slice(0, products.length));
    } else {
      setProductsSlicing(products.slice(0, 12));
    }
  };

  const showNext12Products = () => {
    if (productsSlicing.length + 12 < products.length) {
      setProductsSlicing(products.slice(0, productsSlicing.length + 12));
    } else {
      setProductsSlicing(products.slice(0, products.length));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "center",
        my: "40px",
        gap: 3,
      }}
    >
      <Button
        onClick={showNext12Products}
        sx={{
          display: productsSlicing.length !== products.length ? "flex" : "none",
          bgcolor: theme.palette.secondaryTextColor.main,
          border: "1px solid #ccc",
          borderRadius: "1px",
          p: "7px 40px",
          fontSize: "15px",
          color: theme.palette.firstColor.main,
          "&:hover": {
            bgcolor: theme.palette.secondaryTextColor.main,
            border: `1px solid ${theme.palette.firstColor.main}`,
          },
          fontWeight: "bold",
          gap: 1,
        }}
      >
        {products.length - productsSlicing.length >= 12 ? "Show 12 more" : `Show ${products.length - productsSlicing.length} more`}
        <ExpandMoreIcon />
      </Button>
      <Button
        onClick={showProductsButtonHandler}
        sx={{
          display: productsSlicing.length >= 12 ? "flex" : "none",
          bgcolor: theme.palette.ThirdColor.main,
          borderRadius: "1px",
          p: "7px 40px",
          fontSize: "15px",
          color: theme.palette.secondaryTextColor.main,
          "&:hover": {
            bgcolor: "#cab08a",
            color: theme.palette.firstColor.main,
          },
          fontWeight: "bold",
          gap: 1,
        }}
      >
        {productsSlicing.length !== products.length
          ? `Show all ( ${products.length - productsSlicing.length} ) `
          : "Shows less"}
        {productsSlicing.length !== products.length ? (
          <ExpandMoreIcon />
        ) : (
          <KeyboardArrowUpIcon />
        )}
      </Button>
    </Box>
  );
};

Buttons_Show_Shop_Products.propTypes = {
  products: PropTypes.array,
  productsSlicing: PropTypes.array,
  setProductsSlicing: PropTypes.func,
};
