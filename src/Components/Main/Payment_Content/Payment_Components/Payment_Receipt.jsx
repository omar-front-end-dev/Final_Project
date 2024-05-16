import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { PropTypes } from "prop-types";

export const Payment_Receipt = ({
  Calculate_Shopping_Cost,
  totalDutiesAndTaxes,
  calc_Shopping_Cost_And_TotalItems,
}) => {
  const theme = useTheme();

  return (
    <Box>

    <Box sx={{ p: "0px 15px", bgcolor: theme.palette.bgLightGrayColor.main,}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid #ddd",
          py: "13px",
        }}
      >
        <Typography sx={{ fontSize: "15px", color :theme.palette.firstColor.main }} component={"p"}>
          Items total
        </Typography>
        <Typography sx={{ fontSize: "15px", color :theme.palette.firstColor.main }} component={"p"}>
          EGP {Calculate_Shopping_Cost(0)}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid #ddd",
          py: "13px",
        }}
      >
        <Typography sx={{ fontSize: "15px", color :theme.palette.firstColor.main }} component={"p"}>
          Shipping
        </Typography>
        <Typography sx={{ fontSize: "15px", color :theme.palette.firstColor.main }} component={"p"}>
          EGP 100.00
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid #ddd",
          py: "13px",
        }}
      >
        <Typography sx={{ fontSize: "15px", color :theme.palette.firstColor.main }} component={"p"}>
          Duties, taxes & fees
        </Typography>
        <Typography sx={{ fontSize: "15px", color :theme.palette.firstColor.main }} component={"p"}>
          EGP {totalDutiesAndTaxes}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: "23px",
        }}
      >
        <Typography sx={{ fontSize: "15px", fontWeight: "bold", color :theme.palette.firstColor.main }} component={"p"}>
            Total For Your Order
        </Typography>
        <Typography sx={{ fontSize: "15px", fontWeight: "bold", color :theme.palette.firstColor.main }} component={"p"}>
          EGP {calc_Shopping_Cost_And_TotalItems}
        </Typography>
      </Box>
    </Box>
    <Typography sx={{pt: "15px", fontSize: "15px", lineHeight: 1.6, color :theme.palette.firstColor.main}} component={"p"}>All applicable duties, taxes and fees are included in the total amount of your order. We guarantee you will not be required to pay any additional cost on delivery.</Typography>
    </Box>
  );
};

Payment_Receipt.propTypes = {
  totalDutiesAndTaxes: PropTypes.number,
  Calculate_Shopping_Cost: PropTypes.func,
  calc_Shopping_Cost_And_TotalItems: PropTypes.number,
};
