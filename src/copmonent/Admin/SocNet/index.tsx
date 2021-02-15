import { observer } from "mobx-react-lite";
import React from "react";
import { settingsStores } from "../../../stores/settingsStores";
import { ISettings } from "../../../types";

const SocNet: React.FC = observer(
  (): React.ReactElement => {
    const home: ISettings = settingsStores.items;
    const [edit, setEdit] = React.useState<ISettings>();
    const changeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setEdit((pre) => ({ ...pre, [e.target.id]: e.target.value }));
    };
    const saveHome = async (): Promise<void> => {
      try {
        await settingsStores.edit(edit!);
        alert("Главная сохранена");
      } catch (error) {
        console.error(`Ошибка Главная: ${error}`);
      }
    };
    React.useEffect(() => {
      home && setEdit(home);
    }, [home]);
    return (
      <>
        <div className="socNetWrap">
          <div className="asn__box">
            <label className="adminLabel">Instagram</label>
            <input
              type="text"
              id="inst"
              value={edit?.inst}
              onChange={changeInput}
              className="adminInput"
              placeholder="Скопируйте ссылку на вашу социальную сеть"
            />
          </div>
          <div className="asn__box">
            <label className="adminLabel">Facebook</label>
            <input
              type="text"
              id="fb"
              value={edit?.fb}
              onChange={changeInput}
              className="adminInput"
              placeholder="Скопируйте ссылку на вашу социальную сеть"
            />
          </div>
          <button onClick={saveHome}>Сохранить</button>
        </div>
      </>
    );
  }
);

export default SocNet;
