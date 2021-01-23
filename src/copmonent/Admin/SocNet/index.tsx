import React from "react";

const SocNet: React.FC = (): React.ReactElement => {
  return (
    <>
      <div className="socNetWrap">
        <div className="asn__box">
          <label className="adminLabel">Instagram</label>
          <input
            type="text"
            className="adminInput"
            placeholder="Скопируйте ссылку на вашу социальную сеть"
          />
        </div>
        <div className="asn__box">
          <label className="adminLabel">Facebook</label>
          <input
            type="text"
            className="adminInput"
            placeholder="Скопируйте ссылку на вашу социальную сеть"
          />
        </div>
        <button>Сохранить</button>
      </div>
    </>
  );
};

export default SocNet;
