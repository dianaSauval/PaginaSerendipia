import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import "./photos.css";

export default function TitlebarImageList() {
  const { t } = useTranslation(["global"]);
  function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  return (
    <>
      <Element name="photos" className="photosSection">
        <h1>{t("photosSection.title")}</h1>
        {/* <img src="https://res.cloudinary.com/dkdhdy9e5/image/upload/v1695418995/dianayjosebaja_11_de_33_kaik2g.jpg"/> */}
        {/*         <div className="wrap">
        <div className="galeria">
            <div className="imagen elemento1"><img src="https://res.cloudinary.com/dkdhdy9e5/image/upload/v1695418995/dianayjosebaja_11_de_33_kaik2g.jpg" alt=""/></div>
            <div className="imagen elemento2"><img src="https://res.cloudinary.com/dkdhdy9e5/image/upload/v1695420809/Joseydianabaja_20_de_35_v1ljnh.jpg" alt=""/></div>
            <div className="imagen elemento3"><img src="https://res.cloudinary.com/dkdhdy9e5/image/upload/v1695421629/ACRODUO_31-10-22_31_mhoqo8.jpg" alt=""/></div>
            <div className="imagen elemento4"><img src="https://res.cloudinary.com/dkdhdy9e5/image/upload/v1695435129/003_1404-NEF_DxO_DeepPRIME_hjh8mk.jpg" alt=""/></div>
            <div className="imagen elemento5"><img src="https://res.cloudinary.com/dkdhdy9e5/image/upload/v1695418995/dianayjosebaja_11_de_33_kaik2g.jpg" alt=""/></div>
            <div className="imagen elemento6"><img src="https://res.cloudinary.com/dkdhdy9e5/image/upload/v1695418995/dianayjosebaja_11_de_33_kaik2g.jpg" alt=""/></div>
            <div className="imagen elemento7"><img src="https://res.cloudinary.com/dkdhdy9e5/image/upload/v1695418995/dianayjosebaja_11_de_33_kaik2g.jpg" alt=""/></div>
            <div className="imagen elemento8"><img src="/img/8.jpg" alt=""/></div>
            <div className="imagen elemento9"><img src="/img/9.jpg" alt=""/></div>
            <div className="imagen elemento10"><img src="/img/10.jpg" alt=""/></div>
            <div className="imagen elemento11"><img src="/img/11.jpg" alt=""/></div>
            <div className="imagen elemento12"><img src="/img/12.jpg" alt=""/></div>
        </div>
    </div> */}
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
     {/*    <ImageList
          sx={{ width: 800, height: 700 }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList> */}
      </Element>
    </>
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
