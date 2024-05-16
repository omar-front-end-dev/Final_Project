import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { PropTypes } from "prop-types";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
export const Payment_Additional_Costs_And_Total = ({ totalDutiesAndTaxes, Calculate_Shopping_Cost }) => {
  const theme = useTheme();

  

  return (
    <Box>
      <Box
        sx={{
          p: "15px 10px",
          bgcolor: theme.palette.bgLightGrayColor.main,
          mb: "30px",
          display: "flex",
          justifyContent: "end",
          gap: "20px",
          color :theme.palette.firstColor.main
        }}
      >
        <Typography sx={{ fontWeight: "bold", }} component={"p"}>
          ITEMS TOTAL
        </Typography>
        <Typography sx={{ fontWeight: "bold", }} component={"p"}>
          EGP {Calculate_Shopping_Cost(0)}
        </Typography>
      </Box>
      <Box sx={{color :theme.palette.firstColor.main}}>
        <Typography
          component={"h5"}
          sx={{ fontWeight: "bold", fontSize: "22px", mb: "10px" }}
        >
          SHIPPING METHOD
        </Typography>
        <Box
          sx={{
            p: "15px 10px",
            bgcolor: theme.palette.bgLightGrayColor.main,
            mb: "30px",
            display: "flex",
            gap: "10px",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {xs: "column", md: "row"},
            color :theme.palette.firstColor.main
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              color :theme.palette.firstColor.main
            }}
          >
            <Typography sx={{ fontWeight: "bold",  }} component={"p"}>
              <RadioButtonCheckedIcon />
            </Typography>
            <Box>
              <Typography sx={{ fontWeight: "bold",  }} component={"p"}>
                EGP 100.00
              </Typography>
              <Typography component={"p"} sx={{ fontSize: "13px" }}>
                Prepayment of duties and taxes supported
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography component={"p"}>Express Courier (Air)</Typography>
          </Box>
          <Box>
            <Typography component={"p"}>3 to 5 business days</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{color :theme.palette.firstColor.main}}>
        <Typography
          component={"h5"}
          sx={{ fontWeight: "bold", fontSize: "15px", mb: "10px" }}
        >
          DUTIES & TAXES
        </Typography>
        <Box
          sx={{
            p: "15px 10px",
            bgcolor: theme.palette.bgLightGrayColor.main,
            mb: "30px",
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }} component={"p"}>
            <RadioButtonCheckedIcon />
          </Typography>
          <Box>
            <Typography sx={{ fontSize: "15px" }} component={"p"}>
              Prepay <strong>EGP {totalDutiesAndTaxes}</strong> for duties, taxes and fees now to guarantee no
              additional charges on delivery.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

Payment_Additional_Costs_And_Total.propTypes = {
  totalDutiesAndTaxes: PropTypes.number,
  Calculate_Shopping_Cost: PropTypes.func,
};
