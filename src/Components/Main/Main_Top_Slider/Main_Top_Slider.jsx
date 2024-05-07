import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Main_Top_Slider.css";

import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";

export const Main_Top_Slider = () => {
  const theme = useTheme();
  return (
    <Box
      className="main-top-slider"
      sx={{ bgcolor: theme.palette.secondaryColor.main }}
    >
      <Container maxWidth="xl" className="swiper_container">
        <Box>
          <Swiper
            style={{ padding: "30px 0" }}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 6500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="swiper__slide"
          >
            <SwiperSlide className="swiper-slide__item">
              <Typography
                component={"h6"}
                variant="h6"
                sx={{
                  mb: "5px",
                  fontSize: "17px",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  userSelect: "none",
                }}
              >
                unlock the best of puma
              </Typography>
              <Typography
                component={"p"}
                variant="p"
                sx={{
                  fontSize: "14px",
                  textTransform: "capitalize",
                  userSelect: "none",
                  mb: "5px",
                }}
              >
                Sign up to the newsletter and get 20% off on your first order.*
              </Typography>
              <Link
                to={"signUp"}
                className="main-top-slider__link"
                style={{
                  fontSize: "17px",
                  textTransform: "uppercase",
                  color: "#fff",
                  margin: "0 0 5px",
                  position: "relative",
                }}
              >
                Sign up
              </Link>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide__item">
              <Typography sx={{ userSelect: "none" }}>
                Taxes and duties are added on checkout.
              </Typography>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};
