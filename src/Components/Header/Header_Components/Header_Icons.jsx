import { Box } from "@mui/material";
import { Header_Favorite_Icon } from "./Header_Favorite_Icon";
import { Header_Cart_Icon } from "./Header_Cart/Header_Cart_Icon";
import { Header_User_Links } from "./Header_User_Links";
import { Header_Search_Drawer } from "./Header_Search/Header_Search_Drawer";
import { Header_Drawer_Menu } from "./Header_Menu/Header_Drawer_Menu";

export const Header_Icons = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
      <Header_Search_Drawer />
      <Header_Favorite_Icon />
      <Header_Cart_Icon />
      <Header_User_Links />
      <Header_Drawer_Menu />
    </Box>
  );
};
