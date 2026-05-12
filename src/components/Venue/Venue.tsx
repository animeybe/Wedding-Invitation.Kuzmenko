import { wedding } from "../../shared/utils/wedding";
import "./Venue.scss";

export const Venue = () => {
  return (
    <section className="venue" id="venue">
      <div className="venue__container">
        <h2 className="venue__title">Место проведения</h2>
        <p className="venue__subtitle">
          Мы будем рады видеть вас в этот особенный день
        </p>

        <div className="venue__card">
          <div className="venue__map">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=125.799551%2C53.454642&z=16&pt=125.799551,53.454642,pm2rdm"
              title="Карта места проведения"
              loading="lazy"
            />
          </div>

          <div className="venue__info">
            <div className="venue__info-item">
              <span className="venue__icon">📍</span>
              <div>
                <h3 className="venue__info-title">{wedding.venue.name}</h3>
                <p className="venue__info-text">{wedding.venue.address}</p>
              </div>
            </div>

            <div className="venue__info-item">
              <span className="venue__icon">🕐</span>
              <div>
                <h3 className="venue__info-title">Время сбора гостей</h3>
                <p className="venue__info-text">{wedding.arrivalTime}</p>
              </div>
            </div>

            <div className="venue__info-item">
              <span className="venue__icon">🚗</span>
              <div>
                <h3 className="venue__info-title">Как добраться</h3>
                <p className="venue__info-text">
                  От ж/д станции Магдагачи около 10 минут пешком (700 м).
                  <br />
                  Идите по Коммунистическому переулку до поворота направо — там
                  будет здание ЗАГСа.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
