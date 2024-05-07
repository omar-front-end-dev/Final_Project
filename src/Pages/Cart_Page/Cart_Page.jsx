import { useTheme } from "@emotion/react";
import { Box, Container } from "@mui/material";
import { Cart_Page_Content, Bread_Crumbs } from "../../Components/Main/index"
export const Cart_Page = () => {
  const theme = useTheme();

  const pathName = [
    { linkName: `My Account`, linkTo: `/account/account` },
    { linkName: `Cart Page` },
  ];

  return (
    <Box sx={{ py: theme.palette.sectionPadding.main }}>
      <Container maxWidth="xl">
        <Bread_Crumbs pathName={pathName} />
        <Cart_Page_Content />
      </Container>
    </Box>
  );
};
