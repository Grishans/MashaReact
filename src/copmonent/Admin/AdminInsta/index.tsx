import React from "react";
import AdminBTN from "../AdminBTN";

const AdminInst: React.FC = (): React.ReactElement => {
  const [instAdd, setInstAdd] = React.useState(false);

  const instAddShow = React.useCallback(() => {
    setInstAdd((prev) => !prev);
  }, []);

  React.useEffect(() => {
    const addBTN = document.querySelector<HTMLButtonElement>("#adminADD");
    addBTN!.onclick = instAddShow;
  });
  return (
    <>
      <div className="admin__sevices__wrap">
        <div className="AdminInst__btn">
          <AdminBTN Add />
          <AdminBTN Save />
        </div>
        <div className="AdminInst__wrap">
          {instAdd && (
            <div className="admin__content__box admin__inst__box">
              <div className="aib__cross">
                <img src="img/admin_cross.svg" alt="" />
              </div>
              <hr />
              <div className="aib__input">
                <label htmlFor="adminInst" className="adminLabel">
                  Ссылка на фото
                </label>
                <input
                  type="text"
                  id="adminInst"
                  className="adminInput"
                  placeholder="Введите ссылку"
                />
              </div>
              <div className="ascb__inputs__addNew">
                <input id="inpFile" type="file" />
                <label htmlFor="inpFile">
                  <img src="/img/admin_camera.png" alt="" />
                </label>
              </div>
              <div className="Admin__change">
                <label htmlFor="decorationPhoto">Изменить фотографию</label>
                <input id="decorationPhoto" type="file" />
              </div>
            </div>
          )}
          <div className="admin__content__box admin__inst__box">
            <div className="aib__cross">
              <img src="img/admin_cross.svg" alt="" />
            </div>
            <hr />
            <div className="aib__input">
              <label htmlFor="adminInst" className="adminLabel">
                Ссылка на фото
              </label>
              <input
                type="text"
                id="adminInst"
                className="adminInput"
                placeholder="Введите ссылку"
              />
            </div>
            <div className="aib__img">
              <img src="/img/services_1.png" alt="" />
            </div>
            <div className="Admin__change">
              <label htmlFor="decorationPhoto">Изменить фотографию</label>
              <input id="decorationPhoto" type="file" />
            </div>
          </div>
          <div className="admin__content__box admin__inst__box">
            <div className="aib__cross">
              <img src="img/admin_cross.svg" alt="" />
            </div>
            <hr />
            <div className="aib__input">
              <label htmlFor="adminInst" className="adminLabel">
                Ссылка на фото
              </label>
              <input
                type="text"
                id="adminInst"
                className="adminInput"
                placeholder="Введите ссылку"
              />
            </div>
            <div className="aib__img">
              <img src="/img/services_1.png" alt="" />
            </div>
            <div className="Admin__change">
              <label htmlFor="decorationPhoto">Изменить фотографию</label>
              <input id="decorationPhoto" type="file" />
            </div>
          </div>
          <div className="admin__content__box admin__inst__box">
            <div className="aib__cross">
              <img src="img/admin_cross.svg" alt="" />
            </div>
            <hr />
            <div className="aib__input">
              <label htmlFor="adminInst" className="adminLabel">
                Ссылка на фото
              </label>
              <input
                type="text"
                id="adminInst"
                className="adminInput"
                placeholder="Введите ссылку"
              />
            </div>
            <div className="aib__img">
              <img src="/img/services_1.png" alt="" />
            </div>
            <div className="Admin__change">
              <label htmlFor="decorationPhoto">Изменить фотографию</label>
              <input id="decorationPhoto" type="file" />
            </div>
          </div>
          <div className="admin__content__box admin__inst__box">
            <div className="aib__cross">
              <img src="img/admin_cross.svg" alt="" />
            </div>
            <hr />
            <div className="aib__input">
              <label htmlFor="adminInst" className="adminLabel">
                Ссылка на фото
              </label>
              <input
                type="text"
                id="adminInst"
                className="adminInput"
                placeholder="Введите ссылку"
              />
            </div>
            <div className="aib__img">
              <img src="/img/services_1.png" alt="" />
            </div>
            <div className="Admin__change">
              <label htmlFor="decorationPhoto">Изменить фотографию</label>
              <input id="decorationPhoto" type="file" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminInst;
