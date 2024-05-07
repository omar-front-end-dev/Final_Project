import { Box, Typography } from "@mui/material";
import { setIndexImages } from "../../../../RTK/Slices/singleProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@emotion/react";
import { PropTypes } from "prop-types"
export const Single_Product_Info_Middle = ({ images, setDataObj }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { indexImages } = useSelector(
    (state) => state.singleProductImagesReducer
  );

  

  return (
    <>
      <Typography
        component={"p"}
        sx={{ fontSize: "17px", fontWeight: "600", mb: "10px" }}
      >
        Colour
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          borderBottom: `1px solid #eee`,
          pb: "30px",
        }}
      >
        {images?.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: "62px",
              height: "62px",
              cursor: "pointer",
              border:
                index === indexImages
                  ? `1px solid ${theme.palette.ThirdColor.main}`
                  : false,
            }}
            onClick={() => {
              dispatch(setIndexImages(index));
              setDataObj((prevState) => ({
                ...prevState,
                productColor: item,
              }));
            }}
          >
            <img
              style={{ width: "100%" }}
              src={item?.default}
              alt={`Product image ${index}`}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};


Single_Product_Info_Middle.propTypes = {
    images: PropTypes.array,
    setDataObj: PropTypes.func
}