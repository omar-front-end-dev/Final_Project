import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useTheme } from "@emotion/react";
import "./Main_Button.css"
export const Main_Button = ({ to, textContent }) => {
  const theme = useTheme();
  return (
    <Link
      to={to}
      style={{ color: theme.palette.secondaryTextColor.main }}
      className="main-btn"
    >
      {textContent}
    </Link>
  );
};

Main_Button.propTypes = {
  to: PropTypes.string,
  textContent: PropTypes.string,
};
