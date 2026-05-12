import { wedding } from "../../shared/utils/wedding";
import "./RSVPSection.scss";

interface RSVPSectionProps {
  onOpen: () => void;
}

const formatDeadline = (date: Date): string => {
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  return `${date.getDate()} ${months[date.getMonth()]}`;
};

export const RSVPSection = ({ onOpen }: RSVPSectionProps) => {
  return (
    <section className="rsvp-section" id="rsvp">
      <div className="rsvp-section__container">
        <div className="rsvp-section__card">
          <h2 className="rsvp-section__title">Разделите этот день с нами</h2>
          <p className="rsvp-section__text">
            Ваше присутствие — лучший подарок. Пожалуйста, дайте знать, сможете
            ли вы быть с нами в этот важный день.
          </p>
          <button className="rsvp-section__button" onClick={onOpen}>
            <span className="rsvp-section__button-text">Я приду!</span>
            <span className="rsvp-section__button-icon">💍</span>
          </button>
          <p className="rsvp-section__deadline">
            Просим ответить до{" "}
            <strong>{formatDeadline(wedding.rsvpDeadline)}</strong>
          </p>
        </div>
      </div>
    </section>
  );
};
