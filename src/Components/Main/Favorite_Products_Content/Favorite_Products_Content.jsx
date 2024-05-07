import { Box, Container, Typography } from "@mui/material";
import { Favorite_Products_Content_Top } from "./Favorite_Products_Content_Components/Favorite_Products_Content_Top";
import { useDispatch, useSelector } from "react-redux";
import { Favorite_Page_Items } from "./Favorite_Products_Content_Components/Favorite_Page_Items";
import { Favorite_Page_Empty } from "./Favorite_Products_Content_Components/Favorite_Page_Empty";
import { removeAllFromFavorite } from "../../../RTK/Slices/favoriteSlice"
export const Favorite_Products_Content = () => {
  const { favoriteItems } = useSelector((state) => state.favoriteReducer);
  const dispatch = useDispatch()

  const removeAllFromFavoriteHandler = () =>{
    dispatch(removeAllFromFavorite())
  }

  return (
    <Box>
      <Container maxWidth="lg" sx={{ px: { xs: 0 } }}>
        <Box sx={{ mb: "40px" }}>
          <Favorite_Products_Content_Top />
        </Box>
      </Container>
      <Container maxWidth="md" sx={{ p: { xs: 0 } }}>
        {favoriteItems.length == 0 ? (
          <Favorite_Page_Empty />
        ) : (
          <Box sx={{ width: { xs: "100%", lg: "80%", margin: "auto" } }}>
            <Box>
              <Typography
                component={"span"}
                onClick={() => removeAllFromFavoriteHandler()}
                sx={{
                  cursor: "pointer",
                  color: "#ba2026",
                  fontWeight: "bold",
                  borderBottom: "1px solid",
                  textTransform: "uppercase",
                }}
              >
                Remove all favorite
              </Typography>
            </Box>
            {favoriteItems.map((favoriteItem, index) => {
              return (
                <Favorite_Page_Items key={index} favoriteItem={favoriteItem} />
              );
            })}
          </Box>
        )}
      </Container>
    </Box>
  );
};
