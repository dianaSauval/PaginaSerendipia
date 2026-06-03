import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IVideoItem } from "../../@types/carousel";
import TransitionsModal from "../modal/videoModal";
import "./carousel.css";

const Carousel: React.FC = () => {
  const { t } = useTranslation(["global"]);

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

  const handlePrev = (): void => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = (): void => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const currentVideo = items[currentIndex].item;

  return (
    <section className="videos-section" id="videos">
      <div className="videos-bg-glow" />

      <div className="videos-container">
        <div className="videos-heading">
          <span className="videos-kicker">{t("videosSection.kicker")}</span>

          <h2>{t("videosSection.title")}</h2>

          <p className="videos-subtitle">{t("videosSection.subtitle")}</p>

          <div className="divider" />
        </div>

        <div className="videos-carousel">
          <button
            className="video-arrow video-arrow--left"
            onClick={handlePrev}
            aria-label={t("videosSection.aria.previous")}
            type="button"
          >
            <span className="video-arrow-icon">‹</span>
          </button>

          <article className="video-card">
            <button
              className="video-image"
              style={{ backgroundImage: `url(${currentVideo.img})` }}
              onClick={() => setOpen(true)}
              aria-label={`${t("videosSection.aria.play")} ${currentVideo.name}`}
              type="button"
            >
              <span className="video-image-overlay" />
              <span className="play-button">
                <span />
              </span>
            </button>

            <div className="video-info">
              <h3>{currentVideo.name}</h3>
              <p>{currentVideo.description}</p>
            </div>
          </article>

          <button
            className="video-arrow video-arrow--right"
            onClick={handleNext}
            aria-label={t("videosSection.aria.next")}
            type="button"
          >
            <span className="video-arrow-icon">›</span>
          </button>
        </div>

        <div className="video-dots">
          {items.map((_, index) => (
            <button
              key={index}
              className={`video-dot ${
                index === currentIndex ? "video-dot--active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`${t("videosSection.aria.goTo")} ${index + 1}`}
              type="button"
            />
          ))}
        </div>
      </div>

      <TransitionsModal
        open={open}
        handleClose={() => setOpen(false)}
        item={items[currentIndex]}
      />
    </section>
  );
};

export default Carousel;