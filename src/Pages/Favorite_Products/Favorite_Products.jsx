import { Box, Container } from "@mui/material"
import { useTheme } from "@emotion/react";
import { Favorite_Products_Content, Bread_Crumbs  } from "../../Components/Main/index"
export const Favorite_Products = () => {
  const theme = useTheme()
  const pathName = [
    { linkName: `My Account`, linkTo: `/account/account` },
    { linkName: `Favorites`},
  ];

  return (
    <Box sx={{py: theme.palette.sectionPadding.main}}>
      <Container maxWidth="xl">
      <Bread_Crumbs pathName={pathName}/>
        <Favorite_Products_Content />
      </Container>
    </Box>
  )
}


