import { Box, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useGetData } from "../../../../Hooks/useGetData";
import { useTheme } from "@emotion/react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import { GrLink } from "react-icons/gr";

export const Favorite_Products_Content_Top = () => {
  const { userId } = useSelector((state) => state.authReducer);
  const { dataName } = useGetData(`/users/${userId}`);
  const theme = useTheme();

  return (
    <Box>
      <Stack
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          component={"h1"}
          sx={{
            fontSize: "21px",
            fontWeight: "bold",
            textTransform: "uppercase",
            color: theme.palette.firstColor.main,
            mb: { xs: "20px", sm: "0" },
          }}
        >{`${userId ? dataName.firstName : "Favorite"}'s WISHLIST`}</Typography>
        <Box
          sx={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            component={"p"}
            sx={{ fontSize: "14px", color: theme.palette.firstColor.main }}
          >
            SHARE WISHLIST
          </Typography>
          <ul style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <li>
              <FacebookIcon
                style={{
                  fontSize: "25px",
                  display: "flex",
                  cursor: "pointer",
                  color: "#1479bd",
                }}
              />
            </li>
            <li>
              <TwitterIcon
                style={{
                  fontSize: "25px",
                  display: "flex",
                  cursor: "pointer",
                  color: "#40a6da",
                }}
              />
            </li>
            <li>
              <EmailIcon
                style={{
                  fontSize: "25px",
                  display: "flex",
                  cursor: "pointer",
                  color: "#181818",
                }}
              />
            </li>
            <li>
              <GrLink
                style={{
                  fontSize: "25px",
                  display: "flex",
                  cursor: "pointer",
                  color: "#181818",
                }}
              />
            </li>
          </ul>
        </Box>
      </Stack>
    </Box>
  );
};
