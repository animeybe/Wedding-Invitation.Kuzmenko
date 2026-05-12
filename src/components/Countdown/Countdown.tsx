import { useState, useEffect } from "react";
import { getCountdown } from "../../shared/utils/countdown";
import type { CountdownResult } from "../../shared/utils/countdown";
import { wedding } from "../../shared/utils/wedding";
import "./Countdown.scss";

export const Countdown = () => {
  const [countdown, setCountdown] = useState<CountdownResult>(
    getCountdown(wedding.date),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdown(wedding.date));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (countdown.isExpired) {
    return (
      <section className="countdown" id="countdown">
        <div className="countdown__container">
          <h2 className="countdown__title">Сегодня — наш день!</h2>
          <p className="countdown__subtitle">
            Мы счастливы разделить его с вами
          </p>
        </div>
      </section>
    );
  }

  const items = [
    { value: countdown.days, label: "Дней" },
    { value: countdown.hours, label: "Часов" },
    { value: countdown.minutes, label: "Минут" },
    { value: countdown.seconds, label: "Секунд" },
  ];

  return (
    <section className="countdown" id="countdown">
      <div className="countdown__container">
        <h2 className="countdown__title">До свадьбы осталось</h2>
        <div className="countdown__grid">
          {items.map((item) => (
            <div className="countdown__item" key={item.label}>
              <span className="countdown__number">{item.value}</span>
              <span className="countdown__label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
