import { wedding } from "../../shared/utils/wedding";
import "./AboutUs.scss";

const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, "0");
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
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

export const AboutUs = () => {
  return (
    <section className="about-us" id="about-us">
      <div className="about-us__container">
        <h2 className="about-us__title">Кто мы</h2>
        <p className="about-us__subtitle">
          Две половинки, которые нашли друг друга
        </p>

        <div className="about-us__cards">
          <div className="about-us__card">
            <div className="about-us__polaroid">
              <div className="about-us__photo">
                <img
                  src="/images/kids/groom_3.jpg"
                  alt={wedding.groom}
                  className="about-us__image"
                  loading="lazy"
                />
              </div>
              <div className="about-us__caption">Лёша, 4 года</div>
            </div>
          </div>

          <div className="about-us__plus">+</div>

          <div className="about-us__card">
            <div className="about-us__polaroid">
              <div className="about-us__photo">
                <img
                  src="/images/kids/bride_2.jpg"
                  alt={wedding.bride}
                  className="about-us__image"
                  loading="lazy"
                />
              </div>
              <div className="about-us__caption">Настя, 6 лет</div>
            </div>
          </div>
        </div>

        <div className="about-us__grown-up">
          <p className="about-us__grown-up-text">
            Но мы выросли, и теперь нам можно
          </p>
          <p className="about-us__grown-up-date">{formatDate(wedding.date)}</p>
        </div>
      </div>
    </section>
  );
};
