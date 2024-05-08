import { useTheme } from "@emotion/react";
import { useParams } from "react-router-dom";
import { useGetData } from "../../Hooks/useGetData";
import { Box, Container } from "@mui/material";
import { useMemo } from "react";
import { Bread_Crumbs, Shopping_Page_Content, Is_Loading, Scroll_To_Top } from "../../Components/Main/index"


export const Shopping_By_ShopTypes_And_Categories_Page = () => {
    const { shoppingType, category } = useParams();
    const theme = useTheme();
    const { dataName, isLoading } = useGetData(`/products`);
  
    const filteredProducts = useMemo(() => {
      if (!dataName) return [];
      if (shoppingType === "sale") {
        return dataName.filter((product) => product.sale && product.category == category);
      }
  
      if (shoppingType === "spots") {
        return dataName.filter((product) => product.spots && product.category === category);
      }
      return dataName.filter((product) => product.gender === shoppingType && product.category === category);
    }, [category, dataName, shoppingType]);
  
    const pathName = useMemo(() => [
      { linkName: `shopping`, linkTo: `/shopping/${shoppingType}` },
      { linkName: `${shoppingType}`, linkTo: `/shopping/${shoppingType}` },
      { linkName: `${category}`, linkTo: `/shopping/${shoppingType}` },
    ], [category, shoppingType]);
  
  
    return (
      <Box sx={{ py: theme.palette.sectionPadding.main }}>
        <Container maxWidth="xl">
          {isLoading ? (
            <Is_Loading />
          ) : (
            <Box>
              <Bread_Crumbs pathName={pathName} />
              {filteredProducts.length > 0 && (
                <Shopping_Page_Content products={filteredProducts} />
              )}
            </Box>
          )}
        </Container>
        <Scroll_To_Top/>
      </Box>
    );
}


