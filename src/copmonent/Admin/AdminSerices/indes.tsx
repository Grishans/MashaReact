import React from "react";
import AdminBTN from "../AdminBTN";

const AdminServices = () => {
  const [addBox, setAddBox] = React.useState<boolean>(false);
  const showBox = React.useCallback(() => {
    setAddBox((prev) => !prev);
  }, []);

  React.useEffect(() => {
    const addBTN = document.querySelector<HTMLButtonElement>("#adminADD");
    addBTN!.onclick = showBox;
  });
  return (
    <>
      <div className="admin__sevices__wrap">
        <div className="admin__services__btn">
          <AdminBTN Add />
          <AdminBTN Save />
        </div>
        <div className="admin__service__content__wrap">
          {addBox && (
            <div className="admin__service__comtent__box">
              <div className="ascb__title">
                <label>Новая услуга</label>
                <AdminBTN Cross />
              </div>
              <hr />
              <div className="ascb__inputs">
                <div className="ascb__inputs__insert">
                  <label htmlFor="adminInput" className="adminLabel">
                    Название услуги
                  </label>
                  <input
                    id="adminInput"
                    type="text"
                    className="adminInput"
                    placeholder="Введите название"
                  />
                  <label htmlFor="adminInput" className="adminLabel">
                    Затраты времени
                  </label>
                  <input
                    id="adminInput"
                    type="text"
                    className="adminInput"
                    placeholder="Введите время затрат"
                  />
                </div>
                <div className="ascb__inputs__img">
                  <div className="ascb__inputs__addNew">
                    <img src="/img/admin_camera.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="admin__service__comtent__box">
            <div className="ascb__title">
              <label>Новая услуга</label>
              <AdminBTN Cross />
            </div>
            <hr />
            <div className="ascb__inputs">
              <div className="ascb__inputs__insert">
                <label htmlFor="adminInput" className="adminLabel">
                  Название услуги
                </label>
                <input
                  id="adminInput"
                  type="text"
                  className="adminInput"
                  placeholder="Введите название"
                />
                <label htmlFor="adminInput" className="adminLabel">
                  Затраты времени
                </label>
                <input
                  id="adminInput"
                  type="text"
                  className="adminInput"
                  placeholder="Введите время затрат"
                />
              </div>
              <div className="ascb__inputs__img">
                <img src="/img/services_2.png" alt="" />
                <div className="ascb__inputs__addImg">
                  <label>Добавить Фотографию</label>
                </div>
              </div>
            </div>
          </div>
          <div className="admin__service__comtent__box">
            <div className="ascb__title">
              <label>Новая услуга</label>
              <AdminBTN Cross />
            </div>
            <hr />
            <div className="ascb__inputs">
              <div className="ascb__inputs__insert">
                <label htmlFor="adminInput" className="adminLabel">
                  Название услуги
                </label>
                <input
                  id="adminInput"
                  type="text"
                  className="adminInput"
                  placeholder="Введите название"
                />
                <label htmlFor="adminInput" className="adminLabel">
                  Затраты времени
                </label>
                <input
                  id="adminInput"
                  type="text"
                  className="adminInput"
                  placeholder="Введите время затрат"
                />
              </div>
              <div className="ascb__inputs__img">
                <img src="/img/services_2.png" alt="" />
                <div className="ascb__inputs__addImg">
                  <label>Добавить Фотографию</label>
                </div>
              </div>
            </div>
          </div>
          <div className="admin__service__comtent__box">
            <div className="ascb__title">
              <label>Новая услуга</label>
              <AdminBTN Cross />
            </div>
            <hr />
            <div className="ascb__inputs">
              <div className="ascb__inputs__insert">
                <label htmlFor="adminInput" className="adminLabel">
                  Название услуги
                </label>
                <input
                  id="adminInput"
                  type="text"
                  className="adminInput"
                  placeholder="Введите название"
                />
                <label htmlFor="adminInput" className="adminLabel">
                  Затраты времени
                </label>
                <input
                  id="adminInput"
                  type="text"
                  className="adminInput"
                  placeholder="Введите время затрат"
                />
              </div>
              <div className="ascb__inputs__img">
                <img src="/img/services_2.png" alt="" />
                <div className="ascb__inputs__addImg">
                  <label>Добавить Фотографию</label>
                </div>
              </div>
            </div>
          </div>
          <div className="admin__service__comtent__box">
            <div className="ascb__title">
              <label>Новая услуга</label>
              <AdminBTN Cross />
            </div>
            <hr />
            <div className="ascb__inputs">
              <div className="ascb__inputs__insert">
                <label htmlFor="adminInput" className="adminLabel">
                  Название услуги
                </label>
                <input
                  id="adminInput"
                  type="text"
                  className="adminInput"
                  placeholder="Введите название"
                />
                <label htmlFor="adminInput" className="adminLabel">
                  Затраты времени
                </label>
                <input
                  id="adminInput"
                  type="text"
                  className="adminInput"
                  placeholder="Введите время затрат"
                />
              </div>
              <div className="ascb__inputs__img">
                <img src="/img/services_2.png" alt="" />
                <div className="ascb__inputs__addImg">
                  <label>Добавить Фотографию</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminServices;
