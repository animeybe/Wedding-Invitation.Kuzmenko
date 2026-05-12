import "./Wishes.scss";

export const Wishes = () => {
  return (
    <section className="wishes" id="wishes">
      <div className="wishes__container">
        <h2 className="wishes__title">Пожелания к подаркам</h2>
        <p className="wishes__subtitle">
          Ваше присутствие — главный подарок для нас. Но если вы хотите
          порадовать нас чем-то особенным, мы будем очень благодарны.
        </p>

        <div className="wishes__list">
          <div className="wishes__item">
            <span className="wishes__icon">🍷</span>
            <div className="wishes__content">
              <h3 className="wishes__item-title">Хороший алкоголь</h3>
              <p className="wishes__item-text">
                Не подумайте, мы не алкоголики! Просто хочется поставить на
                полку пару бутылок чего-то особенного — для будущих праздников,
                годовщин и встреч с друзьями. Виски, коньяк, хорошее вино — всё,
                что благородно стареет и открывается по случаю.
              </p>
            </div>
          </div>

          <div className="wishes__item">
            <span className="wishes__icon">🏠</span>
            <div className="wishes__content">
              <h3 className="wishes__item-title">Вклад в семейное гнёздышко</h3>
              <p className="wishes__item-text">
                Мы только начинаем нашу совместную жизнь и вместе обустраиваем
                общий дом. Будем искренне рады новой технике, сертификатам в
                магазины товаров для дома, красивой посуде, постельному белью и
                всему, что превращает пространство в уютное семейное гнёздышко.
                Каждая мелочь — кирпичик в фундаменте нашего тёплого дома.
              </p>
            </div>
          </div>

          <div className="wishes__item">
            <span className="wishes__icon">🎨</span>
            <div className="wishes__content">
              <h3 className="wishes__item-title">Подарок своими руками</h3>
              <p className="wishes__item-text">
                Если вы ещё маленькие и у вас нет своих денежек — не
                переживайте! Мы будем невероятно рады рисунку, открытке, поделке
                или любой самодельной вещице от чистого сердца. Самые тёплые
                подарки — те, что сделаны своими руками. Они займут особое место
                в нашем доме и будут напоминать о вас долгие годы.
              </p>
            </div>
          </div>

          <div className="wishes__item">
            <span className="wishes__icon">💌</span>
            <div className="wishes__content">
              <h3 className="wishes__item-title">Денежки в конверте</h3>
              <p className="wishes__item-text">
                Классика, которая никогда не подводит. Мы копим на семейное
                гнёздышко и будем благодарны за любой вклад в наш общий бюджет.
                Конверт можно подписать — будем перечитывать и вспоминать ваш
                тёплый жест.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
