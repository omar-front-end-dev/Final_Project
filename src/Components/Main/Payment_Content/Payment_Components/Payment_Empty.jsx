import { useTheme } from "@emotion/react"
import { Box, Typography } from "@mui/material"
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";

export const Payment_Empty = () => {
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
      <RemoveShoppingCartOutlinedIcon
        sx={{ fontSize: "30px", color: theme.palette.ThirdColor.main }}
      />
    </Box>
    <Typography
      component={"h5"}
      variant="h6"
      sx={{ fontWeight: "bold", mb: "40px" }}
    >
      CART IS EMPTY
    </Typography>
  </Box>
  )
}

