import { Box, Stack, Typography } from "@mui/material";
import { PropTypes } from "prop-types";

import { Lazy_Image } from "../../Lazy_Image/Lazy_Image";

export const Shopping_Page_Card_Slides = ({
  clickImageHandler,
  smallImages,
  imagesIndex,
}) => {
  return (
    <Box
      sx={{
        height: { xs: smallImages.length <= 1 ? "0" : "70px", sm: "70px" },
        py: "5px",
      }}
    >
      <Typography
        className="card-color__text"
        component={"span"}
        sx={{
          height: "100%",
          alignItems: "center",
          pl: "10px",
          color: "#666",
          fontSize: "12px",
          display: { xs: "none", md: "flex" },
        }}
      >
        {smallImages.length <= 1 ? `1 COLOR` : `COLORS ${smallImages.length}`}
      </Typography>
      <Stack
        className="card-color__images"
        sx={{
          flexDirection: "row",
          justifyContent: "center",
          gap: "3px",
        }}
      >
        {smallImages.map((image, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: smallImages.length > 1 ? "block" : "none",
                width: "64px",
                height: "64px",
                cursor: "pointer",
                border: `1px solid ${imagesIndex == index ? "#ccc" : "#fff"}`,
              }}
              onClick={() => clickImageHandler(index)}
            >
              <Lazy_Image
                src={image.default}
                alt={`Product Image ${index + 1}`}
              />
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

Shopping_Page_Card_Slides.propTypes = {
  clickImageHandler: PropTypes.func,
  smallImages: PropTypes.array,
  imagesIndex: PropTypes.number,
};
