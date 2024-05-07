import { Box, IconButton } from "@mui/material";
import { PropTypes } from "prop-types";
import { useState } from "react";
import { VscMute } from "react-icons/vsc";
import { VscUnmute } from "react-icons/vsc";
export const Video_Player = ({ urlVideo }) => {
  const [isMuted, setIsMuted] = useState(true);


  function toggleSound(e) {
    e.stopPropagation()
    setIsMuted(!isMuted)
  }

  return (
    <Box sx={{ position: "relative", width:"100%" }}>
      <video width="100%" autoPlay loop muted={isMuted}>
        <source src={`${urlVideo}.mp4`} type="video/mp4" />
        <source src={`${urlVideo}.ogg`} type="video/ogg" />

      </video>
        <IconButton
        onClick={(e) => toggleSound(e)}
          sx={{
            position: "absolute",
            zIndex: "114",
            bottom: {xs: "50px", sm: "40px", md: "30px"},
            right: {xs: "20px", md: "20px"},
            width: "40px",
            height: "40px",
            bgcolor: "#fff",
            color: "#000",
            fontSize: "20px",
            "&:hover": {bgcolor: "#ccc"}
          }}
        >
          {isMuted ? <VscMute /> : <VscUnmute/>}
        </IconButton>
    </Box>
  );
};

Video_Player.propTypes = {
  urlVideo: PropTypes.string,
};
