import { Box, Container, Typography } from "@mui/material";
import { useGetData } from "../../../Hooks/useGetData";
import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import "./Home_Banner.css";
import { Is_Loading } from "../Is_Loading/Is_Loading";
import { Main_Button } from "../Main_Button/Main_Button";

export const Home_Banner = () => {
  const { dataName, isLoading } = useGetData("/banner");
  const [banner, setBanner] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    if (dataName) {
      setBanner(dataName);
    }
  }, [dataName, setBanner]);

  return (
    <Box className="home-banner" sx={{ position: "relative", height: "430px" }}>
      {isLoading ? (
        <Is_Loading />
      ) : (
        <>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={banner[0]?.homeBannerImage}
            alt={banner[0]?.homeBannerTitle}
          />

          <Box
            sx={{
              position: "absolute",
              left: "10",
              color: theme.palette.secondaryTextColor.main,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <Container maxWidth="xl" sx={{ userSelect: "none" }}>
              <Typography
                component={"h1"}
                variant="h3"
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: { xs: "25px", sm: "35px", lg: "40px" },
                }}
              >
                {banner[0]?.homeBannerTitle}
              </Typography>
              <Typography
                component={"p"}
                variant="p"
                sx={{
                  textTransform: "capitalize",
                  fontSize: "17px",
                  letterSpacing: "1.5px",
                }}
              >
                {banner[0]?.homeBannerText}
              </Typography>
              <Box>
                <Main_Button to={"/shopping/women"} textContent={`shop women's`} />
                <Main_Button to={"/shopping/man"} textContent={`shop men's`} />
                <Main_Button to={"/shopping/kids"} textContent={`shop kids'`} />
              </Box>
            </Container>
          </Box>
        </>
      )}
    </Box>
  );
};
