import { useTheme } from "@emotion/react";
import { IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export const Scroll_To_Top = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 150,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {scrollPosition > 450 && (
        <IconButton
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: "25px",
            right: "20px",
            zIndex: "999",
            width: "40px",
            height: "40px",
            bgcolor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #ccc",
            color: theme.palette.firstColor.main,
            "&:hover": {bgcolor: "#fff"},
          }}
        >
          <FaArrowUp size={"15"} />
        </IconButton>
      )}
    </div>
  );
};
