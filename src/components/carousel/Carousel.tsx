import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import foto1 from "../img/ACRODUO 31-10-22 26.jpg";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import "./carousel.css";
import ReactPlayer from "react-player";

export default function CarouselExample(props: any) {
  var items = [
    {
      name: "Al Compás del Pivot",
      description: "Número de Tango y Rueda Cyr",
      img: "https://www.youtube.com/watch?v=24RFZMiOuS4",
    },
    {
      name: "Contraparte",
      description: "Número de Acrobacia en dúo",
      img: "https://www.youtube.com/watch?v=x_kkKr7aw68",
    },
    {
      name: "Bruno Mars",
      description: "Número de Rueda Cyr de José Figueroa",
      img: "https://www.youtube.com/watch?v=vkMo_b9gA_w",
    },
  ];

  return (
    <div
      style={{
        width: "60%",
      }}
    >
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
  );
}

function Item(props: any) {
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
        style={{ backgroundImage: "url('" + props.item.img + "')" }}
        className="carouselImg"
      >
        <ReactPlayer
          url={props.item.img}
          width="100%"
          height="100%"
          playing={false}
          loop
          muted
          className="carouselImg"
          alt={props.item.name}
          loading="lazy"
        />
        <div className="dppal">
          <div className="dtexto">
          <h2>{props.item.name}</h2>
          <p>{props.item.description}</p>
          </div>
          <div className="dfondo"></div>
        </div>
      </div>
    </Paper>
  );
}