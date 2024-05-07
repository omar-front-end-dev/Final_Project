import { Link, NavLink } from "react-router-dom";
import { Box, MenuItem, MenuList } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useGetData } from "../../../Hooks/useGetData";

export const Header_links = () => {
  const { dataName } = useGetData("/categories");
  const theme = useTheme();

  return (
    <MenuList sx={{ display: { lg: "flex", xs: "none" } }}>
      {dataName.map((link, index) => {
        return (
          <li
            className="header__link"
            key={index}
            style={{
              textTransform: "capitalize",
              fontSize: "16px",
              fontWeight: "600",
              margin: "0 5px",
              padding: "0 5px",
              position: "relative",
              cursor: "pointer",
            }}
          ><NavLink to={`/shopping/${link.type}`} style={{color: "#fff"}}>
            {link.type}
          </NavLink>
            <Box
              className="header__drop-menu"
              sx={{
                position: "absolute",
                pt: "19px",
                left: "-50%",
                width: "500px",
                display: "none",
                zIndex :"1000"
              }}
            >
              <MenuList sx={{ p: 0, cursor: "auto" }}>
                <Box
                  sx={{
                    display: "flex",
                    boxShadow: "0px 7px 29px 0px #64646f52",
                    backgroundColor: theme.palette.secondaryTextColor.main,
                  }}
                >
                  <Box sx={{ width: "100%" }}>
                    {link.typesCategories.map((item, index) => {
                      return (
                        <MenuItem
                          key={index}
                          sx={{
                            "&:hover": { bgcolor: "transparent" },
                            cursor: "auto",
                            mt: "5px",
                            fontWeight: "bold",
                          }}
                        >
                          <Link
                            className="header__drop-menu__links"
                            style={{
                              fontSize: "18px",
                              position: "relative",
                              color: theme.palette.firstColor.main,
                            }}
                            to={`shopping/${link.type}/${item}`}
                          >
                            {item}
                          </Link>
                        </MenuItem>
                      );
                    })}
                  </Box>
                  <Box>
                    <img
                      style={{
                        width: "300px",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={link.imageCategory}
                      alt={link.type}
                    />
                  </Box>
                </Box>
              </MenuList>
            </Box>
          </li>
        );
      })}
    </MenuList>
  );
};
