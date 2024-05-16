import { useTheme } from "@emotion/react";
import { Box, Container } from "@mui/material";
import { Bread_Crumbs, Is_Loading } from "../../Components/Main";
import { Payment_Content } from "../../Components/Main/index";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useGetData } from "../../Hooks/useGetData";
import "./Payment_Page.css"
import { Payment_Empty } from "../../Components/Main/Payment_Content/Payment_Components/Payment_Empty";

export const Payment_Page = () => {
  const theme = useTheme();
  const { userId } = useSelector((state) => state.authReducer);
  const { dataName, isLoading } = useGetData(
    `http://localhost:3000/users?id=${userId}`
  );
  const [userInfo, setUserInfo] = useState({});
  const { cartItems } = useSelector(state => state.cartReducer);


  useEffect(() => {
    if (dataName.length) {
      setUserInfo(dataName[0]);
    }
  }, [dataName]);
  const pathName = [
    { linkName: "My Account", linkTo: "/account/login" },
    { linkName: "payment page", linkTo: "/account/payment-page" },
  ];

  return (
    <Box sx={{ py: theme.palette.sectionPadding.main }}>
      {isLoading ? (
        <Is_Loading />
      ) : (
        <>
          <Box>
            <Container maxWidth="xl">
              <Bread_Crumbs pathName={pathName} />
            </Container>
          </Box>
          <Box>
            <Container maxWidth="lg">
              {cartItems.length == 0 ? <Payment_Empty/> : <PayPalScriptProvider
                options={{
                  "client-id":
                    "ATt2NUQAHAcFGUxV6pyLnq9ZTrZkAnjYf5tFAkor98oSh4nSj2lWEl-b-WbUld6vPpG7bQN3d2jZ4sBZ",
                }}
              >
                <Payment_Content cartItems={cartItems} userInfo={userInfo}/>
              </PayPalScriptProvider>}
            </Container>
          </Box>
        </>
      )}
    </Box>
  );
};
