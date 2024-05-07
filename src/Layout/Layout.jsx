import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import { Main_Top_Slider } from "../Components/Main/Main_Top_Slider/Main_Top_Slider";
import { Footer } from "../Components/Footer/Footer";

export const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box component={"div"}>
        <Box component={"header"}>
          <Header />
          <Main_Top_Slider />
        </Box>

        <Box component={"main"}>
          <Outlet />
        </Box>
        <Box component={"footer"}>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
};
