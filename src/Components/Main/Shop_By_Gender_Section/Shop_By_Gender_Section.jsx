import { Link } from "react-router-dom";
import { Lazy_Image } from "../Lazy_Image/Lazy_Image";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Main_Button } from "../Main_Button/Main_Button";
import { useGetData } from "../../../Hooks/useGetData";
import { Is_Loading } from "../Is_Loading/Is_Loading";

export const Shop_By_Gender_Section = () => {
  const { dataName, isLoading } = useGetData("/categories");

  const FilterGenderType = dataName.filter((category) => {
    return (
      category.type === "women" ||
      category.type === "man" ||
      category.type === "kids"
    );
  });

  const theme = useTheme();
  return (
    <Box>
      <Container maxWidth="xl" sx={{ px: { xs: 0, md: "24px" } }}>
        <Grid container rowSpacing={0} columnSpacing={0}>
          {isLoading ? (
            <Is_Loading />
          ) : (
            <>
              {FilterGenderType.map((gender, index) => {
                return (
                  <Grid
                    key={index}
                    item
                    md={4}
                    xs={12}
                    sx={{ mb: { xs: "20px", lg: "0" } }}
                  >
                    <Link
                      style={{ display: "block", fontSize: "0px" }}
                      to={`shopping/${gender.type}`}
                    >
                      <Lazy_Image
                        src={gender.imageCategory}
                        alt={gender.type}
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
                          textTransform: "uppercase",
                        }}
                      >
                        {gender.type}
                      </Typography>

                      <Main_Button
                        to={`shopping/${gender.type}`}
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
