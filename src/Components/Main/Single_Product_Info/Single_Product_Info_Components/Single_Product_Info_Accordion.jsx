import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTheme } from "@emotion/react";
import { PropTypes } from "prop-types";

export const Single_Product_Info_Accordion = ({ description }) => {
  const theme = useTheme();

  return (
    <Accordion sx={{ boxShadow: "none", borderBottom: "1px solid #eee" }}>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography
          sx={{
            fontWeight: "bold",
            color: theme.palette.firstColor.main,
            "&:hover": { color: theme.palette.ThirdColor.main },
            transition: ".3s",
          }}
        >
          Description
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          sx={{ fontSize: "15px", color: theme.palette.ThirdColor.main }}
        >
          {description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

Single_Product_Info_Accordion.propTypes = {
  description: PropTypes.string,
};
