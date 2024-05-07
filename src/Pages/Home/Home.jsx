import { Box } from "@mui/material";
import { Slides } from "../../Components/Main/Slides/Slides";
import { useGetData } from "../../Hooks/useGetData";
import { useTheme } from "@emotion/react";
import {
  Home_Banner,
  Section_Title,
  New_Fashion_Section,
  Shop_By_Gender_Section,
} from "../../Components/Main/index";
export const Home = () => {
  const { dataName, isLoading } = useGetData("/products");
  const theme = useTheme();

  const newInStore = dataName.filter((product) => product.newInStore);
  const BestSellers = dataName.filter((product) => product.BestSellers);
  const newFashion = dataName.filter((product) => product.newFashion);

  return (
    <Box className="home-page">
      <Box className="home-page__banner">
        <Home_Banner />
      </Box>

      <Box
        className="home-page-slides__newInStore"
        sx={{ py: theme.palette.sectionPadding.main }}
      >
        <Section_Title title={"new in store"} />
        <Slides slidesData={newInStore} isLoading={isLoading} />
      </Box>

      <Box
        className="home-page__newFashion"
        sx={{ py: theme.palette.sectionPadding.main }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Section_Title title={"never out of style"} />
        </Box>
        <New_Fashion_Section
          newFashionData={newFashion}
          isLoading={isLoading}
        />
      </Box>

      <Box
        className="home-page-slides__bestSellers"
        sx={{ py: theme.palette.sectionPadding.main }}
      >
        <Section_Title title={"best sellers"} />
        <Slides slidesData={BestSellers} isLoading={isLoading} />
      </Box>

      <Box
        className="home-page__ShopBygGender"
        sx={{ py: theme.palette.sectionPadding.main }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Section_Title title={"never out of style"} />
        </Box>
        <Shop_By_Gender_Section />
      </Box>
    </Box>
  );
};
