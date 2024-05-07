import { Box, Stack, Typography } from "@mui/material";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import { Shopping_Page_Card_Slider } from "./Shopping_Page_Card_Components/Shopping_Page_Card_Slider";
import "./Shopping_Page_Card.css"
import { Shopping_Page_Card_Slides } from "./Shopping_Page_Card_Components/Shopping_Page_Card_Slides";
export const Shopping_Page_Card = ({ product }) => {
  const theme = useTheme();
  const [imagesIndex, setImagesIndex] = useState(0);
  const price = product?.price;
  const sale = product?.sale;

  const total = (sale / price - 1) * 100;


  const clickImageHandler = (index) =>{
    setImagesIndex(index)
  }

  return (
    <Box className="card" style={{ position: "relative" }}>
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
            zIndex: "100",
          }}
        >
          {Math.ceil(total)}%
        </Typography>
      ) : (
        false
      )}
    <Link to={`/${product.gender}/${product.category}/products/${product.id}`} style={{}}>

      <Box>
        <Shopping_Page_Card_Slider
          images={product.images[imagesIndex].imagesGroup}
        />
      </Box>
    </Link>

      <Box>
       <Shopping_Page_Card_Slides clickImageHandler={clickImageHandler} smallImages={product.images} imagesIndex={imagesIndex}/>
      </Box>
      <Link
        to={`/${product.gender}/${product.category}/products/${product.id}`}
      >
        <Stack
          sx={{
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            p: { xs: "0", md: "5px" },
          }}
        >
          <Typography
            component={"h6"}
            sx={{
              flexBasis: { xs: "100%", md: "65%" },
              color: theme.palette.firstColor.main,
              fontSize: { xs: "13px", sm: "15px" },
              fontWeight: "600",
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
                display: product?.sale ? "block" : "none",
              }}
            >
              EGP {product.sale}
            </Typography>
            <Typography
              component={"p"}
              sx={{
                color: product.sale ? "#666" : theme.palette.ThirdColor.main,
                fontSize: product.sale
                  ? { xs: "13px", md: "14px" }
                  : { xs: "14px", md: "15px" },
                fontWeight: product.sale ? "light" : "bold",
                textDecoration: product.sale ? "line-through" : "none",
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

Shopping_Page_Card.propTypes = {
  product: PropTypes.object,
};
