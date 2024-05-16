import { Box, TableCell, TableRow, Typography } from "@mui/material";
import { PropTypes } from "prop-types";

export const Payment_Order_List = ({ cartItems }) => {
    
  return (
    <>
      {cartItems.map((item) => {
        return (
          <TableRow
            key={item.id}
            sx={{ border: "1px solid #ccc", my: "20px", py: "5px",}}
          >
            <TableCell sx={{ p: "10px 30px" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
                <Box sx={{ maxWidth: "100px" }}>
                  <img
                    style={{ width: "100%" }}
                    src={item.productColor.default}
                    alt={`product ${item.title}`}
                  />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: "bold", mb: 1}} component={"p"}>
                    {item.productTitle}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1,}}>
                    <Typography sx={{fontSize :"14px"}}>Size :</Typography>
                    <Typography sx={{ fontWeight: "bold",fontSize :"14px" }} component={"span"}>
                      {item.productSize}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </TableCell>

            <TableCell sx={{ textAlign: "center", fontSize :"15px" }}>{item.productQuantity}</TableCell>
            <TableCell sx={{ textAlign: "center", fontSize :"15px" }}>EGP {item.productSale ? item.productSale : item.productPrice}</TableCell>
            <TableCell sx={{ textAlign: "right", fontSize :"15px" }}>EGP {item.productSale ? item.productSale * item.productQuantity : item.productPrice * item.productQuantity}</TableCell>
          </TableRow>
        );
      })}
    </>
  );
};

Payment_Order_List.propTypes = {
  cartItems: PropTypes.array,
};
