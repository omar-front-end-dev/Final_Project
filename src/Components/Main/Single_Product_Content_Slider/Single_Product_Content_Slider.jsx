import { Box, Drawer, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Lazy_Image } from "../Lazy_Image/Lazy_Image";
import { PropTypes } from "prop-types";
import "./Single_Product_Content_Slider.css";
import { Video_Player } from "../Video_Player/Video_Player";

export const Single_Product_Content_Slider = ({
  productImages,
  toggleDrawer,
  state,
  indexImage,
}) => {
  const theme = useTheme();

  return (
    <Box>
      <Drawer anchor={"bottom"} open={state.bottom}>
        <Box
          sx={{
            height: "100vh",
            width: "100%",
            position: "relative",
            p: "0px",
          }}
        >
          <IconButton
            onClick={toggleDrawer("bottom", false)}
            sx={{
              position: "absolute",
              right: { xs: "10px", md: "35px" },
              zIndex: "11",
              top: "15px",
              "&:hover": {
                color: theme.palette.ThirdColor.main,
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box>
            <Swiper
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              initialSlide={indexImage}
              className="single-product-slider__Swiper"
            >
              {productImages.map((Url, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="single-product-slider__swiperSlide"
                  >
                    <Box sx={{ textAlign: "center", height: "100vh" }}>
                      {Url.includes("videos") ? (
                        <Video_Player urlVideo={Url} />
                      ) : (
                        <Lazy_Image
                          src={Url}
                          alt={`Product Image ${index + 1}`}
                        />
                      )}
                    </Box>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

Single_Product_Content_Slider.propTypes = {
  productImages: PropTypes.array,
  toggleDrawer: PropTypes.func,
  state: PropTypes.object,
  indexImage: PropTypes.number,
};
