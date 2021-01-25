import React from "react";
import AdminBTN from "../AdminBTN";

const AdminPortfolio: React.FC = (): React.ReactElement => {
  const WeedingRef = React.useRef<HTMLUListElement>(null);
  const NightRef = React.useRef<HTMLUListElement>(null);
  const DayRef = React.useRef<HTMLUListElement>(null);
  const current_slide = React.useRef<HTMLParagraphElement>(null);
  const quantity_slide = React.useRef<HTMLParagraphElement>(null);

  const customSlider = React.useCallback(() => {
    var step: any;
    var quantity: any;
    var slideWidth: any;
    var currentSlide: any;
    var Weeding = document.querySelector("#labelWeeding");
    var Night = document.querySelector("#labelNight");
    var Day = document.querySelector("#labelDay");
    var customPrev = document.querySelector("#customPrev");
    var customNext = document.querySelector("#customNext");

    Weeding!.addEventListener("click", () => {
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

      Weeding?.setAttribute("style", "color:#aa4d54");
      Night?.setAttribute("style", "color:#000");
      Day?.setAttribute("style", "color:#000");
    });
    ///////////////////////////////////////////////////////////
    Night!.addEventListener("click", () => {
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

      Weeding?.setAttribute("style", "color:#000");
      Night?.setAttribute("style", "color:#aa4d54");
      Day?.setAttribute("style", "color:#000");
    });
    ///////////////////////////////////////////////////////////
    Day!.addEventListener("click", () => {
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

      Weeding?.setAttribute("style", "color:#000");
      Night?.setAttribute("style", "color:#000");
      Day?.setAttribute("style", "color:#aa4d54");
    });

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

    document.getElementById("labelWeeding")?.click(); // если не кликнуть на любой toogle, то цифры в слайдере не появятся (костыль, наверное)
    ///////////////////////////////////////////////////////////////
  }, []);

  React.useEffect(() => {
    customSlider();
  }, [customSlider]);
  return (
    <>
      <div className="admin__sevices__wrap">
        <div className="admin__services__btn">
          <AdminBTN DropDn />
          <AdminBTN Save />
        </div>
        <div className="admin__portfolio__title">
          <label>Изменить название</label>
          <input
            placeholder="Свадебный вакияж"
            className="adminInput"
            type="text"
          />
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
            <div className="portfolio__toogle">
              <label id="labelWeeding" htmlFor="weeding">
                Свадебный макияж
              </label>
              <label id="labelNight" htmlFor="night">
                Вечерний макияж
              </label>
              <label id="labelDay" htmlFor="day">
                Дневной макияж
              </label>
            </div>

            <div id="portfolio__weeding">
              <div className="port__slider">
                <ul id="ul" ref={WeedingRef}>
                  <li>
                    <img src="/img/services_1.png" alt="" />
                    <img src="/img/services_2.png" alt="" />
                    <img src="/img/services_3.png" alt="" />
                    <img src="/img/services_1.png" alt="" />
                    <img src="/img/services_2.png" alt="" />
                    <img src="/img/services_3.png" alt="" />
                  </li>
                  <li>
                    <img src="/img/services_1.png" alt="" />
                    <img src="/img/services_1.png" alt="" />
                    <img src="/img/services_1.png" alt="" />
                    <img src="/img/services_1.png" alt="" />
                    <img src="/img/services_1.png" alt="" />
                    <img src="/img/services_1.png" alt="" />
                  </li>
                  <li>
                    <img src="/img/services_2.png" alt="" />
                    <img src="/img/services_2.png" alt="" />
                    <img src="/img/services_2.png" alt="" />
                    <img src="/img/services_2.png" alt="" />
                    <img src="/img/services_2.png" alt="" />
                    <img src="/img/services_2.png" alt="" />
                  </li>
                </ul>
              </div>
            </div>

            <div id="portfolio__night">
              <div className="port__slider">
                <ul id="ul" ref={NightRef}>
                  <li>
                    <img src="/img/services_1.png" alt="" />
                    <img src="/img/services_1.png" alt="" />
                    <img src="/img/services_1.png" alt="" />
                    <img src="/img/services_1.png" alt="" />
                    <img src="/img/services_1.png" alt="" />
                    <img src="/img/services_1.png" alt="" />
                  </li>
                  <li>
                    <img src="/img/services_2.png" alt="" />
                    <img src="/img/services_2.png" alt="" />
                    <img src="/img/services_2.png" alt="" />
                    <img src="/img/services_2.png" alt="" />
                    <img src="/img/services_2.png" alt="" />
                    <img src="/img/services_2.png" alt="" />
                  </li>
                  <li>
                    <img src="/img/services_3.png" alt="" />
                    <img src="/img/services_3.png" alt="" />
                    <img src="/img/services_3.png" alt="" />
                    <img src="/img/services_3.png" alt="" />
                    <img src="/img/services_3.png" alt="" />
                    <img src="/img/services_3.png" alt="" />
                  </li>
                  <li>
                    <img src="/img/services_3.png" alt="" />
                    <img src="/img/services_3.png" alt="" />
                    <img src="/img/services_3.png" alt="" />
                    <img src="/img/services_3.png" alt="" />
                    <img src="/img/services_3.png" alt="" />
                    <img src="/img/services_3.png" alt="" />
                  </li>
                  <li>
                    <img src="/img/services_3.png" alt="" />
                    <img src="/img/services_3.png" alt="" />
                    <img src="/img/services_3.png" alt="" />
                    <img src="/img/services_3.png" alt="" />
                    <img src="/img/services_3.png" alt="" />
                    <img src="/img/services_3.png" alt="" />
                  </li>
                </ul>
              </div>
            </div>

            <div id="portfolio__day">
              <div className="port__slider">
                <ul id="ul" ref={DayRef}>
                  <li>
                    <img src="/img/services_3.png" alt="" />
                    <img src="/img/services_3.png" alt="" />
                    <img src="/img/services_3.png" alt="" />
                    <img src="/img/services_3.png" alt="" />
                    <img src="/img/services_3.png" alt="" />
                    <img src="/img/services_3.png" alt="" />
                  </li>
                  <li>
                    <img src="/img/services_1.png" alt="" />
                    <img src="/img/services_1.png" alt="" />
                    <img src="/img/services_1.png" alt="" />
                    <img src="/img/services_1.png" alt="" />
                    <img src="/img/services_1.png" alt="" />
                    <img src="/img/services_1.png" alt="" />
                  </li>
                  <li>
                    <img src="/img/services_2.png" alt="" />
                    <img src="/img/services_2.png" alt="" />
                    <img src="/img/services_2.png" alt="" />
                    <img src="/img/services_2.png" alt="" />
                    <img src="/img/services_2.png" alt="" />
                    <img src="/img/services_2.png" alt="" />
                  </li>
                  <li>
                    <img src="/img/services_2.png" alt="" />
                    <img src="/img/services_2.png" alt="" />
                    <img src="/img/services_2.png" alt="" />
                    <img src="/img/services_2.png" alt="" />
                    <img src="/img/services_2.png" alt="" />
                    <img src="/img/services_2.png" alt="" />
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
