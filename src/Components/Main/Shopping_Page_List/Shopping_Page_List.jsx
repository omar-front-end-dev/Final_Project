import { Box, Grid } from "@mui/material";
import PropTypes from "prop-types";
import { Shopping_Page_Card } from "../Shopping_Page_Card/Shopping_Page_Card";
import { Buttons_Control_In_Show_Products } from "../Buttons_Control_In_Show_Products/Buttons_Control_In_Show_Products";
import { useEffect, useState } from "react";

export const Shopping_Page_List = ({ products }) => {
  const [controlShowProducts, setControlShowProducts] = useState(
    () => parseInt(localStorage.getItem("controlShowProducts")) || 3
  );

  useEffect(() => {
    localStorage.setItem("controlShowProducts", controlShowProducts);
  }, [controlShowProducts]);
  
  return (
    <Box>
      <Box sx={{ display: { xs: "none", lg: "block" }}}>
        <Buttons_Control_In_Show_Products
          setControlShowProducts={setControlShowProducts}
          controlShowProducts={controlShowProducts}
        />
      </Box>

      <Grid container spacing={1.2}>
        {products.map((product) => (
          <Grid
            key={product.id}
            item
            xs={12}
            sm={6}
            md={4}
            lg={controlShowProducts}
            sx={{ my: 2 }}
          >
            <Shopping_Page_Card product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};


Shopping_Page_List.propTypes = {
  products: PropTypes.array,
};
