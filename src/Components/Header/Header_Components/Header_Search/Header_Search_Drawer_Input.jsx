/* eslint-disable react-refresh/only-export-components */
import { InputBase, Divider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { PropTypes } from "prop-types"


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.bgLightGrayColor.main,
  "&:hover": {
    backgroundColor: "#d8d8d8",
  },
  "& :focus": {
    outline: "4px",
    backgroundColor: "#d8d8d8",
    borderRadius: "5px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(1.5, 1.5, 1.5),
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "11",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.5, 1.5, 1.5),
    paddingLeft: `calc(1em + ${theme.spacing(5)})`,
    transition: theme.transitions.create("width"),
  },
}));
export const Header_Search_Drawer_Input = ({ handleSearchInputChange, searchQuery }) => {
  return (
    <Search
      sx={{
        borderRadius: "5px",
        transition: ".3s",
        display: "flex",
        ".MuiInputBase-root": { width: "100%" },
        my: 5,
        mx: "auto",
        width: { md: "70%" },
      }}
      value={searchQuery}
      onChange={handleSearchInputChange}
    >
      <SearchIconWrapper>
        <SearchIcon />
        <Divider orientation="vertical" variant="middle" />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="SEARCH PUMA.COM"
        inputProps={{ "aria-label": "search" }}
      />
      <Divider orientation="vertical" />
    </Search>
  );
};

Header_Search_Drawer_Input.propTypes = {
    handleSearchInputChange: PropTypes.func,
    searchQuery: PropTypes.string
}