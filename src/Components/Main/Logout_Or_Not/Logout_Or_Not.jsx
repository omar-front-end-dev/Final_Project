/* eslint-disable react-refresh/only-export-components */
import { forwardRef } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Slide,
  Box,
} from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { PropTypes } from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { logout, logoutDialog } from "../../../RTK/Slices/authSlice";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Logout_Or_Not = ({ toggleDrawer }) => {
  const theme = useTheme();
  const { open, isAuth } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/account/login");
    dispatch(logoutDialog(false));
  };
  const handleClickOpen = () => {
    dispatch(logoutDialog(true));
  };

  const handleClose = () => {
    dispatch(logoutDialog(false));
  };
  return (
    <>
      <Button
        className="header-user__bottom-logout"
        onClick={handleClickOpen}
        sx={{
          display: isAuth ? "block" : "none",
          width: "100%",
          color: theme.palette.secondaryTextColor.main,
          backgroundColor: theme.palette.secondaryColor.main,
          padding: "10px 0",
          fontWeight: "bold",
          letterSpacing: "2px",
          borderRadius: "2px",
          "&:hover": {
            color: theme.palette.secondaryColor.main,
            backgroundColor: theme.palette.ThirdColor.main,
          },
        }}
      >
        Logout
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => {handleClose(); toggleDrawer("right", false);}}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, p: "15px" }}>
          <DialogTitle
            sx={{
              p: "0",
              fontSize: { xs: "15px", sm: "18px" },
              textTransform: "capitalize",
            }}
          >
            {"Are you sure you want to logout ?"}
          </DialogTitle>
          <ErrorOutlineIcon color="error" />
        </Box>

        <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            sx={{
              bgcolor: theme.palette.firstColor.main,
              color: theme.palette.secondaryTextColor.main,
              fontWeight: "bold",
              fontSize: "15px",
              p: "5px 20px",
              "&:hover": { bgcolor: "#262626" },
              borderRadius: "2px"
            }}
            onClick={handleClose}
          >
            cancel
          </Button>
          <Button
            sx={{
              bgcolor: theme.palette.ThirdColor.main,
              color: theme.palette.secondaryColor.main,
              fontWeight: "bold",
              fontSize: "15px",
              p: "5px 20px",
              "&:hover": { bgcolor: "#bca583" },
              borderRadius: "2px"
            }}
            onClick={handleLogout}
          >
            agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

Logout_Or_Not.propTypes = {
  toggleDrawer: PropTypes.func,
};
