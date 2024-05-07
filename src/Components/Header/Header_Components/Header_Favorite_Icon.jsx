import { Badge, Box } from "@mui/material"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { NavLink } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { useSelector } from "react-redux";
import FavoriteIcon from '@mui/icons-material/Favorite';
export const Header_Favorite_Icon = () => {
    const theme = useTheme()
    const { favoriteItems } = useSelector(state => state.favoriteReducer);
  return (
    <Box>
      <NavLink className="header-favorite__icon" to={"favorites"} style={{display: "flex",  color: theme.palette.secondaryTextColor.main, transition: ".2s"}}>
      <Badge badgeContent={favoriteItems.length} color="error">
        {favoriteItems.length == 0 ? <FavoriteBorderIcon sx={{fontSize: "23px"}}/> : <FavoriteIcon sx={{fontSize: "23px"}}/>}
      </Badge>
      </NavLink>
    </Box>
  )
}
