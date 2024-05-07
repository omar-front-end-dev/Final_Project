import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import { PropTypes } from "prop-types";

export const Single_Product_Info_Top = ({ title, price, sale }) => {
  const theme = useTheme();
  return (
    <>
      <Typography
        component={"h1"}
        sx={{
          fontSize: "25px",
          fontWeight: "bold",
          color: theme.palette.firstColor.main,
          lineHeight: "2.2rem",
          marginBottom: "1rem",
        }}
      >
        {title}
      </Typography>
      <Typography
        component={"p"}
        sx={{
          color: "#ba2026",
          fontSize: "23px",
          fontWeight: "600",
          display: sale ? "block" : "none",
        }}
      >
        EGP {sale}
      </Typography>
      <Typography
        component={"p"}
        sx={{
          color: sale ? "#666" : theme.palette.ThirdColor.main,
          fontSize: !sale ? "23px" : "15px",
          fontWeight: sale ? "light" : "bold",
          textDecoration: sale ? "line-through" : "none",
        }}
      >
        EGP {price}
      </Typography>
      <Typography
        component={"p"}
        sx={{
          pt: "5px",
          color: "#666",
          fontSize: "11px",
        }}
      >
        Taxes and Duties are added on checkout
      </Typography>
    </>
  );
};

Single_Product_Info_Top.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  sale: PropTypes.number,
};
