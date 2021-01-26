import React from "react";
import AdminBTN from "../AdminBTN";

const AdminAbout: React.FC = (): React.ReactElement => {
  const [remainder, setReminder] = React.useState<number>(0);

  const rmeinderValue = () => {
    const Value =
      56 -
      (document.getElementById("adminAboutINP") as HTMLInputElement).value
        .length;
    setReminder(Value);
  };

  React.useEffect(() => {
    rmeinderValue();
  });

  return (
    <>
      <div className="admin__sevices__wrap">
        <AdminBTN Save />
        <div className="admin__content__box admin__about__box">
          <label className="adminLabel">Биография</label>
          <hr />
          <label htmlFor="adminAboutINP" className="adminLabel">
            Цитата
          </label>
          <p className="adminAbout__remainder">
            Максимум 56 символов. <span>Символов осталось {remainder}</span>
          </p>
          <input
            type="text"
            className="adminInput"
            id="adminAboutINP"
            defaultValue="Я считаю что каждая женщина прекрасна"
            maxLength={56}
            minLength={0}
            onInput={rmeinderValue}
          />

          <label htmlFor="adminAboutTA" className="adminLabel">
            О себе
          </label>
          <textarea
            id="adminAboutTA"
            className="adminInput"
            placeholder="Описание"
          ></textarea>
        </div>

        <div className="admin__about__photo">
          <div className="aap__box">
            <label className="adminLabel">Декоративное фото</label>
            <img src="/img/about_paint.png" alt="" />
            <div className="Admin__change">
              <label htmlFor="decorationPhoto">Изменить фотографию</label>
              <input id="decorationPhoto" type="file" />
            </div>
          </div>
          <div className="aap__box">
            <label className="adminLabel">Декоративное фото</label>
            <img src="/img/about_photo.png" alt="" />
            <div className="Admin__change">
              <label htmlFor="personalPhoto">Изменить фотографию</label>
              <input id="personalPhoto" type="file" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminAbout;
