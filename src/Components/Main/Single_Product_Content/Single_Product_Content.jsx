import { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useToggle } from "../../../Hooks/useToggle";
import { Single_Product_Content_Slides } from "../Single_Product_Content_Slides/Single_Product_Content_Slides";
import { Single_Product_Content_Slider } from "../Single_Product_Content_Slider/Single_Product_Content_Slider";
import { Video_Player } from "../Video_Player/Video_Player";
import { useSelector } from "react-redux";

export const Single_Product_Content = ({ product }) => {
  const [productImages, setProductImages] = useState([]);
  const  { indexImages } = useSelector(state => state.singleProductImagesReducer );

  const { state, toggleDrawer } = useToggle();
  const [indexImage, setIndexImage] = useState(0);

  useEffect(() => {
    if (product && product.images) {
      setProductImages(product.images[indexImages].imagesGroup);
    }
  }, [indexImages, product]);

  const combinedFunction = (index) => {
    setIndexImage(index);
    toggleDrawer("bottom", true)();
  };

  const price = product?.price;
  const sale = product?.sale;

  const total = ((sale / price) - 1) * 100





  return (
    <Box className="single-product-content" sx={{ position: "relative" }}>
      {product?.sale ? <Typography
        component={"span"}
        sx={{
          position: "absolute",
          top: "15px",
          bgcolor: "#ba2026",
          color: "#fff",
          fontSize: "10px",
          p: "1.5px 10px",
          zIndex: "10"
        }}
      >
        {`${Math.ceil(total)}%`}
      </Typography> : false}
      <Box sx={{ display: { xs: "none", lg: "block" } }}>
        <Grid container columnSpacing={1}>
          {productImages.map((Url, index) => (
            <Grid
              sx={{ cursor: "pointer" }}
              key={index}
              item
              xs={12}
              md={6}
              onClick={() => combinedFunction(index)}
            >
              {Url.includes("videos") ? (
                <Video_Player urlVideo={Url} />
              ) : (
                <img style={{width: "100%"}} src={Url} alt={`Product Image ${index + 1}`} />
              )}
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ display: { xs: "block", lg: "none" } }}>
        <Single_Product_Content_Slides
          productImages={productImages}
          combinedFunction={combinedFunction}
        />
      </Box>

      <Box>
        <Single_Product_Content_Slider
          productImages={productImages}
          toggleDrawer={toggleDrawer}
          state={state}
          indexImage={indexImage}
        />
      </Box>
    </Box>
  );
};

Single_Product_Content.propTypes = {
  product: PropTypes.object,
};
