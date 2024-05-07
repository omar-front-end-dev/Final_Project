import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useGetData } from "../../Hooks/useGetData";
import { useTheme } from "@emotion/react";
import { Single_Product_Info, Single_Product_Content, Bread_Crumbs, Is_Loading } from "../../Components/Main/index"

export const Single_Product = () => {
  const { gender, category, productId } = useParams();
  const { dataName, isLoading } = useGetData(
    `products?gender=${gender}&category=${category}&id=${productId}`
  );
  const [product, setProduct] = useState({});
  const theme = useTheme();
  const pathName = [
    { linkName: `${gender}`, linkTo: `/shopping/${gender}` },
    { linkName: `${category}`, linkTo: `/shopping/${gender}/${category}` },
    { linkName: `${product?.title}`, linkTo: `/${category}` },
  ];

  useEffect(() => {
    setProduct(dataName[0]);
  }, [dataName, setProduct]);

  return (
    <Box
      className="single-product__page"
      sx={{ py: theme.palette.sectionPadding.main }}
    >
      <Container maxWidth="xl">
        {isLoading ? (
          <Is_Loading />
        ) : (
          <>
            <Box>
              <Bread_Crumbs pathName={pathName} />
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={8}>
                <Single_Product_Content product={product} />
              </Grid>
              <Grid item xs={12} lg={4}>
                <Single_Product_Info product={product} />
              </Grid>
            </Grid>
            <Box
              className="single-product__story"
              sx={{
                py: theme.palette.sectionPadding.main,
                color: theme.palette.firstColor.main,
                mx: "auto",
                width: { xs: "100%", md: "90%" },
              }}
            >
              <Typography
                component={"h5"}
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  mb: "20px",
                  color: theme.palette.firstColor.main,
                }}
              >
                Product Story
              </Typography>
              <Typography
                component={"p"}
                variant="p"
                sx={{ fontSize: { xs: "16px", md: "20px" } }}
              >
                {product?.description}
              </Typography>
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
};
