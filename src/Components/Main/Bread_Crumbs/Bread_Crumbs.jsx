import { Link } from "react-router-dom";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Typography, Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import "./Bread_Crumbs.css";
import { PropTypes } from "prop-types";

export const Bread_Crumbs = ({ pathName }) => {
  const theme = useTheme();

  return (
    <Box sx={{ pb: theme.palette.sectionPadding.main }}>
      <Breadcrumbs
        className="bread-crumbs"
        separator={
          <Brightness1Icon
            sx={{ fontSize: "7px", color: theme.palette.ThirdColor.main }}
          />
        }
        aria-label="breadcrumb"
      >
        <Link
          className="bread-crumbs__link"
          style={{
            fontSize: "15px",
            display: "flex",
            fontWeight: "bold",
            color: theme.palette.firstColor.main,
            transition: "0.2s",
          }}
          to="/"
        >
          Home
        </Link>
        {pathName.map((pathname, index) => {
        if (pathName.length - 1 !== index) {
            return (
              <Link
                className="bread-crumbs__link"
                style={{
                  fontSize: "15px",
                  display: "flex",
                  fontWeight: "bold",
                  color: theme.palette.firstColor.main,
                  transition: "0.2s",
                  textTransform: "capitalize",
                }}
                key={index}
                to={pathname.linkTo}
              >
                {pathname.linkName}
              </Link>
            );
          } else {
            return (
              <Typography
                sx={{ fontSize: "15px", textTransform: "capitalize" }}
                key={index}
              >
                {pathname.linkName}
              </Typography>
            );
          }
        })}
      </Breadcrumbs>
    </Box>
  );
};

Bread_Crumbs.propTypes = {
  pathName: PropTypes.array,
};
