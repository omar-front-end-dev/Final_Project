import { Box } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";
import { Countries_And_Governorate } from "./Countries_And_Governorate.js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateCartData, removeAll } from "../../../../RTK/Slices/cartSlice.js"
export const Client_Info_The_Required = ({
  userInfo,
  isCompletedOrder,
  setInitialValues,
  initialValues,
  cartItems,
}) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const formikRef = useRef(null);
  const dispatch = useDispatch();
  const { userId } = useSelector(state => state.authReducer);    


  useEffect(() => {
    if (userInfo) {
      setInitialValues({
        firstName: userInfo.firstName || "",
        lastName: userInfo.lastName || "",
        email: userInfo.email || "",
        phone: "",
        country: selectedCountry || "",
        city: "",
        addressLine1: "",
        addressLine2: "",
        OrderItem: cartItems,
      });
    }
  }, [cartItems, selectedCountry, setInitialValues, userInfo]);

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("First Name is required")
      .min(2, "First Name must be at least 2 characters"),
    lastName: Yup.string()
      .required("Last Name is required")
      .min(2, "Last Name must be at least 2 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
    phone: Yup.string()
      .typeError("Phone number must be a number")
      .required("Phone is required")
      .max(14, "Invalid Phone Number")
      .min(5, "Invalid Phone Number"),
    country: Yup.string().required("Country is required"),
    city: Yup.string().required("City is required"),
    addressLine1: Yup.string()
      .required("Address Line 1 is required")
      .min(
        6,
        "The minimum number of characters for the Address Line 1 is eight letters"
      ),
    addressLine2: Yup.string()
      .required("Address Line 2 is required")
      .min(
        6,
        "The minimum number of characters for the Address Line 2 is eight letters"
      ),
  });

  const postOrderData = async (data) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post("http://localhost:3000/orders", data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  useEffect(() => {
    if (isCompletedOrder === "COMPLETED" && isCompletedOrder !== "") {
      formikRef.current.submitForm();
    }
  }, [isCompletedOrder]);

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    await postOrderData(values);
    dispatch(updateCartData({ id: userId, cart: [] }));
    dispatch(removeAll());
    resetForm();
    setSubmitting(false);
  };

  return (
    <Box>
      <Formik
        innerRef={formikRef}
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label>First Name</label>
            <Field
              className="field"
              name="firstName"
              type="text"
              placeholder="First Name"
            />
            <ErrorMessage
              className="error-message"
              name="firstName"
              component="div"
            />
          </div>
          <div>
            <label>Last Name</label>
            <Field
              className="field"
              name="lastName"
              type="text"
              placeholder="Last Name"
            />
            <ErrorMessage
              className="error-message"
              name="lastName"
              component="div"
            />
          </div>
          <div>
            <label>Email</label>
            <Field
              className="field"
              name="email"
              type="email"
              placeholder="Email"
            />
            <ErrorMessage
              className="error-message"
              name="email"
              component="div"
            />
          </div>
          <div>
            <label>Country</label>
            <Field
              as="select"
              name="country"
              className="field"
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="Select Country" label="Select Country" />
              {Countries_And_Governorate.map((country) => (
                <option
                  key={country.country}
                  value={country.country}
                  label={country.country}
                />
              ))}
            </Field>
            <ErrorMessage
              className="error-message"
              name="country"
              component="div"
            />
          </div>
          <div>
            <label>City</label>
            <Field as="select" name="city" className="field">
              <option value="Select City" label="Select City"></option>
              {selectedCountry &&
                Countries_And_Governorate.find(
                  (country) => country.country === selectedCountry
                )?.states.map((city) => (
                  <option key={city} value={city} label={city} />
                ))}
            </Field>
            <ErrorMessage
              className="error-message"
              name="city"
              component="div"
            />
          </div>
          <div>
            <label>Address Line 1</label>
            <Field
              className="field"
              name="addressLine1"
              type="text"
              placeholder="House number and Street"
            />
            <ErrorMessage
              className="error-message"
              name="addressLine1"
              component="div"
            />
          </div>
          <div>
            <label>Address Line 2</label>
            <Field
              className="field"
              name="addressLine2"
              type="text"
              placeholder="Zone, Apartment, Suite, Floor etc."
            />
            <ErrorMessage
              className="error-message"
              name="addressLine2"
              component="div"
            />
          </div>
          <div>
            <label>Mobile Phone</label>
            <Field
              className="field"
              name="phone"
              type="number"
              placeholder="Phone Number"
            />
            <ErrorMessage
              className="error-message"
              name="phone"
              component="div"
            />
          </div>
        </Form>
      </Formik>
    </Box>
  );
};

Client_Info_The_Required.propTypes = {
  userInfo: PropTypes.object,
  isCompletedOrder: PropTypes.string,
  setInitialValues: PropTypes.func,
  initialValues: PropTypes.object,
  cartItems: PropTypes.array,
};
