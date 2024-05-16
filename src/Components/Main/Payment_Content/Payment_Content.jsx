import { useTheme } from "@emotion/react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { Payment_Order_List } from "./Payment_Components/Payment_Order_List";
import { PropTypes } from "prop-types";
import { Payment_Additional_Costs_And_Total } from "./Payment_Components/Payment_Additional_Costs_And_Total";
import { Client_Info_The_Required } from "./Payment_Components/Client_Info_The_Required";
import { useEffect, useState } from "react";
import { Payment_Receipt } from "./Payment_Components/Payment_Receipt";

export const Payment_Content = ({ cartItems, userInfo }) => {
  const [isCompletedOrder, setIsCompletedOrder] = useState("");
  const theme = useTheme();
  const [initialValues, setInitialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    addressLine1: "",
    addressLine2: "",
  });
  const [formValues, setFormValues] = useState(false);

  useEffect(() => {
    if (
      initialValues.firstName !== "" &&
      initialValues.lastName !== "" &&
      initialValues.email !== "" &&
      initialValues.phone !== "" &&
      initialValues.country !== "" &&
      initialValues.city !== "" &&
      initialValues.addressLine1 !== "" &&
      initialValues.addressLine2 !== ""
    ) {
      setFormValues(true);
    }
  }, [initialValues]);

  console.log(formValues);

  const Calculate_Shopping_Cost = (cost) => {
    const totalCosts = cartItems
      .reduce((accumulator, currentValue) => {
        const productPrice = currentValue.productSale
          ? parseFloat(currentValue.productSale)
          : parseFloat(currentValue.productPrice);
        return accumulator + productPrice * currentValue.productQuantity;
      }, cost)
      .toFixed(3);

    return totalCosts;
  };

  const totalDutiesAndTaxes =
    cartItems.reduce((accumulator, currentValue) => {
      return currentValue.productQuantity + accumulator;
    }, 0) * 2000;

  let shoppingCostString = Calculate_Shopping_Cost(0.1).split(".").join("");
  let totalTransactions = parseFloat(shoppingCostString);
  let calc_Shopping_Cost_And_TotalItems =
    totalTransactions + totalDutiesAndTaxes;

  const createOrder = (data, actions) => {
    return actions.order.create({
      intent: "CAPTURE",
      purchase_units: [
        {
          description: "Cool looking table",
          amount: {
            currency_code: "USD",
            value: calc_Shopping_Cost_And_TotalItems,
          },
        },
      ],
    });
  };

  const onApprove = async (data, actions) => {
    const order = await actions.order.capture();
    setIsCompletedOrder(order.status);
  };

  const onError = (err) => {
    console.log(err);
  };

  return (
    <Box>
      <Box sx={{ pb: theme.palette.sectionPadding.main }}>
        <TableContainer
          sx={{ overflowX: "auto", color: theme.palette.firstColor.main }}
        >
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      color: theme.palette.firstColor.main,
                    }}
                  >
                    ORDER SUMMARY
                  </Typography>
                </TableCell>

                <TableCell
                  sx={{
                    px: 0,
                    textAlign: "center",
                    color: theme.palette.firstColor.main,
                  }}
                >
                  Quantity
                </TableCell>
                <TableCell sx={{ px: 0, textAlign: "center" }}>Price</TableCell>
                <TableCell sx={{ textAlign: "right" }}>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <Payment_Order_List cartItems={cartItems} />
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box>
        <Payment_Additional_Costs_And_Total
          totalDutiesAndTaxes={totalDutiesAndTaxes}
          Calculate_Shopping_Cost={Calculate_Shopping_Cost}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: "20px",
          color: theme.palette.firstColor.main,
        }}
      >
        <Typography
          sx={{ fontSize: "20px", fontWeight: "bold" }}
          component={"h2"}
        >
          DELIVERY ADDRESS
        </Typography>
        <Typography
          sx={{ fontSize: "20px", fontWeight: "bold" }}
          component={"h2"}
        >
          RECEIPT
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
          flexDirection: { xs: "column", md: "row" },
          position: "relative",
        }}
      >
        <Box sx={{ flexBasis: { xs: "100%", md: "45%" } }}>
          <Client_Info_The_Required
            userInfo={userInfo}
            isCompletedOrder={isCompletedOrder}
            initialValues={initialValues}
            setInitialValues={setInitialValues}
          />
        </Box>
        <Box sx={{ flexBasis: { xs: "100%", md: "55%" } }}>
          <Box sx={{ mb: "20px" }}>
            <Payment_Receipt
              totalDutiesAndTaxes={totalDutiesAndTaxes}
              Calculate_Shopping_Cost={Calculate_Shopping_Cost}
              calc_Shopping_Cost_And_TotalItems={
                calc_Shopping_Cost_And_TotalItems
              }
            />
          </Box>
          <Box>
            <PayPalButtons
              createOrder={createOrder}
              onApprove={onApprove}
              onError={onError}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

Payment_Content.propTypes = {
  cartItems: PropTypes.array,
  userInfo: PropTypes.object,
};
