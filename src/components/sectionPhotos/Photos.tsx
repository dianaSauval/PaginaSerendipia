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
          <div
            className="grid-item tall"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dkdhdy9e5/image/upload/v1695421629/ACRODUO_31-10-22_31_mhoqo8.jpg')",
            }}
          ></div>
          <div
            className="grid-item"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dkdhdy9e5/image/upload/v1695418995/dianayjosebaja_11_de_33_kaik2g.jpg')",
            }}
          ></div>

          <div
            className="grid-item wide"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dkdhdy9e5/image/upload/v1695420809/Joseydianabaja_20_de_35_v1ljnh.jpg')",
            }}
          ></div>
          <div
            className="grid-item"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dkdhdy9e5/image/upload/v1695563522/006_8389-dng_DxO_DeepPRIME_fic9vs.jpg')",
            }}
          ></div>
          <div
            className="grid-item"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dkdhdy9e5/image/upload/v1695435129/003_1404-NEF_DxO_DeepPRIME_hjh8mk.jpg')",
            }}
          ></div>
          <div
            className="grid-item"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dkdhdy9e5/image/upload/v1695563570/003_1540-NEF_DxO_DeepPRIME_ysownn.jpg')",
            }}
          ></div>
          <div
            className="grid-item"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dkdhdy9e5/image/upload/v1695563569/003_1433-NEF_DxO_DeepPRIME_zfnyd0.jpg')",
            }}
          ></div>
          <div
            className="grid-item tall"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dkdhdy9e5/image/upload/v1695563413/received_347491989384500_zyhb0n.jpg')",
            }}
          ></div>
          <div
            className="grid-item tall wide"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dkdhdy9e5/image/upload/v1695563523/006_8422-dng_DxO_DeepPRIME_hicrlw.jpg')",
            }}
          ></div>
          <div
            className="grid-item"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dkdhdy9e5/image/upload/v1695563569/003_1474-NEF_DxO_DeepPRIME_lddhbb.jpg')",
            }}
          ></div>
          <div
            className="grid-item"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dkdhdy9e5/image/upload/v1695564299/003_1580-NEF_DxO_DeepPRIME_wk7vhh.jpg')",
            }}
          ></div>
          <div
            className="grid-item"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dkdhdy9e5/image/upload/v1695563571/003_1476-NEF_DxO_DeepPRIME_uq1ukm.jpg')",
            }}
          ></div>
          <div
            className="grid-item tall"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dkdhdy9e5/image/upload/v1695563480/received_432722487264929_lxksio.jpg')",
            }}
          ></div>
          <div
            className="grid-item tall"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dkdhdy9e5/image/upload/v1695565377/dianayjosebaja_13_de_33_b5sb0x.jpg')",
            }}
          ></div>
          <div
            className="grid-item tall"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dkdhdy9e5/image/upload/v1695565377/dianayjosebaja_8_de_33_h3wt1a.jpg')",
            }}
          ></div>
        </div> 
        <div className="carouselImages">      
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
        width: "100%"
      }}
    >
      <div
        onClick={handleOpen}
        style={{ backgroundImage: "url('" + props.item.url + "')" }}
        className="carouselImg"
      >       
        
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
