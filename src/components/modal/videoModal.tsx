import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IVideoItem } from "../../@types/carousel";
import ReactPlayer from "react-player";
import { Paper, useMediaQuery } from "@mui/material";

interface IMyProps {
  open: boolean;
  handleClose: () => void;
  item: IVideoItem;
}

const TransitionsModal: React.FC<IMyProps> = (props: IMyProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.open}
      onClose={props.handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={props.open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: isMobile ? "95%" : isTablet ? "85%" : "80%",
            maxWidth: "1200px",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 2,
          }}
        >
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: isMobile ? "45vh" : "85vh",
            }}
          >
            <ReactPlayer
              url={props.item.item.url}
              width="100%"
              height="100%"
              playing={true}
              loop
              controls={true}
            />
          </Paper>
        </Box>
      </Fade>
    </Modal>
  );
};

export default TransitionsModal;
