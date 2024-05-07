import { Link } from "react-router-dom";
import { Lazy_Image } from "../Lazy_Image/Lazy_Image";
import { Box, Container, Grid, Typography } from "@mui/material";
import { PropTypes } from "prop-types";
import { useTheme } from "@emotion/react";
import { Main_Button } from "../Main_Button/Main_Button";
import { Is_Loading } from "../Is_Loading/Is_Loading";

export const New_Fashion_Section = ({ newFashionData, isLoading }) => {
  const theme = useTheme();
  return (
    <Box>
      <Container maxWidth="xl" sx={{ px: { xs: 0, md: "24px" } }}>
        <Grid container rowSpacing={0} columnSpacing={0}>
          {isLoading ? (
            <Is_Loading />
          ) : (
            <>
              {newFashionData.map((product) => {
                return (
                  <Grid
                    key={product.id}
                    item
                    md={4}
                    xs={12}
                    sx={{ mb: { xs: "20px", lg: "0" } }}
                  >
                    <Link
                      style={{ display: "block", fontSize: "0px" }}
                      to={`${product.gender}/${product.category}/products/${product.id}`}
                    >
                      <Lazy_Image
                        src={product.imageBanner}
                        alt={product.title}
                      />
                    </Link>
                    <Box sx={{ textAlign: "center", pt: "20px" }}>
                      <Typography
                        component={"h4"}
                        variant="h5"
                        sx={{
                          fontSize: "23px",
                          fontWeight: "bold",
                          color: theme.palette.firstColor.main,
                        }}
                      >
                        {product.titleBanner}
                      </Typography>
                      <Typography component={"p"} sx={{ fontSize: "14px" }}>
                        {product.textBanner}
                      </Typography>
                      <Main_Button
                        to={`${product.gender}/${product.category}/products/${product.id}`}
                        textContent={"Shp Now"}
                      />
                    </Box>
                  </Grid>
                );
              })}
            </>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

New_Fashion_Section.propTypes = {
  newFashionData: PropTypes.array,
  isLoading: PropTypes.bool,
};
