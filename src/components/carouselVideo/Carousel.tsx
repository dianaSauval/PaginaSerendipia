import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import foto1 from "../img/ACRODUO 31-10-22 26.jpg";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import "./carousel.css";
import ReactPlayer from "react-player";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import TransitionsModal from "../modal/videoModal";
import { IVideoItem } from "../../@types/carousel";

export default function CarouselExample(props: any) {
  const { t } = useTranslation(["global"]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  var items = [
    {
      name: `${t("videoItems.item1.name")}`,
      description: `${t("videoItems.item1.description")}`,
      img: "https://www.youtube.com/watch?v=24RFZMiOuS4",
    },
    {
      name: `${t("videoItems.item2.name")}`,
      description: `${t("videoItems.item2.description")}`,
      img: "https://www.youtube.com/watch?v=x_kkKr7aw68",
    },
    {
      name: `${t("videoItems.item3.name")}`,
      description: `${t("videoItems.item3.description")}`,
      img: "https://www.youtube.com/watch?v=vkMo_b9gA_w",
    },
    {
      name: `${t("videoItems.item4.name")}`,
      description: `${t("videoItems.item4.description")}`,
      img: "https://www.youtube.com/watch?v=XVg7_Y_QAic",
    }
  ];

  return (
    <Element name="videos" className="videoContent">
      <div>
        <h1>Videos</h1>
        <Carousel
          navButtonsAlwaysVisible={true}
          fullHeightHover={true} // We want the nav buttons wrapper to only be as big as the button element is
          navButtonsProps={{
            // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
            style: {
              backgroundColor: "#0B0C10",
              borderRadius: "50%",
            },
          }}
          navButtonsWrapperProps={{
            // Move the buttons to the bottom. Unsetting top here to override default style.
            style: {
              bottom: "0",
              top: "unset",
            },
          }}
          NextIcon={<NavigateNextIcon />} // Change the "inside" of the next button to "next"
          PrevIcon={<NavigateBeforeIcon />}
        >
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </div>
    </Element>
  );
}

function Item(props: IVideoItem) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    handlePause();
  };
  const handlePause = () => {
    return false;
  };
  return (
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
        onClick={handleOpen}
        style={{ backgroundImage: "url('" + props.item.img + "')" }}
        className="carouselImg"
      >
        <ReactPlayer
          onPlay={handleOpen}
          onStart={handleOpen}
          url={props.item.img}
          width="100%"
          height="100%"
          playing={open}          
          muted
          loop
          pip
          className="carouselImg"
          alt={props.item.name}          
        />
        <div className="dppal">
          <div className="dtexto">
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
          </div>
          <div className="dfondo"></div>
        </div>
      </div>
      <TransitionsModal open={open} handleClose={handleClose} item={props} />
    </Paper>
  );
}
 
