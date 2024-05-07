import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useGetData } from "../../../Hooks/useGetData";


export const Header_User_Name = () => {
  const { isAuth, userId } = useSelector(state => state.authReducer)
  const { dataName } = useGetData(`/users/${userId}`);

  return (
    <Box
      className="header-userName"
      sx={{
        display: isAuth ? { xs: "none", sm: "flex" } : "none",
        flexDirection: "column",
        textTransform: "uppercase",
      }}
    >
      <Typography
        component={"p"}
        sx={{ fontSize: "12px", letterSpacing: ".5px", mb: "2px" }}
      >
        hi, {dataName.firstName}
      </Typography>
      <Link
        className="header-userName__link"
        style={{
          fontSize: "11px",
          fontWeight: "bold",
          color: "#7d7d7d",
          transition: "0.2s",
          letterSpacing: ".5px"
        }}
        to={"/account/account"}
      >
        my Account
      </Link>
    </Box>
  );
};
