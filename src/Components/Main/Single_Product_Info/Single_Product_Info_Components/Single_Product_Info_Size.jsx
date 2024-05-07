import { Box, Typography } from "@mui/material";
import { BsExclamationCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { PropTypes } from "prop-types";
import { useTheme } from "@emotion/react";
import { setIndexSize } from "../../../../RTK/Slices/singleProductSlice";


export const Single_Product_Info_Size = ({
  stock,
  size,
  setDataObj,
  sizeStatus,
  setSizeStatus
}) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { indexSize } = useSelector(
    (state) => state.singleProductImagesReducer
  );

 
  

  return (
    <>
      <Typography
        component={"p"}
        sx={{ fontSize: "18px", fontWeight: "600", mb: "10px", color: sizeStatus ? theme.palette.firstColor.main : "#ba2026" }}
      >
        Size
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "5px",
          flexWrap: "wrap",
          mb: "10px",
          borderStyle: `solid`,
          borderWidth :"1px",
          borderColor: sizeStatus ?  "#fff" : "#ba2026"
        }}
      >
        {size?.map((sizeBox, index) => (
          <Box
            key={index}
            sx={{
              width: "62px",
              height: "62px",
              cursor: "pointer",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor:
                indexSize == index ? theme.palette.ThirdColor.main : "#ccc",
              bgcolor:
                indexSize == index ? theme.palette.firstColor.main : "#fff",
              color:
                indexSize == index
                  ? theme.palette.secondaryTextColor.main
                  : "#000",
                  borderRadius: "1px"
            }}
            onClick={() => {
              dispatch(setIndexSize(index));
              setDataObj((prevState) => ({
                ...prevState,
                productSize: sizeBox,
              }));
              setSizeStatus(true)
            }}
          >
            <Typography
              component={"p"}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: "15px",
              }}
            >
              {sizeBox}
            </Typography>
          </Box>
        ))}
      </Box>
      <Typography
        component={"p"}
        sx={{
          fontSize: "12px",
          fontWeight: "900",
          color: "#ba2026",
          display: !sizeStatus ? "block" : "none",
        }}
      >
        PLEASE SELECT A SIZE
      </Typography>
      <Box
        sx={{
          display: stock <= 40 ? "flex" : "none",
          alignItems: "center",
          color: "#ba2026",
          gap: "10px",
          fontSize: "23px",
          py: "20px",
          width: "100%",
          borderBottom: `1px solid #eee`,
        }}
      >
        <BsExclamationCircle />
        <Typography fontSize="15px" component={"p"}>
          ONLY A FEW LEFT
        </Typography>
      </Box>
    </>
  );
};

Single_Product_Info_Size.propTypes = {
  stock: PropTypes.number,
  size: PropTypes.array,
  setDataObj: PropTypes.func,
  sizeStatus: PropTypes.bool,
  setSizeStatus: PropTypes.func
};
