import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IVideoItem } from "../../@types/carousel";
import TransitionsModal from "../modal/videoModal";
import { Box, Typography, IconButton, Paper, useMediaQuery } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Carousel: React.FC = () => {
  const { t } = useTranslation(); 
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  
  const items: IVideoItem[] = [
    {
      item: {
        name: t("videoItems.item1.name"),
        description: t("videoItems.item1.description"),
        img: "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1739114710/Duo%20Serendipia/003_1540-NEF_DxO_DeepPRIME_zllfw1.jpg",
        url: "https://www.youtube.com/watch?v=24RFZMiOuS4",
      },
    },
    {
      item: {
        name: t("videoItems.item2.name"),
        description: t("videoItems.item2.description"),
        img: "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1739114883/Duo%20Serendipia/Portada-Youtube2_ry0uzu.jpg",
        url: "https://www.youtube.com/watch?v=x_kkKr7aw68",
      },
    },
    {
      item: {
        name: t("videoItems.item3.name"),
        description: t("videoItems.item3.description"),
        img: "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1739114963/Duo%20Serendipia/received_347491989384500_khimdm.jpg",
        url: "https://www.youtube.com/watch?v=vkMo_b9gA_w",
      },
    },
    {
      item: {
        name: t("videoItems.item4.name"),
        description: t("videoItems.item4.description"),
        img: "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1739115262/Duo%20Serendipia/Di_optimized_lurwtd.jpg",
        url: "https://www.youtube.com/watch?v=XVg7_Y_QAic",
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedVideo, setSelectedVideo] = useState<string>("");

  const handlePrev = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const handleOpenModal = (url: string): void => {
    setSelectedVideo(url);
    setOpen(true);
  };

  const handleCloseModal = (): void => {
    setOpen(false);
  };

  return (
    <Box className="carousel-container" sx={{ width: isMobile ? "100vw" : isTablet ? "85vw" : "70vw", maxWidth: "1200px", margin: "auto", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Typography variant="h2" align="center">{t("videos")}</Typography>
      <IconButton className="arrow" onClick={handlePrev} sx={{ position: "absolute", left: "5%", top: "60%", transform: "translateY(-50%)", transition: "0.3s", zIndex: 2, color: "white", backgroundColor: "rgba(0,0,0,0.5)", '&:hover': { backgroundColor: "rgba(69, 162, 158, 0.8)"} }}>
        <ArrowBackIos />
      </IconButton>

      <Paper className="carousel-slide" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", width: "100%", position: "relative" }}>
        <Box className="carousel-image" sx={{ backgroundImage: `url(${items[currentIndex].item.img})`, width: "100%", height: isMobile ? "50vh" : "70vh", backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
          <Box className="overlay" onClick={() => handleOpenModal(items[currentIndex].item.url)} sx={{ cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
            <YouTubeIcon className="youtube-icon" sx={{ fontSize: isMobile ? 70 : 100, color: "#00FAF1" }} />
          </Box>
          <Box className="text-container" sx={{ position: "absolute", bottom: "0", left: "0", width: "100%", backgroundColor: "rgba(69, 162, 158, 0.8)", padding: 2, textAlign: "center" }}>
            <Typography variant={isMobile ? "h5" : "h3"} color="black">{items[currentIndex].item.name}</Typography>
            <Typography variant="body1" sx={{ color: "black", fontWeight: 600 }}>{items[currentIndex].item.description}</Typography>
          </Box>
        </Box>
      </Paper>

      <IconButton className="arrow" onClick={handleNext} sx={{ position: "absolute", right: "5%", top: "60%", transform: "translateY(-50%)", transition: "0.3s", zIndex: 2, color: "white", backgroundColor: "rgba(0,0,0,0.5)", '&:hover': { backgroundColor: "rgba(69, 162, 158, 0.8)" } }}>
        <ArrowForwardIos />
      </IconButton>

      <TransitionsModal open={open} handleClose={handleCloseModal} item={items[currentIndex]} />
    </Box>
  );
};

export default Carousel;
