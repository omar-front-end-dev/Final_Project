/* eslint-disable react-refresh/only-export-components */

import { styled, alpha } from "@mui/material/styles";
import { Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@emotion/react";
import { Header_Search_Output } from "./Header_Search_Output";
import { useSearchLogic } from "../../../../Hooks/useSearchLogic";
import { useToggle } from "../../../../Hooks/useToggle";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: `1px solid ${alpha(theme.palette.common.white, 0.15)}`,
  overflow: "clip",
  transition: "0.3s",
  "&:hover": {
    border: `1px solid ${alpha(theme.palette.common.white, 0.3)}`,
  },
  "& ::placeholder": {
    fontSize: "14px",
  },
  width: "190px",
  borderRadius: "0",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(3.3)})`,
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const Header_Search_Input = () => {
  const theme = useTheme();
  const { searchQuery, searchResults, showResults, handleSearchInputChange, setSearchQuery, setShowResults } =
    useSearchLogic();
  const { toggleDrawer } = useToggle();

  return (
    <Box sx={{ position: "relative" }}>
      <Search
        sx={{ display: { xs: "none", lg: "flex" } }}
        value={searchQuery}
        onChange={handleSearchInputChange}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="SEARCH PUMA.COM"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <Box
        className="header-search-Input__content"
        sx={{
          position: "absolute",
          width: "650px",
          minHeight: "100px",
          maxHeight: "450px",
          overflowY: "auto",
          bgcolor: theme.palette.secondaryTextColor.main,
          borderRadius: "2px",
          right: "-50px",
          top: "47px",
          color: "#000",
          boxShadow: "0px 3px 12px 0px #0009",
          p: "10px",
          display: showResults ? "block" : "none",
          zIndex :"1000"
        }}
      >
        <Header_Search_Output
          searchResults={searchResults}
          showResults={showResults}
          toggleDrawer={toggleDrawer}
          setSearchQuery={setSearchQuery}
          setShowResults={setShowResults}
        />
      </Box>
    </Box>
  );
};
