import React from "react";
import AdminPortfolio from "../copmonent/Admin/AdminPortfolio";
import AdminServices from "../copmonent/Admin/AdminSerices/indes";
import AdminToogle from "../copmonent/Admin/AdminToogle";
import SocNet from "../copmonent/Admin/SocNet";

const Admin: React.FC = (): React.ReactElement => {
  const [menu, setMenu] = React.useState<string>("home");
  const [admToogle, setAdmToogle] = React.useState<string>("Главная");
  return (
    <>
      <div className="admin__wrap">
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
                  setAdmToogle("Главная");
                }}
              >
                Главная
              </p>
            </li>
            <li>
              <p
                onClick={(): void => {
                  setMenu("serices");
                  setAdmToogle("Услуги");
                }}
              >
                Услуги
              </p>
            </li>
            <li>
              <p
                onClick={(): void => {
                  setMenu("portfolio");
                  setAdmToogle("Портфолио");
                }}
              >
                Портфолио
              </p>
            </li>
            <li>
              <p
                onClick={(): void => {
                  setMenu("curses");
                  setAdmToogle("Курсы");
                }}
              >
                Курсы
              </p>
            </li>
            <li>
              <p
                onClick={(): void => {
                  setMenu("about");
                  setAdmToogle("О себе");
                }}
              >
                О Себе
              </p>
            </li>
            <li>
              <p
                onClick={(): void => {
                  setMenu("reviews");
                  setAdmToogle("Отзывы");
                }}
              >
                Отзывы
              </p>
            </li>
            <li>
              <p
                onClick={(): void => {
                  setMenu("inst");
                  setAdmToogle("Instagram");
                }}
              >
                Instagram
              </p>
            </li>
            <li>
              <p
                onClick={(): void => {
                  setMenu("feedback");
                  setAdmToogle("Обратная связь");
                }}
              >
                Обратная связь
              </p>
            </li>
          </ul>
        </div>

        <div className="adminWrap">
          <AdminToogle>{admToogle}</AdminToogle>
          {menu === "home" && <SocNet />}
          {menu === "serices" && <AdminServices />}
          {menu === "portfolio" && <AdminPortfolio />}
        </div>
      </div>
    </>
  );
};

export default Admin;
