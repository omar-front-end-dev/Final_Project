import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import GridViewIcon from "@mui/icons-material/GridView";
import { Box, Stack } from "@mui/material";
import PropTypes from "prop-types";
import { useCallback, useEffect } from "react";
import { useTheme } from "@emotion/react";

export const Buttons_Control_In_Show_Products = ({
  setControlShowProducts,
  controlShowProducts,
}) => {
  const theme = useTheme();

  useEffect(() => {
    setControlShowProducts(controlShowProducts);
  }, [controlShowProducts, setControlShowProducts]);

  const handleGridClick = useCallback(() => {
    setControlShowProducts(6);
  }, [setControlShowProducts]);

  const handleCompactClick = useCallback(() => {
    setControlShowProducts(3);
  }, [setControlShowProducts]);

  return (
    <Stack
      sx={{
        flexDirection: "row",
        justifyContent: "end",
        alignItems: "center",
        gap: 2,
        mb: "15px",
      }}
    >
      <Box
        onClick={handleGridClick}
        sx={{
          border: "1px solid",
          borderColor:
            controlShowProducts === 6
              ? `${theme.palette.firstColor.main}`
              : "#fff",
          width: "23px",
          height: "23px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          color: theme.palette.firstColor.main,
        }}
      >
        <GridViewIcon sx={{ fontSize: "21px" }} />
      </Box>
      <Box
        onClick={handleCompactClick}
        sx={{
          border: "1px solid",
          borderColor:
            controlShowProducts === 3
              ? `${theme.palette.firstColor.main}`
              : "#fff",
          width: "23px",
          height: "23px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          color: theme.palette.firstColor.main,
        }}
      >
        <ViewCompactIcon sx={{ fontSize: "25px" }} />
      </Box>
    </Stack>
  );
};

Buttons_Control_In_Show_Products.propTypes = {
  setControlShowProducts: PropTypes.func, 
  controlShowProducts: PropTypes.number,
};
