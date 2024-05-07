import { Box } from "@mui/material";
import { PropTypes } from "prop-types";
import { Shopping_Page_List } from "../Shopping_Page_List/Shopping_Page_List";
import { useEffect, useState } from "react";

import { Buttons_Show_Shop_Products } from "../Buttons_Show_Shop_Products/Buttons_Show_Shop_Products";

export const Shopping_Page_Content = ({ products }) => {
  const [productsSlicing, setProductsSlicing] = useState([]);

  useEffect(() => {
    setProductsSlicing(products.slice(0, 12));
  }, [products]);

  return (
    <Box>
      <Shopping_Page_List products={productsSlicing} />
      <Box>
        <Buttons_Show_Shop_Products
          products={products}
          productsSlicing={productsSlicing}
          setProductsSlicing={setProductsSlicing}
        />
      </Box>
    </Box>
  );
};

Shopping_Page_Content.propTypes = {
  products: PropTypes.array,
};
