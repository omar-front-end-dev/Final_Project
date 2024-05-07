import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";
import { Lazy_Image } from "../../Lazy_Image/Lazy_Image";

import { PropTypes } from "prop-types";
import { Video_Player } from "../../Video_Player/Video_Player";

export const Shopping_Page_Card_Slider = ({ images }) => {

  return (
    <Box>
      <Swiper
        scrollbar={true}
        navigation={true}
        modules={[Scrollbar, Navigation]}
        className="swiper-card"
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide className="swiper-card__Slide" key={index}>
                <Box>
                {image.includes("videos") ? (
                        <Video_Player urlVideo={image} />
                      ) : (
                        <Lazy_Image
                          src={image}
                          alt={`Product Image ${index + 1}`}
                        />
                      )}
                </Box>
              
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

Shopping_Page_Card_Slider.propTypes = {
  images: PropTypes.array,
};
