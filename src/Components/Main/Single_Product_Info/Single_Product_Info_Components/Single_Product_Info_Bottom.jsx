import { useTheme } from "@emotion/react";
import { Button, Stack, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { PropTypes } from "prop-types";
import ReportOutlinedIcon from "@mui/icons-material/ReportOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
export const Single_Product_Info_Bottom = ({
  setDataObj,
  quantity,
  addToCartHandler,
  handlerAddToFavorites,
  favoriteState,
}) => {
  const theme = useTheme();

  const QuantityHandling = () => {
    const handleQuantityChange = (event) => {
      const selectedQuantity = parseInt(event.target.value);
      setDataObj((prevState) => ({
        ...prevState,
        productQuantity: selectedQuantity,
      }));
    };

    const options = [];
    for (let index = 0; index < quantity; index++) {
      options.push(
        <option key={index} value={index + 1}>
          {index + 1}
        </option>
      );
    }

    return (
      <select
        onChange={handleQuantityChange}
        style={{
          padding: "10px 12px",
          fontSize: "16px",
          flexBasis: "10%",
          border: "1px solid #eee",
          cursor: "pointer",
        }}
      >
        {options}
      </select>
    );
  };

  return (
    <>
      <Typography
        sx={{
          py: "5px",
          color: "#ba2026",
          fontWeight: "bold",
          fontSize: "14px",
          display:
            favoriteState === false && favoriteState !== null ? "flex" : "none",
          alignContent: "center",
          gap: 1,
          textTransform: "capitalize",
        }}
      >
        This product is already in your favorites list
        <ReportOutlinedIcon />
      </Typography>
      <Typography
        sx={{
          py: "5px",
          color: "#66bb6a",
          fontWeight: "bold",
          fontSize: "14px",
          display: favoriteState === true ? "flex" : "none",
          alignContent: "center",
          gap: 1,
          textTransform: "capitalize",
        }}
      >
        This product added to favorites
        <CheckCircleOutlineIcon />
      </Typography>
      <Stack
        sx={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          borderBottom: `1px solid #eee`,
          py: "30px",
        }}
      >
        {QuantityHandling()}

        <Button
          onClick={() => addToCartHandler()}
          sx={{
            textTransform: "capitalize",
            bgcolor: theme.palette.ThirdColor.main,
            color: "#fff",
            flexBasis: { xs: "77%", sm: "75%", md: "62%" },
            borderRadius: "2px",
            fontWeight: "bold",
            "&:hover": {
              bgcolor: "#cab08a",
              color: theme.palette.firstColor.main,
            },
          }}
        >
          add to cart
        </Button>
        <Button
          onClick={() => handlerAddToFavorites()}
          sx={{
            flexBasis: { xs: "100%", sm: "10%" },
            padding: "12px 8px",
            border: "1px solid #eee",
            mt: { xs: "10px", sm: "0" },
            borderRadius: "2px",
            color: theme.palette.firstColor.main,
            "&:hover": {
              bgcolor: "#fff",
              borderColor: theme.palette.firstColor.main,
            },
          }}
        >
          <FavoriteBorderIcon
            sx={{ fontSize: "22px", mr: { xs: "5px", sm: "0" } }}
          />
          <Typography
            component={"p"}
            sx={{
              fontSize: "14px",
              fontWeight: "bold",
              display: { xs: "block", sm: "none" },
            }}
          >
            Add to Favorites
          </Typography>
        </Button>
      </Stack>
    </>
  );
};

Single_Product_Info_Bottom.propTypes = {
  setDataObj: PropTypes.func,
  quantity: PropTypes.number,
  addToCartHandler: PropTypes.func,
  handlerAddToFavorites: PropTypes.func,
  favoriteState: PropTypes.bool,
};
