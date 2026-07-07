// Program.tsx
import "./Program.scss";
import { wedding } from "../../shared/utils/wedding";

const programPhotos = {
  meeting: "/images/program/meeting.jpg",
  registration: "/images/program/registration.jpg",
  banquet: "/images/program/banquet.jpg",
} as const;

const programData = [
  {
    title: "Встреча",
    photo: programPhotos.meeting,
    aspectRatio: "3/4",
    details: [
      {
        label: "Дата",
        value: wedding.date.toLocaleDateString("ru-RU", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
      },
      { label: "Время", value: wedding.arrivalTime },
      { label: "Место", value: wedding.venue.name },
      { label: "Адрес", value: wedding.venue.address },
    ],
  },
  {
    title: "Регистрация",
    photo: programPhotos.registration,
    aspectRatio: "3/4",
    details: [
      {
        label: "Дата",
        value: wedding.date.toLocaleDateString("ru-RU", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
      },
      {
        label: "Время",
        value: wedding.date.toLocaleTimeString("ru-RU", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
      { label: "Место", value: wedding.venue.name },
      { label: "Адрес", value: wedding.venue.address },
    ],
  },
  {
    title: "Банкет",
    photo: programPhotos.banquet,
    aspectRatio: "3/4",
    details: [
      {
        label: "Дата",
        value: wedding.date.toLocaleDateString("ru-RU", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
      },
      { label: "Время", value: "16:00" },
      { label: "Место", value: "Банкетный зал" },
      { label: "Адрес", value: "ул. Пушкина, 29, п. г. т. Магдагачи (этаж 2)" },
    ],
  },
];

export const Program = () => {
  return (
    <section className="program" id="program">
      <div className="program__container">
        <h2 className="program__title">Программа мероприятия</h2>

        <div className="program__list">
          {programData.map((item, index) => (
            <div
              className={`program__block ${index % 2 === 0 ? "program__block--left" : "program__block--right"}`}
              key={index}>
              <div
                className="program__image"
                style={{
                  backgroundImage: `url('${item.photo}')`,
                  aspectRatio: item.aspectRatio,
                }}
              />
              <div className="program__info">
                <h3 className="program__block-title">{item.title}</h3>
                <ul className="program__details">
                  {item.details.map((detail, i) => (
                    <li key={i}>
                      <span>{detail.label}:</span> {detail.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
