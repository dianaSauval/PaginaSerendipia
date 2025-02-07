import React, { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import Carousel from "react-material-ui-carousel";
import { IVideoItem } from "../../@types/carousel";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import "../carouselVideo/carousel.css";
import "./photos.css";
import { Paper } from "@mui/material";
import { IImages, images } from "../../data";

export default function TitlebarImageList() {
  const { t } = useTranslation(["global"]);    

  return (
    <>
      <Element name="photos" className="photosSection">
        <h1>{t("photosSection.title")}</h1>
        <div className="grid-container">
          {images.map((item) => (
            <div
              key={item.id}
              className={`grid-item ${item.size || ""}`}
              style={{ backgroundImage: `url(${item.url})` }}
              title={`Image ${item.id}`}
            >
              
            </div>
          ))}
        </div> 

        <div className="carouselImages">      
          <Carousel
            navButtonsAlwaysVisible={true}
            fullHeightHover={true}
            navButtonsProps={{
              style: {
                backgroundColor: "#0B0C10",
                borderRadius: "50%",
              },
            }}
            navButtonsWrapperProps={{
              style: {
                bottom: "0",
                top: "unset",
              },
            }}
            NextIcon={<NavigateNextIcon />}
            PrevIcon={<NavigateBeforeIcon />}
          >
            {images.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        </div> 
      </Element>
    </>
  );
}

function Item(props: IImages) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    handlePause();
  };
  const handlePause = () => false;

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: "100%"
      }}
    >
      <div
        onClick={handleOpen}
        style={{ backgroundImage: `url(${props.item.url})` }}
        className="carouselImg"
        title={`Image ${props.item.id}`}
      >
        <span className="sr-only">Photo {props.item.id}</span>
      </div>      
    </Paper>
  );
}


const itemData = [
  {
    img: "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1695418995/dianayjosebaja_11_de_33_kaik2g.jpg",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1695420809/Joseydianabaja_20_de_35_v1ljnh.jpg",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    cols: 2,
  },
];
