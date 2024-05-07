import { useTheme } from "@emotion/react";
import { Box, Container, Typography } from "@mui/material";
import { PropTypes } from "prop-types";

export const Section_Title = ({ title }) => {
  const theme = useTheme();
  return (
    <Box className="section-title" sx={{ mb: "15px" }}>
      <Container maxWidth="xl">
        <Typography
          className="section-title__text"
          component={"h2"}
          sx={{
            color: theme.palette.firstColor.main,
            fontSize: "23px",
            textTransform: "uppercase",
            fontWeight: "bold",
            position: "relative",
          }}
        >
          {title}
        </Typography>
      </Container>
    </Box>
  );
};

Section_Title.propTypes = {
  title: PropTypes.string,
};
