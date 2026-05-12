import { wedding } from "../../shared/utils/wedding";
import "./Hero.scss";

const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day} • ${month} • ${year}`;
};

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__pretitle">С любовью и радостью</p>
        <h1 className="hero__names">
          {wedding.groom} <span className="ampersand">&</span> {wedding.bride}
        </h1>
        <div className="hero__date">{formatDate(wedding.date)}</div>
        <p className="hero__subtitle">
          Мы приглашаем вас разделить с нами этот день
        </p>
      </div>
      <div className="hero__scroll-hint">
        <span>Листайте вниз</span>
        <span className="hero__arrow">↓</span>
      </div>
    </section>
  );
};
