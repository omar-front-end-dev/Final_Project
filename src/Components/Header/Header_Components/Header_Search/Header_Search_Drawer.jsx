import { Box, Drawer, IconButton, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import CloseIcon from "@mui/icons-material/Close";
import { IoSearch } from "react-icons/io5";
import { useToggle } from "../../../../Hooks/useToggle";
import { NavLink } from "react-router-dom";
import { SiPuma } from "react-icons/si";
import { Header_Search_Drawer_Input } from "./Header_Search_Drawer_Input";
import { Header_Search_Output } from "./Header_Search_Output";
import { useSearchLogic } from "../../../../Hooks/useSearchLogic";

export const Header_Search_Drawer = () => {
  const theme = useTheme();
  const { state, toggleDrawer } = useToggle();
  const { searchQuery, searchResults, showResults, handleSearchInputChange } =
    useSearchLogic();
  return (
    <>
      <IoSearch
        className="header-search-drawer__icon"
        style={{
          transition: ".2s",
          color: theme.palette.secondaryTextColor.main,
          fontSize: "23px",
          cursor: "pointer",
        }}
        onClick={toggleDrawer("bottom", true)}
      />
      <Drawer anchor={"bottom"} open={state.bottom}>
        <Box
          sx={{
            mx: "auto",
            height: "100vh",
            mt: "20px",
            px: "30px",
            width: "100%",
          }}
        >
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography onClick={toggleDrawer("bottom", false)}>
              <NavLink to={"/"}>
                <SiPuma
                  style={{
                    fontSize: "3rem",
                    color: theme.palette.firstColor.main,
                  }}
                />
              </NavLink>
            </Typography>
            <IconButton
              className={"Close__Drawer"}
              onClick={toggleDrawer("bottom", false)}
              sx={{ "&:hover": { color: theme.palette.ThirdColor.main } }}
            >
              <CloseIcon />
            </IconButton>
          </Stack>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "600",
              color: theme.palette.ThirdColor.main,
              textAlign: "center",
            }}
          >
            Start Searching PUMA Now
          </Typography>

          <Box>
            <Header_Search_Drawer_Input
              searchQuery={searchQuery}
              handleSearchInputChange={handleSearchInputChange}
            />

            <Box sx={{ width: { md: "70%" }, mx: "auto" }}>
              <Header_Search_Output
                showResults={showResults}
                searchResults={searchResults}
                toggleDrawer={toggleDrawer}
              />
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
