import React from "react";
import AdminBTN from "../AdminBTN";
import { Select } from "antd";

const AdminPortfolio: React.FC = (): React.ReactElement => {
  const WeedingRef = React.useRef<HTMLUListElement>(null);
  const NightRef = React.useRef<HTMLUListElement>(null);
  const DayRef = React.useRef<HTMLUListElement>(null);
  const current_slide = React.useRef<HTMLParagraphElement>(null);
  const quantity_slide = React.useRef<HTMLParagraphElement>(null);

  const { Option } = Select;

  function handleChange(value: any) {
    var step: any;
    var quantity: any;
    var slideWidth: any;
    var currentSlide: any;
    var customPrev = document.querySelector("#customPrev");
    var customNext = document.querySelector("#customNext");

    if (value === "Weeding") {
      document.getElementById("portfolio__weeding")!.style.display = "block";
      document.getElementById("portfolio__night")!.style.display = "none";
      document.getElementById("portfolio__day")!.style.display = "none";

      step = document.querySelector(
        "#portfolio__weeding > .port__slider > #ul > li"
      );
      quantity = document.querySelectorAll(
        "#portfolio__weeding > .port__slider > #ul > li"
      ).length;
      slideWidth = 0;
      currentSlide = 1;
      current_slide.current!.innerHTML = String(currentSlide);
      quantity_slide.current!.innerHTML = String(quantity);
      WeedingRef.current!.style.left = "0px";
      console.log(value);
    } else if (value === "Night") {
      document.getElementById("portfolio__weeding")!.style.display = "none";
      document.getElementById("portfolio__night")!.style.display = "block";
      document.getElementById("portfolio__day")!.style.display = "none";

      step = document.querySelector(
        "#portfolio__night > .port__slider > #ul > li"
      );
      quantity = document.querySelectorAll(
        "#portfolio__night > .port__slider > #ul > li"
      ).length;
      slideWidth = 0;
      currentSlide = 1;
      NightRef.current!.style.left = "0px";
      current_slide.current!.innerHTML = String(currentSlide);
      quantity_slide.current!.innerHTML = String(quantity);
      console.log(value);
    } else if (value === "Day") {
      document.getElementById("portfolio__weeding")!.style.display = "none";
      document.getElementById("portfolio__night")!.style.display = "none";
      document.getElementById("portfolio__day")!.style.display = "block";

      step = document.querySelector(
        "#portfolio__day > .port__slider > #ul > li"
      );
      quantity = document.querySelectorAll(
        "#portfolio__day > .port__slider > #ul > li"
      ).length;
      slideWidth = 0;
      currentSlide = 1;
      DayRef.current!.style.left = "0px";
      current_slide.current!.innerHTML = String(currentSlide);
      quantity_slide.current!.innerHTML = String(quantity);
      console.log(value);
    }

    customPrev!.addEventListener("click", () => {
      slideWidth -= step.offsetWidth;
      currentSlide -= 1;
      WeedingRef.current!.style.left = "-" + slideWidth + "px";
      NightRef.current!.style.left = "-" + slideWidth + "px";
      DayRef.current!.style.left = "-" + slideWidth + "px";
      if (currentSlide < 1) {
        slideWidth = step.offsetWidth * (quantity - 1);
        WeedingRef.current!.style.left = "-" + slideWidth + "px";
        NightRef.current!.style.left = "-" + slideWidth + "px";
        DayRef.current!.style.left = "-" + slideWidth + "px";
        currentSlide = quantity;
      }
      current_slide.current!.innerHTML = currentSlide;
    });

    customNext!.addEventListener("click", () => {
      slideWidth += step.offsetWidth;
      currentSlide += 1;
      WeedingRef.current!.style.left = "-" + slideWidth + "px";
      NightRef.current!.style.left = "-" + slideWidth + "px";
      DayRef.current!.style.left = "-" + slideWidth + "px";
      if (currentSlide > quantity) {
        WeedingRef.current!.style.left = "0px";
        NightRef.current!.style.left = "0px";
        DayRef.current!.style.left = "0px";
        currentSlide = 1;
        slideWidth = 0;
      }
      current_slide.current!.innerHTML = currentSlide;
    });
  }

  const [portfolioAdd, setPortfolioAdd] = React.useState<boolean>(false);

  const portfolioNewShow = React.useCallback(() => {
    setPortfolioAdd((prev) => !prev);
  }, []);

  React.useEffect(() => {
    const addBTN = document.querySelector<HTMLButtonElement>("#adminADD");
    addBTN!.onclick = portfolioNewShow;
  }, [portfolioNewShow]);
  return (
    <>
      <div className="admin__sevices__wrap">
        <div className="admin__services__btn">
          <Select defaultValue="Свадебный макияж" onChange={handleChange}>
            <Option id="labelWeeding" value="Weeding">
              Свадебный макияж
            </Option>
            <Option id="labelNight" value="Night">
              Вечерний макияж
            </Option>
            <Option id="labelDay" value="Day">
              Дневной макияж
            </Option>
          </Select>
          <AdminBTN Add />
          <AdminBTN Save />
        </div>
        <div className="admin__portfolio__title">
          <label>Изменить название</label>
          <input value="Свадебный макияж" className="adminInput" type="text" />
        </div>

        <div className="admin__portfolio__wrap">
          <div className="portfolio__slideButton">
            <span id="customPrev" className="portfolio_prev">
              &#60;
            </span>
            <p ref={current_slide} id="firstLetter" className="firstLetter"></p>
            <p className="delimiter">/</p>
            <p ref={quantity_slide} id="delimiter"></p>
            <span id="customNext" className="portfolio_next">
              &#62;
            </span>
          </div>
          <div className="portfolio__section">
            <div id="portfolio__weeding">
              <div className="port__slider">
                <ul id="ul" ref={WeedingRef}>
                  {portfolioAdd && (
                    <li>
                      <div className="admin__portfolio__img__change portfolioAddNew">
                        <input id="1" type="file" />
                        <label htmlFor="1">Добавить фотографию</label>
                      </div>
                      <div className="admin__portfolio__img__change portfolioAddNew">
                        <input id="2" type="file" />
                        <label htmlFor="2">Добавить фотографию</label>
                      </div>
                      <div className="admin__portfolio__img__change portfolioAddNew">
                        <input id="3" type="file" />
                        <label htmlFor="3">Добавить фотографию</label>
                      </div>
                      <div className="admin__portfolio__img__change portfolioAddNew">
                        <input id="4" type="file" />
                        <label htmlFor="4">Добавить фотографию</label>
                      </div>
                      <div className="admin__portfolio__img__change portfolioAddNew">
                        <input id="5" type="file" />
                        <label htmlFor="5">Добавить фотографию</label>
                      </div>
                      <div className="admin__portfolio__img__change portfolioAddNew">
                        <input id="6" type="file" />
                        <label htmlFor="6">Добавить фотографию</label>
                      </div>
                    </li>
                  )}
                  <li>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_1.png" alt="" />
                      <input id="1" type="file" />
                      <label htmlFor="1">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_2.png" alt="" />
                      <input id="2" type="file" />
                      <label htmlFor="2">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_3.png" alt="" />
                      <input id="3" type="file" />
                      <label htmlFor="3">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_1.png" alt="" />
                      <input id="4" type="file" />
                      <label htmlFor="4">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_2.png" alt="" />
                      <input id="5" type="file" />
                      <label htmlFor="5">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_3.png" alt="" />
                      <input id="6" type="file" />
                      <label htmlFor="6">Изменить фотографию</label>
                    </div>
                  </li>
                  <li>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_1.png" alt="" />
                      <input id="1" type="file" />
                      <label htmlFor="1">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_2.png" alt="" />
                      <input id="2" type="file" />
                      <label htmlFor="2">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_3.png" alt="" />
                      <input id="3" type="file" />
                      <label htmlFor="3">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_1.png" alt="" />
                      <input id="4" type="file" />
                      <label htmlFor="4">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_2.png" alt="" />
                      <input id="5" type="file" />
                      <label htmlFor="5">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_3.png" alt="" />
                      <input id="6" type="file" />
                      <label htmlFor="6">Изменить фотографию</label>
                    </div>
                  </li>
                  <li>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_1.png" alt="" />
                      <input id="1" type="file" />
                      <label htmlFor="1">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_2.png" alt="" />
                      <input id="2" type="file" />
                      <label htmlFor="2">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_3.png" alt="" />
                      <input id="3" type="file" />
                      <label htmlFor="3">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_1.png" alt="" />
                      <input id="4" type="file" />
                      <label htmlFor="4">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_2.png" alt="" />
                      <input id="5" type="file" />
                      <label htmlFor="5">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_3.png" alt="" />
                      <input id="6" type="file" />
                      <label htmlFor="6">Изменить фотографию</label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div id="portfolio__night">
              <div className="port__slider">
                <ul id="ul" ref={NightRef}>
                  {portfolioAdd && (
                    <li>
                      <div className="admin__portfolio__img__change portfolioAddNew">
                        <input id="1" type="file" />
                        <label htmlFor="1">Добавить фотографию</label>
                      </div>
                      <div className="admin__portfolio__img__change portfolioAddNew">
                        <input id="2" type="file" />
                        <label htmlFor="2">Добавить фотографию</label>
                      </div>
                      <div className="admin__portfolio__img__change portfolioAddNew">
                        <input id="3" type="file" />
                        <label htmlFor="3">Добавить фотографию</label>
                      </div>
                      <div className="admin__portfolio__img__change portfolioAddNew">
                        <input id="4" type="file" />
                        <label htmlFor="4">Добавить фотографию</label>
                      </div>
                      <div className="admin__portfolio__img__change portfolioAddNew">
                        <input id="5" type="file" />
                        <label htmlFor="5">Добавить фотографию</label>
                      </div>
                      <div className="admin__portfolio__img__change portfolioAddNew">
                        <input id="6" type="file" />
                        <label htmlFor="6">Добавить фотографию</label>
                      </div>
                    </li>
                  )}
                  <li>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_1.png" alt="" />
                      <input id="1" type="file" />
                      <label htmlFor="1">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_1.png" alt="" />
                      <input id="2" type="file" />
                      <label htmlFor="1">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_1.png" alt="" />
                      <input id="3" type="file" />
                      <label htmlFor="1">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_1.png" alt="" />
                      <input id="4" type="file" />
                      <label htmlFor="4">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_2.png" alt="" />
                      <input id="5" type="file" />
                      <label htmlFor="5">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_3.png" alt="" />
                      <input id="6" type="file" />
                      <label htmlFor="6">Изменить фотографию</label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div id="portfolio__day">
              <div className="port__slider">
                <ul id="ul" ref={DayRef}>
                  {portfolioAdd && (
                    <li>
                      <div className="admin__portfolio__img__change portfolioAddNew">
                        <input id="1" type="file" />
                        <label htmlFor="1">Добавить фотографию</label>
                      </div>
                      <div className="admin__portfolio__img__change portfolioAddNew">
                        <input id="2" type="file" />
                        <label htmlFor="2">Добавить фотографию</label>
                      </div>
                      <div className="admin__portfolio__img__change portfolioAddNew">
                        <input id="3" type="file" />
                        <label htmlFor="3">Добавить фотографию</label>
                      </div>
                      <div className="admin__portfolio__img__change portfolioAddNew">
                        <input id="4" type="file" />
                        <label htmlFor="4">Добавить фотографию</label>
                      </div>
                      <div className="admin__portfolio__img__change portfolioAddNew">
                        <input id="5" type="file" />
                        <label htmlFor="5">Добавить фотографию</label>
                      </div>
                      <div className="admin__portfolio__img__change portfolioAddNew">
                        <input id="6" type="file" />
                        <label htmlFor="6">Добавить фотографию</label>
                      </div>
                    </li>
                  )}
                  <li>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_1.png" alt="" />
                      <input id="1" type="file" />
                      <label htmlFor="1">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_2.png" alt="" />
                      <input id="2" type="file" />
                      <label htmlFor="2">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_3.png" alt="" />
                      <input id="3" type="file" />
                      <label htmlFor="3">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_1.png" alt="" />
                      <input id="4" type="file" />
                      <label htmlFor="4">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_2.png" alt="" />
                      <input id="5" type="file" />
                      <label htmlFor="5">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_3.png" alt="" />
                      <input id="6" type="file" />
                      <label htmlFor="6">Изменить фотографию</label>
                    </div>
                  </li>
                  <li>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_1.png" alt="" />
                      <input id="1" type="file" />
                      <label htmlFor="1">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_2.png" alt="" />
                      <input id="2" type="file" />
                      <label htmlFor="2">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_3.png" alt="" />
                      <input id="3" type="file" />
                      <label htmlFor="3">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_1.png" alt="" />
                      <input id="4" type="file" />
                      <label htmlFor="4">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_2.png" alt="" />
                      <input id="5" type="file" />
                      <label htmlFor="5">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_3.png" alt="" />
                      <input id="6" type="file" />
                      <label htmlFor="6">Изменить фотографию</label>
                    </div>
                  </li>
                  <li>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_1.png" alt="" />
                      <input id="1" type="file" />
                      <label htmlFor="1">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_2.png" alt="" />
                      <input id="2" type="file" />
                      <label htmlFor="2">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_3.png" alt="" />
                      <input id="3" type="file" />
                      <label htmlFor="3">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_1.png" alt="" />
                      <input id="4" type="file" />
                      <label htmlFor="4">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_2.png" alt="" />
                      <input id="5" type="file" />
                      <label htmlFor="5">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_3.png" alt="" />
                      <input id="6" type="file" />
                      <label htmlFor="6">Изменить фотографию</label>
                    </div>
                  </li>
                  <li>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_1.png" alt="" />
                      <input id="1" type="file" />
                      <label htmlFor="1">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_2.png" alt="" />
                      <input id="2" type="file" />
                      <label htmlFor="2">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_3.png" alt="" />
                      <input id="3" type="file" />
                      <label htmlFor="3">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_1.png" alt="" />
                      <input id="4" type="file" />
                      <label htmlFor="4">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_2.png" alt="" />
                      <input id="5" type="file" />
                      <label htmlFor="5">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_3.png" alt="" />
                      <input id="6" type="file" />
                      <label htmlFor="6">Изменить фотографию</label>
                    </div>
                  </li>
                  <li>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_1.png" alt="" />
                      <input id="1" type="file" />
                      <label htmlFor="1">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_2.png" alt="" />
                      <input id="2" type="file" />
                      <label htmlFor="2">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_3.png" alt="" />
                      <input id="3" type="file" />
                      <label htmlFor="3">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_1.png" alt="" />
                      <input id="4" type="file" />
                      <label htmlFor="4">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_2.png" alt="" />
                      <input id="5" type="file" />
                      <label htmlFor="5">Изменить фотографию</label>
                    </div>
                    <div className="admin__portfolio__img__change">
                      <img src="/img/services_3.png" alt="" />
                      <input id="6" type="file" />
                      <label htmlFor="6">Изменить фотографию</label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPortfolio;
