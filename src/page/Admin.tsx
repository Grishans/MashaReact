import React from "react";
import AdminToogle from "../copmonent/Admin/AdminToogle";
import SocNet from "../copmonent/Admin/SocNet";

const Admin: React.FC = (): React.ReactElement => {
  const [menu, setMenu] = React.useState<string>("home");
  return (
    <>
      <div className="adminHeader">
        <div className="ah__logo">
          <img src="/img/logo_white.svg" alt="" />
        </div>
      </div>

      <div className="adminLeftNav">
        <ul>
          <li>
            <p
              onClick={(): void => {
                setMenu("home");
              }}
            >
              Главная
            </p>
          </li>
          <li>
            <p
              onClick={(): void => {
                setMenu("serices");
              }}
            >
              Услуги
            </p>
          </li>
          <li>
            <p
              onClick={(): void => {
                setMenu("portfolio");
              }}
            >
              Портфолио
            </p>
          </li>
          <li>
            <p
              onClick={(): void => {
                setMenu("curses");
              }}
            >
              Курсы
            </p>
          </li>
          <li>
            <p
              onClick={(): void => {
                setMenu("about");
              }}
            >
              О Себе
            </p>
          </li>
          <li>
            <p
              onClick={(): void => {
                setMenu("reviews");
              }}
            >
              Отзывы
            </p>
          </li>
          <li>
            <p
              onClick={(): void => {
                setMenu("inst");
              }}
            >
              Instagram
            </p>
          </li>
          <li>
            <p
              onClick={(): void => {
                setMenu("feedback");
              }}
            >
              Обратная связь
            </p>
          </li>
        </ul>
      </div>

      <div className="adminWrap">
        <AdminToogle>тут текст</AdminToogle>
        {menu === "home" && <SocNet />}
      </div>
    </>
  );
};

export default Admin;
