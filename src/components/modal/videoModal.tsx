import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IVideoItem } from "../../@types/carousel";
import ReactPlayer from "react-player";
import { Paper } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface IMyProps {
  open: boolean;
  handleClose: () => void;
  item: IVideoItem;
}

const TransitionsModal: React.FC<IMyProps> = (props: IMyProps) => {
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
        <Box sx={style}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{ backgroundImage: "url('" + props.item.item.img + "')" }}
              className="carouselImg"
            >
              <ReactPlayer
                url={props.item.item.img}
                width="100%"
                height="100%"
                playing={true}
                loop
                className="carouselImg"
                alt={props.item.item.name}
                loading="lazy"
                controls={true}
              />
            </div>
          </Paper>
        </Box>
      </Fade>
    </Modal>
  );
};

export default TransitionsModal;
