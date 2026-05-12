import { useState, useEffect } from "react";
import type { GuestFormData, RSVPStatus } from "../../types/guest.types";
import "./RSVPModal.scss";

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || "";

const sanitizeName = (value: string) =>
  value.replace(/[^a-zA-Zа-яА-ЯёЁ\s-]/g, "").slice(0, 60);

export const RSVPModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [form, setForm] = useState<GuestFormData>({
    name: "",
    guests: 1,
    alcohol: "any",
    comment: "",
    isCustomGuests: false,
  });
  const [customGuests, setCustomGuests] = useState("4");
  const [status, setStatus] = useState<RSVPStatus>("idle");

  //  Прикол от жениха

  const isStepan = (value: string): boolean => {
    return /степ(ан|а|к|очк|ушк|ик|)/i.test(value.trim());
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    setForm({
      name: "",
      guests: 1,
      alcohol: "any",
      comment: "",
      isCustomGuests: false,
    });
    setCustomGuests("4");
    setStatus("idle");
    onClose();
  };

  if (!isOpen) return null;

  const handleSelectChange = (value: string) => {
    const num = Number(value);

    if (num === 0) {
      // Выбрали «Больше трёх»
      setForm({ ...form, guests: Number(customGuests), isCustomGuests: true });
    } else {
      setForm({ ...form, guests: num, isCustomGuests: false });
    }
  };

  const handleCustomChange = (value: string) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 2); // только цифры, макс 2 знака
    setCustomGuests(cleaned);
    const num = Number(cleaned);
    if (num >= 4) {
      setForm({ ...form, guests: num });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name.trim().length < 2) return;
    if (form.guests < 1) return;

    setStatus("sending");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          name: form.name.trim(),
          guests: form.guests,
          alcohol:
            form.alcohol === "yes"
              ? "Да"
              : form.alcohol === "no"
                ? "Нет"
                : "Без разницы",
          comment: form.comment.slice(0, 200),
        }),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {status === "success" ? (
          <>
            <h2 className="modal__title">Спасибо! ❤️</h2>
            <p className="modal__text">Мы очень рады, что вы будете с нами!</p>
            <button onClick={handleClose} className="modal__btn">
              Закрыть
            </button>
          </>
        ) : (
          <>
            <button className="modal__close" onClick={handleClose}>
              ✕
            </button>
            <h2 className="modal__title">Подтвердите участие</h2>
            <p className="modal__subtitle">Пожалуйста, дайте знать до 20 мая</p>

            <form onSubmit={handleSubmit} className="modal__form">
              <label className="modal__label">
                {isStepan(form.name)
                  ? "Ваше имя и фамилия (позорник)"
                  : "Ваше имя и фамилия"}
                <input
                  type="text"
                  className="modal__input"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: sanitizeName(e.target.value) })
                  }
                  placeholder="Иван Петров"
                  required
                  minLength={2}
                  maxLength={60}
                />
              </label>

              <label className="modal__label">
                Количество гостей
                <select
                  className="modal__input"
                  value={form.isCustomGuests ? 0 : form.guests}
                  onChange={(e) => handleSelectChange(e.target.value)}>
                  <option value={1}>1 — Буду один/одна</option>
                  <option value={2}>2 — Придём парой</option>
                  <option value={3}>3 — Придём с детьми</option>
                  <option value={0}>Больше трёх</option>
                </select>
              </label>

              {form.isCustomGuests && (
                <label className="modal__label">
                  Сколько именно человек?
                  <input
                    type="text"
                    className="modal__input"
                    value={customGuests}
                    onChange={(e) => handleCustomChange(e.target.value)}
                    placeholder="4"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    autoFocus
                  />
                </label>
              )}

              <fieldset className="modal__fieldset">
                <legend>Предпочтения по напиткам</legend>
                <div className="modal__radio-group">
                  {[
                    { value: "yes", label: "🍷 Алкогольные" },
                    { value: "no", label: "🥤 Безалкогольные" },
                    { value: "any", label: "🤷 Без разницы" },
                  ].map((opt) => (
                    <label key={opt.value} className="modal__radio-label">
                      <input
                        type="radio"
                        name="alcohol"
                        value={opt.value}
                        checked={form.alcohol === opt.value}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            alcohol: e.target.value as GuestFormData["alcohol"],
                          })
                        }
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="modal__label">
                Особые пожелания (необязательно)
                <textarea
                  className="modal__textarea"
                  value={form.comment}
                  onChange={(e) =>
                    setForm({ ...form, comment: e.target.value.slice(0, 200) })
                  }
                  placeholder="Аллергия, дети, вегетарианство..."
                  rows={3}
                  maxLength={200}
                />
                <span className="modal__char-count">
                  {form.comment.length}/200
                </span>
              </label>

              <button
                type="submit"
                className="modal__btn"
                disabled={status === "sending"}>
                {status === "sending" ? "Отправляю..." : "Я приду! 💍"}
              </button>

              {status === "error" && (
                <p className="modal__error">
                  Что-то пошло не так. Напишите нам лично 🙏
                </p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
};
