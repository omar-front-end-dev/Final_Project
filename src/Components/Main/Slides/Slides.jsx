import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { PropTypes } from "prop-types";
import { Box, Container } from "@mui/material";
import "./Slides.css";
import { Card_Item } from "../Card_Item/Card_Item";
import { Is_Loading } from "../Is_Loading/Is_Loading";

export const Slides = ({ slidesData, isLoading }) => {
  return (
    <Box>
      <Container maxWidth="xl">
        {isLoading ? (
          <Is_Loading />
        ) : (
          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            slidesPerGroupSkip={1}
            breakpoints={{
              769: { slidesPerView: 2, spaceBetween: 9 },
              991: { slidesPerView: 3, spaceBetween: 9 },
              1200: { slidesPerView: 4, spaceBetween: 9 },
            }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="slider"
          >
            {slidesData.map((product) => {
              return (
                <SwiperSlide key={product.id} className="swiper-slides">
                  <Card_Item product={product} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </Container>
    </Box>
  );
};

Slides.propTypes = {
  slidesData: PropTypes.array,
  isLoading: PropTypes.bool,
};
