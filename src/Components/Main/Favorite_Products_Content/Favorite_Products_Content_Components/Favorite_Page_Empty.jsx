import { useTheme } from "@emotion/react"
import { Box, Typography } from "@mui/material"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const Favorite_Page_Empty = () => {
    const theme = useTheme()
    return (
      <Box
      sx={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          bgcolor: theme.palette.bgLightGrayColor.main,
          width: "70px",
          height: "70px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          mb: "20px",
        }}
      >
        <FavoriteBorderIcon
          sx={{ fontSize: "30px", color: theme.palette.ThirdColor.main }}
        />
      </Box>
      <Typography
        component={"h5"}
        variant="h6"
        sx={{ fontWeight: "bold", mb: "40px" }}
      >
        FAVORITE IS EMPTY
      </Typography>
    </Box>
    )
}
