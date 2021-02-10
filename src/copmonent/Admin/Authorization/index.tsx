import React from "react";

const AdmiAuthorization = () => {
  return (
    <>
      <div className="header__wrap admin__aut__wrap">
        <div className="header__main">
          <div className="header__main__text">
            <img src="/img/logo_white.svg" alt="" />
            <div className="admin__header__input">
              <label htmlFor="adminLogin">Логин</label>
              <input id="adminLogin" type="text" />
              <label htmlFor="adminPassword">Пароль</label>
              <input id="adminPassword" type="text" />
              <button className="adminAutBtn">Войти</button>
            </div>
          </div>
          <img src="/img/main-girl.png" alt="" className="girl" />
        </div>
        <div className="header__bg"></div>
        <img className="header__bg__left_top" src="img/leftUp.png" alt="" />
        <img
          className="header__bg__left_bottom"
          src="img/leftDown.png"
          alt=""
        />
        <img className="header__bg__right_top" src="img/rightUp.png" alt="" />
      </div>
    </>
  );
};

export default AdmiAuthorization;
