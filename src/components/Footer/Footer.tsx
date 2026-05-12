import { wedding } from "../../shared/utils/wedding";
import "./Footer.scss";

const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day} • ${month} • ${year}`;
};

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__container">
        <h2 className="footer__names">
          {wedding.groom} <span className="ampersand">&</span> {wedding.bride}
        </h2>
        <div className="footer__date">{formatDate(wedding.date)}</div>

        <p className="footer__text">
          Мы с нетерпением ждём встречи с вами,
          <br />
          чтобы разделить радость этого дня
        </p>

        <div className="footer__divider" />

        <p className="footer__thanks">С любовью и благодарностью ❤️</p>

        <p className="footer__copyright">
          © {wedding.date.getFullYear()} {wedding.groom} и {wedding.bride}. Все
          права защищены.
        </p>
      </div>
    </footer>
  );
};
