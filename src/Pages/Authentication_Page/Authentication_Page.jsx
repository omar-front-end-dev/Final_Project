import { Box, Container, Typography } from "@mui/material";
import { Login } from "../../Components/Main/Login/Login";
import { useParams } from "react-router-dom";
import { useTheme } from "@emotion/react";
import "./Authentication_Page.css";
import { My_Account, Authentication_Links, Register } from "../../Components/Main/index"
import { useSelector } from "react-redux";

export const Authentication_Page = () => {
  const { authenticationType } = useParams();
  const theme = useTheme();
  const { isAuth } = useSelector((state) => state.authReducer);

  return (
    <Box className="register-and-login">
   

      <Box
        className="register-and-login__title"
        sx={{
          bgcolor: theme.palette.bgLightGrayColor.main,
          py: theme.palette.sectionPadding.main,
          textAlign: { xs: "center", md: "start" },
        }}
      >
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: "25px" }} component={"h1"}>
            MY ACCOUNT
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="xl">
        {isAuth ? (
          <My_Account />
        ) : (
          <Box
            className="register-and-login__content"
            sx={{
              width: { xs: "100%", md: "700px", lg: "380px" },
              mx: "auto",
              py: theme.palette.sectionPadding.main,
            }}
          >
            <Box
              className="register-and-login__Links"
              sx={{ display: "flex", mb: "20px" }}
            >
              <Authentication_Links authenticationType={authenticationType} />
            </Box>
            {authenticationType == "login" ? (
              <Box>
                <Login />
              </Box>
            ) : (
              <Box>
                <Register />
              </Box>
            )}
          </Box>
        )}
      </Container>
    </Box>
  );
};
