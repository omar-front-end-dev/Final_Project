import { useTheme } from "@emotion/react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { SiPuma } from "react-icons/si";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
export const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      className="footer"
      sx={{
        bgcolor: theme.palette.firstColor.main,
        p: `4.375rem 0 ${theme.palette.sectionPadding.main}`,
        color: theme.palette.secondaryTextColor.main,
      }}
    >
      <Container maxWidth="xl">
        <Stack
          className="footer__top"
          sx={{
            flexDirection: { md: "row", xs: "column" },
            justifyContent: "space-between",
            mb: "20px",
          }}
        >
          <Box className="footer__logo" sx={{ textAlign: { xs: "center" } }}>
            <NavLink
              to={"/"}
              style={{
                color: "#fff",
                fontSize: "2.5rem",
                display: "block",
                paddingRight: "10px",
              }}
            >
              <SiPuma />
            </NavLink>
          </Box>
          <Box
            className="footer__signUp"
            sx={{ flexBasis: { md: "35%", lg: "25%" } }}
          >
            <Typography
              component={"p"}
              sx={{ mb: "15px", textAlign: { xs: "center", md: "start" } }}
            >
              Sign up and get 20% off your first order
            </Typography>
            <Button
              sx={{
                width: "100%",
                bgcolor: theme.palette.ThirdColor.main,
                color: theme.palette.secondaryTextColor.main,
                borderRadius: "0px",
                py: "8px",
                fontWeight: "bold",
                fontSize: "15px",
                "&:hover": { bgcolor: "#ae946dde" },
              }}
            >
              sign up for newsletter
            </Button>
          </Box>
        </Stack>
        <Grid container sx={{ justifyContent: "space-between" }}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ borderTop: "2px solid #fff", mb: "30px" }}
          >
            <Box sx={{ mt: "20px" }}>
              <Typography component={"h6"} sx={{ mb: "15px" }}>
                Support
              </Typography>
              <Stack
                sx={{ flexDirection: "row", justifyContent: "space-between" }}
              >
                <ul className="footer__list">
                  <li>Contact us</li>
                  <li>FAQ</li>
                  <li>My Profile</li>
                  <li>Delivery</li>
                  <li>Find a Store</li>
                </ul>

                <ul className="footer__list">
                  <li>Return Policy</li>
                  <li>Privacy Policy</li>
                  <li>Terms of Use</li>
                  <li>Terms of Sale</li>
                  <li>*Promotions & Sale</li>
                  <li>Become an Affiliate Partner</li>
                </ul>
              </Stack>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ borderTop: "2px solid #fff", mb: "30px" }}
          >
            <Box sx={{ mt: "20px" }}>
              <Typography component={"h6"} sx={{ mb: "15px" }}>
                About PUMA
              </Typography>
              <Stack
                sx={{ flexDirection: "row", justifyContent: "space-between" }}
              >
                <ul className="footer__list">
                  <li>Company</li>
                  <li>Corporate News</li>
                  <li>Press Center</li>
                </ul>

                <ul className="footer__list">
                  <li>Investors</li>
                  <li>Sustainability</li>
                  <li>Careers</li>
                </ul>
              </Stack>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{ borderTop: "2px solid #fff", mb: "30px" }}
          >
            <Box sx={{ mt: "20px", mb: { xs: "20px", md: "70px" } }}>
              <Typography component={"h6"} sx={{ mb: "15px" }}>
                More Inspiration
              </Typography>
              <ul
                className="footer__list-icons"
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <li>
                  <FaFacebookSquare size={"20"} />
                </li>
                <li>
                  <FaTwitter size={"20"} />
                </li>
                <li>
                  <FaInstagram size={"20"} />
                </li>
                <li>
                  <FaPinterest size={"20"} />
                </li>
                <li>
                  <FaYoutube size={"20"} />
                </li>
              </ul>
            </Box>
            <Box
              sx={{
                borderTop: "1px solid #4e4e4e91",
                pt: "30px",
                display: "flex",
                alignItems: "center",
                gap: "25px",
                justifyContent: { xs: "center", md: "start" },
                flexDirection: { xs: "column", lg: "row" },
              }}
            >
              <Button
                sx={{
                  width: "60px",
                  height: "65px",
                  border: "1px solid #4e4e4e91",
                  display: "flex",
                  flexDirection: "column",
                  color: theme.palette.secondaryTextColor.main,
                  borderRadius: "12px",
                }}
              >
                <SiPuma size={30} />
                <Typography component={"p"} sx={{ fontSize: "8px" }}>
                  T R A C
                </Typography>
              </Button>
              <Typography
                className="footer__trac"
                component={"p"}
                sx={{
                  fontSize: "11px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                Train with the fastest
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          textAlign: "center",
          pt: theme.palette.sectionPadding.main,
          borderTop: "1px solid #4e4e4e91",
        }}
      >
        <Typography component={"p"} sx={{ fontSize: "15px" }}>
          © Austria PUMA Dassler GmbH, 2024. All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};
