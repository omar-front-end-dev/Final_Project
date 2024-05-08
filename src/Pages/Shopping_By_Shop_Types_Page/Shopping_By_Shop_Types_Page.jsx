import { useTheme } from "@emotion/react";
import { useLocation, useParams } from "react-router-dom";
import { useGetData } from "../../Hooks/useGetData";
import { Box, Container } from "@mui/material";
import { Is_Loading } from "../../Components/Main/Is_Loading/Is_Loading";
import { useEffect, useMemo, useState } from "react";
import "./Shopping_By_Shop_Types_Page.css";
import TuneIcon from "@mui/icons-material/Tune";
import { Shopping_Page_Filter_Categories, Shopping_Page_Content, Bread_Crumbs, Scroll_To_Top  } from "../../Components/Main/index";

export const Shopping_By_Shop_Types_Page = () => {
  const { shoppingType } = useParams();
  const theme = useTheme();
  const { dataName, isLoading } = useGetData(`/products`);
  const [selectedCategory, setSelectedCategory] = useState("");
  const location = useLocation();

  





  useEffect(() => {
    if (location) {
      setSelectedCategory("");
    }
  }, [location]);

  const filteredProducts = useMemo(() => {
    if (!dataName) return [];
    if (shoppingType === "sale") {
      if (selectedCategory == "") {
        return dataName.filter((product) => product.sale);
      } else {
        return dataName.filter(
          (product) => product.sale && product.category == selectedCategory
        );
      }
    }

    if (shoppingType === "spots") {
      if (selectedCategory == "") {
        return dataName.filter((product) => product.spots);
      } else {
        return dataName.filter(
          (product) => product.spots && product.category == selectedCategory
        );
      }
    }

    if (selectedCategory) {
      return dataName.filter(
        (product) =>
          product.gender === shoppingType &&
          product.category == selectedCategory
      );
    }

    return dataName.filter((product) => product.gender === shoppingType);
  }, [dataName, selectedCategory, shoppingType]);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

 

  const pathName = useMemo(
    () => [
      { linkName: `shopping`, linkTo: `/shopping/${shoppingType}` },
      { linkName: `${shoppingType}`, linkTo: `/shopping/${shoppingType}` },
    ],
    [shoppingType]
  );

  return (
    <Box sx={{ py: theme.palette.sectionPadding.main }}>
      {isLoading ? (
        <Container maxWidth="xl">
          <Is_Loading />
        </Container>
      ) : (
        <Box>
          <Container maxWidth="xl">
            <Bread_Crumbs pathName={pathName} />
          </Container>

          <Box
            sx={{
              borderTop: "1px solid #ddd",
              borderBottom: "1px solid #ddd",
              mb: "30px",
              py: 2,
              bgcolor: "#fff",
            }}
          >
            <Container maxWidth="xl">
              <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <TuneIcon sx={{ fontSize: "20px" }} />
                <Shopping_Page_Filter_Categories
                  handleChange={handleChange}
                  selectedCategory={selectedCategory}
                />
              </Box>
            </Container>
          </Box>
          <Container maxWidth="xl">
            {filteredProducts.length > 0 && (
              <Shopping_Page_Content products={filteredProducts} />
            )}
          </Container>
          <Scroll_To_Top/>
        </Box>
      )}
    </Box>
  );
};
