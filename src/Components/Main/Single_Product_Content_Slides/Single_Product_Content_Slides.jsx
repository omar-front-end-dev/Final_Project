import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PropTypes } from "prop-types";
import "./Single_Product_Content_Slides.css";
import { Keyboard, Scrollbar, Navigation, Autoplay } from "swiper/modules";

import { SwiperSlide, Swiper } from "swiper/react";
import { Lazy_Image } from "../Lazy_Image/Lazy_Image";
import { Video_Player } from "../Video_Player/Video_Player";

export const Single_Product_Content_Slides = ({ productImages, combinedFunction }) => {
  return (
    <Box>
      <Swiper
        className="single-product__slider"
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        spaceBetween={10}
        breakpoints={{
          669: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
      >
        {productImages.map((Url, index) => {
          return (
            <SwiperSlide style={{cursor: "pointer"}} key={index} onClick={() => combinedFunction(index)}>
              {Url.includes("videos") ? (
                <Video_Player urlVideo={Url} />
              ) : (
                <Lazy_Image src={Url} alt={`Product Image ${index + 1}`} />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

Single_Product_Content_Slides.propTypes = {
  productImages: PropTypes.array,
  combinedFunction: PropTypes.func,
};
