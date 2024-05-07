import { Box } from "@mui/material";
import "./Is_Loading.css";

export const Is_Loading = () => {
  return (
    <Box
      sx={{
        color: "#fff",
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundColor: "#fff",
      }}
    >
      <Box
        className="loader"
        sx={{
          color: "#000",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "11111",
        }}
      >
      </Box>
    </Box>
  );
};
