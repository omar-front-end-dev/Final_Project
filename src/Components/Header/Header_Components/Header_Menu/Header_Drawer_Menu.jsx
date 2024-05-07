import { Box, Drawer, IconButton, Stack } from "@mui/material";
import { useTheme } from "@emotion/react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useToggle } from "../../../../Hooks/useToggle";
import { Header_Drawer_Menu_Links } from "./Header_Drawer_Menu_Links";
import MenuIcon from "@mui/icons-material/Menu";
import { SiPuma } from "react-icons/si";
import { Header_User_links_content } from "../Header_User_links_content";
import { useGetData } from "../../../../Hooks/useGetData";
export const Header_Drawer_Menu = () => {
  const theme = useTheme();
  const { state, toggleDrawer } = useToggle();

  const { dataName } = useGetData("/categories");

  return (
    <>
      <MenuIcon
        sx={{
          color: theme.palette.secondaryTextColor.main,
          "&:hover": { color: "#7d7d7d" },
          transition: ".2s",
          cursor: "pointer",
          fontSize: "23px",
          display: { xs: "flex", lg: "none" },
        }}
        onClick={toggleDrawer("top", true)}
      />

      <Drawer anchor={"top"} open={state.top}>
        <Box
          sx={{
            mx: "auto",
            height: "100vh",
            my: "20px",
            px: "10px",
            width: { xs: "100%", sm: "600px" },
          }}
        >
          <Stack
            sx={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              pb: "10px",
              borderBottom: `1px solid ${theme.palette.bgLightGrayColor.main} `,
            }}
          >
            <Link
              to={"/"}
              onClick={toggleDrawer("top", false)}
              style={{ color: "#000", fontSize: "2.5rem", display: "flex" }}
            >
              <SiPuma />
            </Link>

            <IconButton
              onClick={toggleDrawer("top", false)}
              sx={{ "&:hover": { color: theme.palette.ThirdColor.main } }}
            >
              <CloseIcon />
            </IconButton>
          </Stack>

          <Box>
            <Header_Drawer_Menu_Links
              categories={dataName}
              toggleDrawer={toggleDrawer}
            />
          </Box>
          <Box>
            <Header_User_links_content toggleDrawer={toggleDrawer} />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
