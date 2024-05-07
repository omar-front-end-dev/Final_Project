import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../../RTK/Slices/authSlice";
import { Box, Button } from "@mui/material";
import toast from "react-hot-toast";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";

export const Login = () => {
  const dispatch = useDispatch();
  

  const theme = useTheme();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [setUsers]);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, "Invalid email")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be at most 20 characters")
      .required("Password is required"),
  });

  const handleLogin = (formData) => {
    const findUser = users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );
    if (findUser) {
      dispatch(login(findUser.id));
      toast.success(`Login successfully hello ${findUser.firstName}`);
    } else {
      toast.error("Wrong username or password");
    }
  };

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    await handleLogin(values);
    resetForm();
    setSubmitting(false);
  };

  return (
    <Box className="login-page py-5">
      <Box>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <Field
              className="field"
              type="email"
              placeholder="Enter email"
              name="email"
            />
            <ErrorMessage
              className="error-message"
              name="email"
              component="div"
            />

            <Field
              className="field"
              type="password"
              placeholder="Password"
              name="password"
              required
            />
            <ErrorMessage
              className="error-message"
              name="password"
              component="div"
            />

            <Box>
              {`don't have an account? `}
              <Link
                to={"/account/register"}
                style={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  textDecoration: "underline",
                  color: theme.palette.ThirdColor.main,
                }}
              >
                Create new account
              </Link>
            </Box>

            <Button
              variant="primary"
              type="submit"
              sx={{
                bgcolor: theme.palette.secondaryColor.main,
                color: theme.palette.secondaryTextColor.main,
                "&:hover": {
                  bgcolor: theme.palette.ThirdColor.main,
                  color: theme.palette.secondaryColor.main,
                },
                width: { xs: "100%", sm: "auto" },
                borderRadius: "2px",
                py: "10px",
                mt: "10px",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              Login
            </Button>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
};
