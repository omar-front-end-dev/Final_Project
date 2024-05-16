import { Box, Button } from "@mui/material";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";



export const Register = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [setUsers]);
  
  const registerUser = async (userData) => {  
    const userExists = users.find(
      (user) => user.email === userData.email
    );
  
    if (!userExists) {
      try {
        await axios.post("http://localhost:3000/users", {...userData, cart: [], favorites: []});
        toast.success("User registered successfully");
        const navigateInterval = setInterval(() => {
          navigate("/account/login");
          clearInterval(navigateInterval);
        }, 2000);
      } catch (error) {
        toast.error("Error registering user. Please try again later.");
      }
    } else {
      toast.error("User already exists");
    }
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First Name is required")
      .min(3, "First Name must be at least 3 characters")
      .max(8, "First Name must be at most 8 characters"),
    lastName: Yup.string()
      .required("Last Name is required")
      .min(3, "Last Name must be at least 3 characters")
      .max(8, "Last Name must be at most 8 characters"),
    email: Yup.string()
      .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, "Invalid email")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be at most 20 characters")
      .required("Password is required"),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    await registerUser(values);
    resetForm();
    setSubmitting(false);
  };

  return (
    <Box>
      <Box>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <Field
              className="field"
              type="text"
              name="firstName"
              placeholder="First Name"
            />
            <ErrorMessage
              className="error-message"
              name="firstName"
              component="div"
            />

            <Field
              className="field"
              type="text"
              name="lastName"
              placeholder="Last Name"
            />
            <ErrorMessage
              className="error-message"
              name="lastName"
              component="div"
            />

            <Field
              className="field"
              type="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage
              className="error-message"
              name="email"
              component="div"
            />

            <Field
              className="field"
              type="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage
              className="error-message"
              name="password"
              component="div"
            />

            <Button
              variant="contained"
              sx={{
                bgcolor: theme.palette.secondaryColor.main,
                color: theme.palette.secondaryTextColor.main,
                "&:hover": {
                  bgcolor: theme.palette.ThirdColor.main,
                  color: theme.palette.secondaryColor.main,
                },
                width: {xs: "100%", sm: "auto"},
                borderRadius: "2px",
                py: "10px",
                mt: "10px",
                fontSize: "15px",
                fontWeight: "bold",
              }}
              type="submit"
            >
              Create account
            </Button>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
};
