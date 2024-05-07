import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  MenuItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useTheme } from "@emotion/react";

export const Header_Drawer_Menu_Links = ({ categories, toggleDrawer }) => {
  const theme = useTheme();
  return (
    <>
      {categories.map((link, index) => {
        return (
          <Accordion
            key={index}
            sx={{
              fontSize: "23px",
              fontWeight: "600",
              textTransform: "capitalize",
              color: theme.palette.firstColor.main,
              boxShadow: "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Link
                onClick={toggleDrawer("top", false)}
                to={`/shopping/${link.type}`}
                style={{
                  color: theme.palette.firstColor.main,
                  textDecoration: "underline",
                }}
              >
                {link.type}
              </Link>
            </AccordionSummary>
            <AccordionDetails>
              {link.typesCategories.map((item, index) => {
                return (
                  <MenuItem
                    key={index}
                    sx={{
                      p: "6px 15px",
                      fontWeight: "bold",
                    }}
                  >
                    <Link
                      style={{
                        fontSize: "20px",
                        display: "block",
                        width: "100%",
                        color: theme.palette.ThirdColor.main,
                      }}
                      onClick={toggleDrawer("top", false)}
                      to={`shopping/${link.type}/${item}`}
                    >
                      {item}
                    </Link>
                  </MenuItem>
                );
              })}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};

Header_Drawer_Menu_Links.propTypes = {
  categories: PropTypes.array,
  toggleDrawer: PropTypes.func,
};

