import { Box, Grid, Container, Typography } from "@mui/material";
import { Bread_Crumbs } from "../Bread_Crumbs/Bread_Crumbs";
import { useTheme } from "@emotion/react";
import { PiUserList } from "react-icons/pi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useGetData } from "../../../Hooks/useGetData";
import { useSelector } from "react-redux";
import { Is_Loading } from "../Is_Loading/Is_Loading";
import { Logout_Or_Not } from "../Logout_Or_Not/Logout_Or_Not";

export const My_Account = () => {
  const { userId } = useSelector((state) => state.authReducer);
  const { dataName, isLoading } = useGetData(`/users/${userId}`);
  const pathName = [
    {linkName: "My Account", linkTo :"account/account" }
  ]

  const theme = useTheme();
  return (
    <Box
      className="my-account-page"
      sx={{ py: theme.palette.sectionPadding.main }}
    >
      <Bread_Crumbs pathName={pathName} />
      {isLoading ? (
        <Is_Loading />
      ) : (
        <Box
          className="my-account-page__content"
          sx={{ pb: theme.palette.sectionPadding.main }}
        >
          <Container>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    borderBottom: `1px solid ${theme.palette.firstColor.main}`,
                    py: "5px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    mb: "10px",
                  }}
                >
                  <PiUserList size={"20px"} />
                  <Typography component={"h3"} sx={{ fontSize: "18px" }}>
                    PROFILE
                  </Typography>
                </Box>
                <Box className="my-account-page__info">
                  <Typography
                    sx={{
                      fontSize: "15px",
                      py: "8px",
                      display: "flex",
                      justifyContent: "space-between"
                    }}
                    component={"p"}
                  >
                    <span style={{ fontWeight: "bold", fontSize: "17px" }}>
                      First Name
                    </span>{" "}
                    {dataName.firstName}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      py: "8px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                    component={"p"}
                  >
                    <span style={{ fontWeight: "bold", fontSize: "17px" }}>
                      Last Name
                    </span>{" "}
                    {dataName.lastName}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      py: "8px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                    component={"p"}
                  >
                    <span style={{ fontWeight: "bold", fontSize: "17px" }}>
                      Email
                    </span>{" "}
                    {dataName.email}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    borderBottom: `1px solid ${theme.palette.firstColor.main}`,
                    py: "5px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    mb: "10px",
                  }}
                >
                  <RiLockPasswordLine size={"20px"} />
                  <Typography component={"h3"} sx={{ fontSize: "18px" }}>
                    PASSWORD
                  </Typography>
                </Box>
                <Box className="my-account-page__info">
                  <Typography
                    sx={{
                      fontSize: "15px",
                      py: "8px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                    component={"p"}
                  >
                    <span style={{ fontWeight: "bold", fontSize: "17px" }}>
                      Password
                    </span>{" "}
                    {dataName.password}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Box
                  sx={{
                    borderTop: `1px solid ${theme.palette.firstColor.main}`,
                    mt: "80px",
                    py: "16px",
                  }}
                >
                  <Box sx={{ width: "200px" }}>
                    <Logout_Or_Not />
                  </Box>
                </Box>
          </Container>
        </Box>
      )}
    </Box>
  );
};
