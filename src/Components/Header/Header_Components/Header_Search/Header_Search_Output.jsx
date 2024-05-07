import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { PropTypes } from "prop-types";
import { MdErrorOutline } from "react-icons/md";
import { Link } from "react-router-dom";

export const Header_Search_Output = ({
  searchResults,
  showResults,
  toggleDrawer,
  setShowResults
}) => {
  const theme = useTheme();

  return (
    <>
      {showResults && (
        <>
          {searchResults.length === 0 ? (
            <Box
              className="header-search__output"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "red",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <Typography
                component={"h1"}
                variant="h5"
                sx={{
                  textTransform: "capitalize",
                  py: "20px",
                }}
              >
                No results found
              </Typography>
              <MdErrorOutline size={"30"} />
            </Box>
          ) : (
            <>
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  color: theme.palette.firstColor.main,
                  letterSpacing: "-1px",
                  mb: "20px",
                }}
                component={"p"}
                variant="body2"
              >
                suggested products
              </Typography>
              {searchResults.map((product) => (
                <Box key={product.id} className="header-search__output__items" onClick={() => setShowResults(false)}>
                  <Link
                    to={`${product.gender}/${product.category}/products/${product.id}`}
                    onClick={toggleDrawer(false)}
                    className="header-search__output__item"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                      borderBottom: `1px solid ${theme.palette.bgLightGrayColor.main}`,
                      marginBottom: "15px",
                      transition: "0.3s",
                      borderRadius: "2px",
                      padding: "5px",
                    }}
                  >
                    <Box className="header-search__output__image">
                      <img
                        style={{ width: "90px" }}
                        src={product.thumbnail}
                        alt={product.title}
                      />
                    </Box>
                    <Box className="header-search__output__info">
                      <Typography
                        component={"p"}
                        variant="p"
                        sx={{
                          fontSize: "17px",
                          fontWeight: "600",
                          color: theme.palette.firstColor.main,
                          mb: "5px",
                        }}
                      >
                        {product.title}
                      </Typography>
                      <Typography
                        component={"p"}
                        variant="p"
                        sx={{
                          fontSize: "15px",
                          fontWeight: "600",
                          color: theme.palette.ThirdColor.main,
                        }}
                      >
                        EGP {product.price}
                      </Typography>
                    </Box>
                  </Link>
                </Box>
              ))}
            </>
          )}
        </>
      )}
    </>
  );
};

Header_Search_Output.propTypes = {
  showResults: PropTypes.bool,
  searchResults: PropTypes.array,
  toggleDrawer: PropTypes.func,
  setShowResults: PropTypes.func,
};
