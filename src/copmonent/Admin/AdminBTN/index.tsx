import React from "react";

import { Select } from "antd";
import "antd/dist/antd.css";

type TAdminBTNProps = {
  Add?: boolean;
  Save?: boolean;
  Cross?: boolean;
  DropDn?: boolean;
};

const AdminBTN: React.FC<TAdminBTNProps> = ({
  Add,
  Save,
  Cross,
  DropDn,
}): React.ReactElement => {
  const { Option } = Select;

  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }
  return (
    <>
      {Add && (
        <button id="adminADD" className="adminADD">
          + Добавить
        </button>
      )}
      {Save && <button className="adminSAVE">Сохранить</button>}
      {Cross && (
        <img src="../img/admin_cross.svg" alt="" className="adminCross" />
      )}
      {DropDn && (
        <Select defaultValue="Свадебный макияж" onChange={handleChange}>
          <Option value="Свадебный макияж">Свадебный макияж</Option>
          <Option value="Вечерний макияж">Вечерний макияж</Option>
          <Option value="Дневной макияж">Дневной макияж</Option>
        </Select>
      )}
    </>
  );
};

export default AdminBTN;
