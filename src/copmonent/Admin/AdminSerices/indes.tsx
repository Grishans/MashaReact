import classNames from "classnames";
import { observer } from "mobx-react-lite";
import React from "react";
import { servicesStores } from "../../../stores/servicesStores";
import { IService } from "../../../types";
import { attach } from "../../../utils/attachFiles";
import AdminBTN from "../AdminBTN";

const AdminServices: React.FC = observer(
  (): React.ReactElement => {
    const [addBox, setAddBox] = React.useState<boolean>(false);
    const service: IService[] = servicesStores.items;
    const [image, setImage] = React.useState<Blob | any>();
    const [serCurrent, setSerCurrent] = React.useState<IService | undefined>();

    const changeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setSerCurrent((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    };

    const addImage = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const file = e.target.files;
      setImage(file![0]);
    };
    const saveService = async (): Promise<void> => {
      try {
        const pic = await attach(image);
        if (!serCurrent!._id || serCurrent!._id === undefined) {
          const obj: IService = {
            ...serCurrent,
            photo: pic,
          };
          await servicesStores.create(obj);
          alert("Услуга сохранена!");
        } else {
          await servicesStores.edit(serCurrent!);
          alert("Услуга обновленна!");
        }
        setAddBox(false);
        setSerCurrent(undefined);
        setImage(undefined);
      } catch (error) {
        console.error(`Ошибка Сервисы(Сохранение): ${error}`);
      }
    };

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
            <AdminBTN Save onClick={saveService} />
          </div>
          <div className="admin__service__content__wrap">
            {addBox && (
              <div className="admin__content__box admin__service__comtent__box">
                <div className="ascb__title">
                  <label>
                    {serCurrent &&
                    serCurrent!.title &&
                    serCurrent!.title!.length > 0
                      ? serCurrent!.title
                      : "Новая услуга"}
                  </label>
                  <AdminBTN
                    Cross
                    onClick={(): void => {
                      setAddBox(false);
                    }}
                  />
                </div>
                <hr />
                <div className="ascb__inputs">
                  <div className="ascb__inputs__insert">
                    <label htmlFor="adminInput" className="adminLabel">
                      Название услуги
                    </label>
                    <input
                      id="adminInput"
                      name="title"
                      value={serCurrent && serCurrent!.title}
                      onChange={changeInput}
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
                      name="workTime"
                      value={serCurrent && serCurrent!.workTime}
                      onChange={changeInput}
                      className="adminInput"
                      placeholder="Введите время затрат"
                    />
                  </div>
                  <div
                    className={classNames("ascb__inputs__addNew", {
                      "ascb__inputs__addNew-prev": image,
                    })}
                  >
                    <input id="inpFile" type="file" onChange={addImage} />
                    <label htmlFor="inpFile">
                      <img
                        src={
                          image
                            ? URL.createObjectURL(image)
                            : "/img/admin_camera.png"
                        }
                        alt=""
                      />
                    </label>
                  </div>
                </div>
              </div>
            )}
            {service &&
              service.length > 0 &&
              service.map((item, index) => (
                <div
                  className="admin__content__box admin__service__comtent__box"
                  key={index + item.title!}
                >
                  <div className="ascb__title">
                    <label>{item.title}</label>
                    <label
                      id="AdminEditLabel"
                      onClick={() => setSerCurrent(item)}
                    >
                      Редактировать
                    </label>
                    {/* <button onClick={() => setSerCurrent(item)}>
                      Редактировать
                    </button> */}
                    <AdminBTN
                      Cross
                      onClick={(): void => {
                        if (window.confirm("Вы точно хотите удалить услугу?")) {
                          servicesStores.delete(item._id!);
                        }
                      }}
                    />
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
                        name="title"
                        value={
                          serCurrent && serCurrent.title !== ""
                            ? serCurrent.title
                            : item.title
                        }
                        onChange={changeInput}
                        className="adminInput"
                        placeholder="Введите название"
                        disabled={serCurrent && serCurrent!._id !== item._id}
                      />
                      <label htmlFor="adminInput" className="adminLabel">
                        Затраты времени
                      </label>
                      <input
                        id="adminInput"
                        type="text"
                        name="workTime"
                        value={
                          serCurrent && serCurrent.workTime !== ""
                            ? serCurrent.workTime
                            : item.workTime
                        }
                        onChange={changeInput}
                        className="adminInput"
                        placeholder="Введите время затрат"
                        disabled={serCurrent && serCurrent!._id !== item._id}
                      />
                    </div>
                    <div className="ascb__inputs__img">
                      <img
                        src={
                          image
                            ? URL.createObjectURL(image)
                            : `${process.env.REACT_APP_LINK}${item.photo}`
                        }
                        alt=""
                      />
                      <div className="ascb__inputs__addImg">
                        <label htmlFor="adminSevicesImgAdd">
                          Добавить Фотографию
                        </label>
                        <input type="file" id="adminSevicesImgAdd" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </>
    );
  }
);

export default AdminServices;
