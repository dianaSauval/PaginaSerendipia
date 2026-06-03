import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import { images, type PhotoItem } from "../../data/imagenes";
import "./photos.css";

export default function Photos() {
  const { t } = useTranslation(["global"]);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const selectedImage =
    selectedImageIndex !== null ? images[selectedImageIndex] : null;

  const handlePrev = (): void => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (): void => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleModalPrev = (): void => {
    setSelectedImageIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  };

  const handleModalNext = (): void => {
    setSelectedImageIndex((prev) => {
      if (prev === null) return null;
      return prev === images.length - 1 ? 0 : prev + 1;
    });
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setSelectedImageIndex(null);
      }

      if (selectedImageIndex !== null && event.key === "ArrowLeft") {
        handleModalPrev();
      }

      if (selectedImageIndex !== null && event.key === "ArrowRight") {
        handleModalNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageIndex]);

  return (
    <Element name="photos" className="photos-section">
      <div className="photos-bg-glow" />

      <div className="photos-container">
        <div className="photos-heading">
          <span className="photos-kicker">Gallery</span>
          <h2>{t("photosSection.title")}</h2>
          <div className="divider" />
        </div>

        {/* DESKTOP */}
        <div className="photos-grid">
          {images.map((item: PhotoItem, index: number) => (
            <button
              key={item.id}
              type="button"
              className={`photo-card photo-card--${item.layout || "medium"}`}
              style={
                {
                  backgroundImage: `url(${item.url})`,
                  backgroundPosition: item.position || "center",
                  "--photo-delay": `${index * 0.08}s`,
                } as React.CSSProperties
              }
              onClick={() => setSelectedImageIndex(index)}
              aria-label={`Open photo ${item.id}`}
            >
              <span className="photo-card-overlay" />
              <span className="photo-card-glow" />
            </button>
          ))}
        </div>

        {/* MOBILE */}
        <div className="photos-mobile-carousel">
          <button
            type="button"
            className="photos-mobile-arrow photos-mobile-arrow--left"
            onClick={handlePrev}
            aria-label="Previous photo"
          >
            ‹
          </button>

          <div
            className="photos-mobile-image"
            style={{
              backgroundImage: `url(${images[currentIndex].url})`,
              backgroundPosition: images[currentIndex].position || "center",
            }}
            onClick={() => setSelectedImageIndex(currentIndex)}
          >
            <span className="photos-mobile-overlay" />
          </div>

          <button
            type="button"
            className="photos-mobile-arrow photos-mobile-arrow--right"
            onClick={handleNext}
            aria-label="Next photo"
          >
            ›
          </button>

          <div className="photos-mobile-dots">
            {images.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`photos-mobile-dot ${
                  index === currentIndex ? "photos-mobile-dot--active" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to photo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* MODAL / LIGHTBOX */}
      {selectedImage && (
        <div
          className="photo-modal"
          onClick={() => setSelectedImageIndex(null)}
        >
          <button
            type="button"
            className="photo-modal-close"
            onClick={() => setSelectedImageIndex(null)}
            aria-label="Close image"
          >
            ×
          </button>

          <button
            type="button"
            className="photo-modal-arrow photo-modal-arrow--left"
            onClick={(event) => {
              event.stopPropagation();
              handleModalPrev();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <img
            src={selectedImage.url}
            alt={`Dúo Serendipia photo ${selectedImage.id}`}
            className="photo-modal-img"
            onClick={(event) => event.stopPropagation()}
          />

          <button
            type="button"
            className="photo-modal-arrow photo-modal-arrow--right"
            onClick={(event) => {
              event.stopPropagation();
              handleModalNext();
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </Element>
  );
}