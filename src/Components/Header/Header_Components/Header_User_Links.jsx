import { useToggle } from "../../../Hooks/useToggle";
import { PiUserList } from "react-icons/pi";
import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Header_User_links_content } from "./Header_User_links_content";

export const Header_User_Links = () => {
  const { state, toggleDrawer } = useToggle();
  const theme = useTheme();

  

  return (
    <Box
      sx={{ position: "relative", display: { xs: "none", lg: "block"} }}
      className="header-user"
    >
      <PiUserList
        className="header-user_icon"
        onClick={toggleDrawer("right", true)}
        style={{
          fontSize: "25px",
          display: "flex",
          color: theme.palette.secondaryTextColor.main,
          cursor: "pointer",
          transition: ".2s",
        }}
      />
      <Box
        className="header-user__content"
        sx={{
          position: "absolute",
          boxShadow: "0px 3px 12px 0px #0009",
          right: "0",
          top: "-12px",
          zIndex: "55",
          background: theme.palette.secondaryTextColor.main,
          borderRadius: "3px",
          color: theme.palette.secondaryColor.main,
          p: "12px",
          width: "250px",
          display: !state.right ? "none" : "block",
        }}
      >
        <Stack
          className="header-user__top"
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            component={"span"}
            variant="body2"
            sx={{
              textTransform: "capitalize",
              fontWeight: "600",
              color: "#5a5a5a",
              fontSize: "13px",
            }}
          >
            QuickLinks
          </Typography>
          <IconButton size="small" onClick={toggleDrawer("right", false)}>
            <CloseIcon
              sx={{
                fontSize: "20px",
                color: theme.palette.firstColor.main,
                "&:hover": { color: theme.palette.ThirdColor.main },
              }}
            />
          </IconButton>
        </Stack>
        <Box>
          <Header_User_links_content toggleDrawer={toggleDrawer}/>
        </Box>
      </Box>
    </Box>
  );
};
