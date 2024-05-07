import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useTheme } from "@emotion/react";
import { Lazy_Image } from "../Lazy_Image/Lazy_Image";
export const Card_Item = ({ product }) => {

  const price = product?.price;
  const sale = product?.sale;

  const total = ((sale / price) - 1) * 100

  const theme = useTheme();
  return (
    <Box style={{ position: "relative" }}>
      {product.sale ? (
        <Typography
          component={"span"}
          sx={{
            position: "absolute",
            top: "15px",
            left: "0",
            bgcolor: "#ba2026",
            color: "#fff",
            fontSize: "10px",
            p: "1.5px 10px",
          }}
        >
          {Math.ceil(total)}%
        </Typography>
      ) : (
        false
      )}
      <Link to={`${product.gender}/${product.category}/products/${product.id}`}>
        <Lazy_Image src={product.thumbnail} alt={product.title} />
        <Stack
          sx={{
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            p: { xs: "0", md: "10px" },
          }}
        >
          <Typography
            component={"h6"}
            sx={{
              flexBasis: { xs: "100%", md: "65%" },
              color: theme.palette.firstColor.main,
              fontSize: { xs: "13px", sm: "15px", md: "15px" },
              fontWeight: "bold",
              mb: { xs: "10px", md: "0" },
            }}
          > 
            {product.title.slice(0, 35)}{product.title.length < 35 ? "" : "...."}
          </Typography>
          <Box
            component={"div"}
            sx={{
              flexBasis: { xs: "100%", md: "30%" },
            }}
          >
            <Typography
              component={"p"}
              sx={{
                color: "#ba2026",
                fontSize: { xs: "14px", md: "15px" },
                fontWeight: "bold",
                display: product?.sale ? "block" : "none"
              }}
            >
              EGP {product.sale}
            </Typography>
            <Typography
              component={"p"}
              sx={{
                color: product.sale ? "#666" : theme.palette.ThirdColor.main,
                fontSize: { xs: "14px", md: "15px" },
                fontWeight: product.sale ? "light" : "bold",
                textDecoration: product.sale ? "line-through" : "none"
              }}
            >
              EGP {product.price}
            </Typography>
          </Box>
        </Stack>
      </Link>
    </Box>
  );
};

Card_Item.propTypes = {
  product: PropTypes.object,
};
