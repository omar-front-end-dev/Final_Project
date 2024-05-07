import { Box, Container } from "@mui/material";
import { Header_logo } from "./Header_Components/Header_logo";
import { Header_links } from "./Header_Components/Header_links";
import { useTheme } from "@emotion/react";
import "./Header.css";
import { Header_Search_Input } from "./Header_Components/Header_Search/Header_Search_Input";
import { Header_Icons } from "./Header_Components/Header_Icons";
import { useEffect, useState } from "react";
import { Header_User_Name } from "./Header_Components/Header_User_Name";

export const Header = () => {
  const theme = useTheme();


  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      className="header"
      component={"header"}
      sx={{
        color: "#fff",
        bgcolor: theme.palette.firstColor.main,
        py: "10px",
        width: "100%",
        position: isSticky ? "fixed" : "relative",
        animationName: isSticky ? "top" : false,
        boxShadow: isSticky ? "0px 2px 15px #333333" : false,
        zIndex: "200",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="nav__content"
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Header_logo />
            <Header_links />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Header_Search_Input />
            <Header_Icons />
            <Header_User_Name/>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
