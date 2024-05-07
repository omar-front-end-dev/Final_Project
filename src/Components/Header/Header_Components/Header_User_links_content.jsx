import { useTheme } from "@emotion/react";
import {
  Box,
  MenuItem,
  MenuList,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useSelector } from "react-redux";
import { Logout_Or_Not } from "../../Main/Logout_Or_Not/Logout_Or_Not";


export const Header_User_links_content = ({ toggleDrawer }) => {
  const theme = useTheme();
  const { isAuth } = useSelector((state) => state.authReducer);
  const UserLinks = [
    {
      linkName: "my account",
      linkLocation: `account/${isAuth ? "account" : "login"}`,
    },
    { linkName: "favorites - page", linkLocation: "favorites" },
    { linkName: "cart - page", linkLocation: "/cart-page" },
  ];
 

  return (
    <>
      <Box className="header-user__links" sx={{ mb: "20px" }}>
        <MenuList>
          {UserLinks.map((link, index) => {
            return (
              <MenuItem
                key={index}
                sx={{
                  borderBottom: "1px solid #eee",
                  p: "0",
                }}
              >
                <Link
                  onClick={toggleDrawer("right", false)}
                  style={{
                    display: "block",
                    width: "100%",
                    textTransform: "capitalize",
                    fontSize: "17px",
                    color: theme.palette.firstColor.main,
                    padding: "12px 3px 4px",
                  }}
                  to={`${link.linkLocation}`}
                >
                  {link.linkName}
                </Link>
              </MenuItem>
            );
          })}
        </MenuList>
      </Box>
      <Box className="header-user__bottom">
        <Link
          className="header-user__bottom-login"
          to={"account/login"}
          onClick={toggleDrawer("right", false)}
          style={{
            display: !isAuth ? "block" : "none",
            width: "100%",
            color: theme.palette.secondaryTextColor.main,
            backgroundColor: theme.palette.ThirdColor.main,
            padding: "10px 0",
            fontWeight: "bold",
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "2px",
            borderRadius: "2px",
            transition: ".3s",
          }}
        >
          Login
        </Link>
        <Box>
          <Logout_Or_Not toggleDrawer={toggleDrawer} />
        </Box>
        <Stack
          sx={{
            py: "20px",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            display: !isAuth ? "flex" : "none",
            gap: 2,
          }}
        >
          <Typography
            component={"span"}
            variant="body2"
            sx={{ fontSize: "13px", color: "#5a5a5a" }}
          >
            No account yet?
          </Typography>
          <Link
            className="header-user__register-link"
            style={{
              display: "flex",
              color: "#000",
              fontSize: "14px",
              fontWeight: "bold",
              textTransform: "uppercase",
              position: "relative",
            }}
            to={"/account/register"}
            onClick={toggleDrawer("right", false)}
          >
            Register here.
          </Link>
        </Stack>
      </Box>
    </>
  );
};

Header_User_links_content.propTypes = {
  toggleDrawer: PropTypes.func,
};
