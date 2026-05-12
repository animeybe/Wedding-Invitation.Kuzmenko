import { useState, useRef, useEffect } from "react";
import "./Gallery.scss";

const photos = [
  { src: "/images/_1.jpg", alt: "Иван и Мария в парке" },
  { src: "/images/_2.jpg", alt: "Предложение" },
  { src: "/images/_1.jpg", alt: "Совместное путешествие" },
  { src: "/images/_2.jpg", alt: "На закате" },
  { src: "/images/_1.jpg", alt: "Смеёмся вместе" },
  { src: "/images/_2.jpg", alt: "Обручальные кольца" },
];

export const Gallery = () => {
  const [visible, setVisible] = useState<number[]>(() =>
    photos.map((_, i) => i),
  );
  const [animating, setAnimating] = useState<"forward" | "backward" | null>(
    null,
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const animRef = useRef(false);
  const indexRef = useRef(0);

  useEffect(() => {
    animRef.current = animating !== null;
  }, [animating]);
  useEffect(() => {
    indexRef.current = currentIndex;
  }, [currentIndex]);

  const next = () => {
    if (animRef.current) return;
    if (visible.length <= 1) {
      setAnimating("forward");
      setTimeout(() => {
        setVisible(photos.map((_, i) => i));
        setCurrentIndex(0);
        setAnimating(null);
      }, 500);
      return;
    }
    setAnimating("forward");
    const newIndex = indexRef.current + 1;
    setCurrentIndex(newIndex);
    setTimeout(() => {
      setVisible((prev) => prev.slice(0, -1));
      setAnimating(null);
    }, 500);
  };

  const prev = () => {
    if (animRef.current) return;
    const lastVisible = visible[visible.length - 1];
    const prevPhoto = lastVisible - 1;
    if (prevPhoto < 0) return;

    setAnimating("backward");
    setTimeout(() => {
      setVisible((prev) => [...prev, prevPhoto]);
      setCurrentIndex(prevPhoto);
      setAnimating(null);
    }, 500);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (animRef.current) return;
      if (visible.length <= 1) {
        setAnimating("forward");
        setTimeout(() => {
          setVisible(photos.map((_, i) => i));
          setCurrentIndex(0);
          setAnimating(null);
        }, 500);
        return;
      }
      setAnimating("forward");
      setCurrentIndex((prev) => prev + 1);
      setTimeout(() => {
        setVisible((prev) => prev.slice(0, -1));
        setAnimating(null);
      }, 500);
    }, 4000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [visible.length]);

  const topCard = visible[visible.length - 1];
  const secondCard = visible[visible.length - 2];

  const getOffset = (i: number) => {
    const pos = visible.indexOf(i);
    if (pos === -1) return 0;
    return (visible.length - 1 - pos) * 5;
  };

  const getRotation = (i: number) => {
    const rotations = [-3, 1, -2, 4, -1, 2];
    return rotations[i % rotations.length];
  };

  return (
    <section className="gallery" id="gallery">
      <div className="gallery__container">
        <h2 className="gallery__title">Наши счастливые моменты</h2>
        <p className="gallery__subtitle">
          Каждый снимок — маленькая история нашей любви
        </p>

        <div className="gallery__table">
          <div className="gallery__table-texture" />

          <div className="gallery__stack">
            {photos.map((photo, index) => {
              const isInStack = visible.includes(index);
              const isTop = index === topCard;
              const rotation = getRotation(index);
              const offset = getOffset(index);
              const isLeaving = isTop && animating === "forward";
              const isEntering =
                index === secondCard && animating === "backward" && isInStack;

              return (
                <div
                  key={index}
                  className={`gallery__card ${
                    isLeaving ? "gallery__card--leaving" : ""
                  } ${isEntering ? "gallery__card--entering" : ""}`}
                  style={{
                    zIndex: isInStack ? visible.indexOf(index) + 1 : 0,
                    transform: isInStack
                      ? `translateY(${offset}px) rotate(${rotation}deg)`
                      : "translateY(0) rotate(0deg)",
                    opacity: isInStack ? 1 : 0,
                    pointerEvents: isTop ? "auto" : "none",
                    transition: animating
                      ? "transform 0.5s ease, opacity 0.5s ease"
                      : "transform 0.3s ease",
                  }}>
                  <div className="gallery__card-inner">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="gallery__image"
                      draggable="false"
                    />
                    <div className="gallery__caption">{photo.alt}</div>
                  </div>
                </div>
              );
            })}

            {visible.length > 0 && (
              <div className="gallery__counter">
                {visible.length} / {photos.length}
              </div>
            )}
          </div>
        </div>

        <div className="gallery__controls">
          <button
            className="gallery__btn"
            onClick={prev}
            disabled={animating !== null || topCard === 0}>
            ‹
          </button>

          <div className="gallery__dots">
            {photos.map((_, index) => (
              <button
                key={index}
                className={`gallery__dot ${index === currentIndex ? "gallery__dot--active" : ""}`}
              />
            ))}
          </div>

          <button
            className="gallery__btn"
            onClick={next}
            disabled={animating !== null}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
};
