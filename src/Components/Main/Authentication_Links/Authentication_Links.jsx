import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
export const Authentication_Links = ({ authenticationType }) => {
  const theme = useTheme();

 

  return (
    <>
      <Link
        to={"/account/login"}
        style={{
          flexBasis: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "21px",
          borderWidth: "0 0 2px",
          borderColor:
            authenticationType == "login"
              ? `${theme.palette.firstColor.main}`
              : "#ccc",
          borderStyle: "solid",
          padding: "5px 0",
          color: theme.palette.firstColor.main,
          fontWeight: authenticationType == "login" ? "bold" : "normal",
        }}
      >
        Login
      </Link>
      <Link
        to={"/account/register"}
        style={{
          flexBasis: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "21px",
          padding: "5px 0",
          borderWidth: "0 0 2px",
          borderColor:
            authenticationType == "register"
              ? `${theme.palette.firstColor.main}`
              : "#ccc",
          borderStyle: "solid",
          color: theme.palette.firstColor.main,
          fontWeight: authenticationType == "register" ? "bold" : "normal",
        }}
      >
        Create Account
      </Link>
    </>
  );
};

Authentication_Links.propTypes = {
  authenticationType: PropTypes.string,
};
