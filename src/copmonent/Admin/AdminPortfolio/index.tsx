import React from "react";
import AdminBTN from "../AdminBTN";
import { Select } from "antd";
import { observer } from "mobx-react-lite";
import { IPortfolio } from "../../../types";
import { portfolioStores } from "../../../stores/portfolioStores";
import { attach } from "../../../utils/attachFiles";
type TFilePhoto = {
  photo1?: any;
  photo2?: any;
  photo3?: any;
  photo4?: any;
  photo5?: any;
  photo6?: any;
};
const AdminPortfolio: React.FC = observer(
  (): React.ReactElement => {
    const portfolio: IPortfolio[] = portfolioStores.items;
    const [currentId, setCurrentId] = React.useState<string>("");
    const [currentSlide, setCurrentSlide] = React.useState<IPortfolio>();
    const [currentSlideID, setCurrentSlideID] = React.useState<string>("");
    const [photoSlide, setPhotoSlide] = React.useState<TFilePhoto>();
    const WeedingRef = React.useRef<HTMLUListElement>(null);
    const current_slide = React.useRef<HTMLParagraphElement>(null);
    const quantity_slide = React.useRef<HTMLParagraphElement>(null);
    const { Option } = Select;

    const addPhoto = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const file = e.target.files![0];
      setPhotoSlide((pre) => ({ ...pre, [e.target.name]: file }));
    };

    const changeObj = async (
      e: React.ChangeEvent<HTMLInputElement>
    ): Promise<void> => {
      try {
        const file = e.target.files![0];
        setPhotoSlide((pre) => ({ ...pre, [e.target.name]: file }));
      } catch (error) {
        console.error(`Ошибка добавления файла: ${error}`);
      }
    };

    const changeSlide = React.useCallback(() => {
      let step: any;
      let quantity: any;
      let slideWidth: any;
      let currentSlider: any;
      let customPrev = document.querySelector("#customPrev");
      let customNext = document.querySelector("#customNext");

      quantity = document.querySelectorAll(
        "#portfolio__weeding > .port__slider > #ul > li"
      ).length;

      step = document.querySelector(
        "#portfolio__weeding > .port__slider > #ul > li"
      );
      slideWidth = 0;
      currentSlider = 1;
      current_slide.current!.innerHTML = String(currentSlider);
      quantity_slide.current!.innerHTML = String(quantity);
      WeedingRef.current!.style.left = "0px";

      customPrev!.addEventListener("click", () => {
        slideWidth -= step.offsetWidth;
        currentSlider -= 1;
        WeedingRef.current!.style.left = "-" + slideWidth + "px";
        if (currentSlider < 1) {
          slideWidth = step.offsetWidth * (quantity - 1);
          WeedingRef.current!.style.left = "-" + slideWidth + "px";
          currentSlider = quantity;
        }
        current_slide.current!.innerHTML = currentSlider;
      });
      customNext!.addEventListener("click", () => {
        slideWidth += step.offsetWidth;
        currentSlider += 1;
        WeedingRef.current!.style.left = "-" + slideWidth + "px";
        if (currentSlider > quantity) {
          WeedingRef.current!.style.left = "0px";
          currentSlider = 1;
          slideWidth = 0;
        }
        current_slide.current!.innerHTML = currentSlider;
      });
    }, []);

    const changePortfolio = (e: any): void => {
      setCurrentId(e);
      setCurrentSlide(
        portfolio && portfolio.filter((item) => item._id === e)[0]
      );
      setTimeout(changeSlide, 100);
    };

    const saveForm = async (): Promise<void> => {
      try {
        let pic1: string,
          pic2: string,
          pic3: string,
          pic4: string,
          pic5: string,
          pic6: string;

        if (currentSlideID && currentSlideID!.length >= 1) {
          photoSlide && photoSlide.photo1
            ? (pic1 = await attach(photoSlide.photo1))
            : (pic1 = currentSlide!.photos!.filter(
                (item) => item._id === currentSlideID
              )[0].photo1!);
          photoSlide && photoSlide.photo2
            ? (pic2 = await attach(photoSlide.photo2))
            : (pic2 = currentSlide!.photos!.filter(
                (item) => item._id === currentSlideID
              )[0].photo2!);
          photoSlide && photoSlide.photo3
            ? (pic3 = await attach(photoSlide.photo3))
            : (pic3 = currentSlide!.photos!.filter(
                (item) => item._id === currentSlideID
              )[0].photo3!);
          photoSlide && photoSlide.photo4
            ? (pic4 = await attach(photoSlide.photo4))
            : (pic4 = currentSlide!.photos!.filter(
                (item) => item._id === currentSlideID
              )[0].photo4!);
          photoSlide && photoSlide.photo5
            ? (pic5 = await attach(photoSlide.photo5))
            : (pic5 = currentSlide!.photos!.filter(
                (item) => item._id === currentSlideID
              )[0].photo5!);
          photoSlide && photoSlide.photo6
            ? (pic6 = await attach(photoSlide.photo6))
            : (pic6 = currentSlide!.photos!.filter(
                (item) => item._id === currentSlideID
              )[0].photo6!);
          currentSlide!.photos!.map((item) => {
            if (item._id === currentSlideID) {
              item.photo1 = pic1;
              item.photo2 = pic2;
              item.photo3 = pic3;
              item.photo4 = pic4;
              item.photo5 = pic5;
              item.photo6 = pic6;
            }
            return item;
          });
          const obj: IPortfolio = {
            _id: currentSlide && currentSlide._id,
            title: currentSlide && currentSlide.title,
            photos: currentSlide && currentSlide.photos,
          };
          portfolioStores.edit(obj);
          alert("Изменения сохранены!!!");
          setPhotoSlide(undefined);
          setPortfolioAdd(false);
          setCurrentSlideID("");
          console.log("currentSlide!.photos!", currentSlide!.photos!);
          return;
        }

        photoSlide && photoSlide.photo1
          ? (pic1 = await attach(photoSlide.photo1))
          : (pic1 = "");
        photoSlide && photoSlide.photo2
          ? (pic2 = await attach(photoSlide.photo2))
          : (pic2 = "");
        photoSlide && photoSlide.photo3
          ? (pic3 = await attach(photoSlide.photo3))
          : (pic3 = "");
        photoSlide && photoSlide.photo4
          ? (pic4 = await attach(photoSlide.photo4))
          : (pic4 = "");
        photoSlide && photoSlide.photo5
          ? (pic5 = await attach(photoSlide.photo5))
          : (pic5 = "");
        photoSlide && photoSlide.photo6
          ? (pic6 = await attach(photoSlide.photo6))
          : (pic6 = "");

        currentSlide!.photos!.push({
          photo1: pic1!,
          photo2: pic2!,
          photo3: pic3!,
          photo4: pic4!,
          photo5: pic5!,
          photo6: pic6!,
        });
        const obj: IPortfolio = {
          _id: currentSlide && currentSlide._id,
          title: currentSlide && currentSlide.title,
          photos: currentSlide && currentSlide.photos,
        };
        portfolioStores.edit(obj);
        alert("Сохранилось!!!");
        setPhotoSlide(undefined);
        setPortfolioAdd(false);
      } catch (error) {
        console.error("Portfolio", error);
      }
    };

    const [portfolioAdd, setPortfolioAdd] = React.useState<boolean>(false);

    const portfolioNewShow = React.useCallback(() => {
      setPortfolioAdd((prev) => !prev);
    }, []);

    React.useEffect(() => {
      const addBTN = document.querySelector<HTMLButtonElement>("#adminADD");
      addBTN!.onclick = portfolioNewShow;
    }, [portfolioNewShow]);
    React.useEffect(() => {
      portfolio && setCurrentId(portfolio[0]._id!);
      portfolio && setCurrentSlide(portfolio[0]!);
      setTimeout(changeSlide, 100);
      // changeSlide();
    }, [changeSlide, portfolio]);
    return (
      <>
        <div className="admin__sevices__wrap">
          <div className="admin__services__btn">
            <Select
              defaultValue={currentId && currentId!}
              value={currentId && currentId!}
              onChange={changePortfolio}
              id="selectPort"
            >
              {portfolio &&
                portfolio.map((item, index) => (
                  <Option id="labelWeeding" value={item._id!} key={index}>
                    {item.title}
                  </Option>
                ))}
            </Select>
            <AdminBTN Add />
            <AdminBTN
              Save
              onClick={saveForm}
              disabled={photoSlide === undefined}
            />
            {/* <button className="adminDELETE">Удалить слайд</button> */}
          </div>
          <div className="admin__portfolio__title">
            <label>Изменить название</label>
            <input
              value={currentSlide && currentSlide.title}
              name="title"
              onChange={(e) =>
                setCurrentSlide((pre) => ({
                  ...pre,
                  [e.target.name]: e.target.value,
                }))
              }
              className="adminInput"
              type="text"
            />
          </div>

          <div className="admin__portfolio__wrap">
            <div className="portfolio__slideButton">
              <span id="customPrev" className="portfolio_prev">
                &#60;
              </span>
              <p
                ref={current_slide}
                id="firstLetter"
                className="firstLetter"
              ></p>
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
                          <img
                            src={
                              photoSlide?.photo1 &&
                              URL.createObjectURL(photoSlide.photo1)
                            }
                            alt=""
                          />
                          <input
                            id="1"
                            type="file"
                            name="photo1"
                            onChange={addPhoto}
                          />
                          <label htmlFor="1">Добавить фотографию</label>
                        </div>
                        <div className="admin__portfolio__img__change portfolioAddNew">
                          <img
                            src={
                              photoSlide?.photo2 &&
                              URL.createObjectURL(photoSlide.photo2)
                            }
                            alt=""
                          />
                          <input
                            id="2"
                            type="file"
                            name="photo2"
                            onChange={addPhoto}
                          />
                          <label htmlFor="2">Добавить фотографию</label>
                        </div>
                        <div className="admin__portfolio__img__change portfolioAddNew">
                          <img
                            src={
                              photoSlide?.photo3 &&
                              URL.createObjectURL(photoSlide.photo3)
                            }
                            alt=""
                          />
                          <input
                            id="3"
                            type="file"
                            name="photo3"
                            onChange={addPhoto}
                          />
                          <label htmlFor="3">Добавить фотографию</label>
                        </div>
                        <div className="admin__portfolio__img__change portfolioAddNew">
                          <img
                            src={
                              photoSlide?.photo4 &&
                              URL.createObjectURL(photoSlide.photo4)
                            }
                            alt=""
                          />
                          <input
                            id="4"
                            type="file"
                            name="photo4"
                            onChange={addPhoto}
                          />
                          <label htmlFor="4">Добавить фотографию</label>
                        </div>
                        <div className="admin__portfolio__img__change portfolioAddNew">
                          <img
                            src={
                              photoSlide?.photo5 &&
                              URL.createObjectURL(photoSlide.photo5)
                            }
                            alt=""
                          />
                          <input
                            id="5"
                            type="file"
                            name="photo5"
                            onChange={addPhoto}
                          />
                          <label htmlFor="5">Добавить фотографию</label>
                        </div>
                        <div className="admin__portfolio__img__change portfolioAddNew">
                          <img
                            src={
                              photoSlide?.photo6 &&
                              URL.createObjectURL(photoSlide.photo6)
                            }
                            alt=""
                          />
                          <input
                            id="6"
                            type="file"
                            name="photo6"
                            onChange={addPhoto}
                          />
                          <label htmlFor="6">Добавить фотографию</label>
                        </div>
                      </li>
                    )}
                    {currentSlide &&
                      currentSlide.photos!.map((item, index) => (
                        <li key={index} id="slideLi">
                          <div className="admin__portfolio__img__change">
                            <button
                              className="adminDELETE"
                              onClick={() => {
                                if (window.confirm("Удалить экран?")) {
                                  currentSlide.photos! = currentSlide.photos!.filter(
                                    (fill) => fill._id !== item._id
                                  );
                                  const obj: IPortfolio = {
                                    _id: currentSlide._id,
                                    photos: currentSlide.photos,
                                  };
                                  portfolioStores.edit(obj);
                                }
                              }}
                            >
                              Удалить слайд
                            </button>
                            <img
                              src={
                                photoSlide && photoSlide.photo1
                                  ? URL.createObjectURL(photoSlide.photo1)
                                  : `${process.env.REACT_APP_LINK}${item.photo1}`
                              }
                              alt=""
                            />
                            <input
                              id="1"
                              type="file"
                              name="photo1"
                              onChange={changeObj}
                            />
                            <label
                              htmlFor="1"
                              onClick={() => {
                                setCurrentSlideID(item._id!);
                              }}
                            >
                              Изменить фотографию
                            </label>
                          </div>
                          <div className="admin__portfolio__img__change">
                            <img
                              src={
                                photoSlide && photoSlide.photo2
                                  ? URL.createObjectURL(photoSlide.photo2)
                                  : `${process.env.REACT_APP_LINK}${item.photo2}`
                              }
                              alt=""
                            />
                            <input
                              id="2"
                              type="file"
                              name="photo2"
                              onChange={changeObj}
                            />
                            <label
                              htmlFor="2"
                              onClick={() => {
                                setCurrentSlideID(item._id!);
                              }}
                            >
                              Изменить фотографию
                            </label>
                          </div>
                          <div className="admin__portfolio__img__change">
                            <img
                              src={
                                photoSlide && photoSlide.photo3
                                  ? URL.createObjectURL(photoSlide.photo3)
                                  : `${process.env.REACT_APP_LINK}${item.photo3}`
                              }
                              alt=""
                            />
                            <input
                              id="3"
                              type="file"
                              name="photo3"
                              onChange={changeObj}
                            />
                            <label
                              htmlFor="3"
                              onClick={() => {
                                setCurrentSlideID(item._id!);
                              }}
                            >
                              Изменить фотографию
                            </label>
                          </div>
                          <div className="admin__portfolio__img__change">
                            <img
                              src={
                                photoSlide && photoSlide.photo4
                                  ? URL.createObjectURL(photoSlide.photo4)
                                  : `${process.env.REACT_APP_LINK}${item.photo4}`
                              }
                              alt=""
                            />
                            <input
                              id="4"
                              type="file"
                              name="photo4"
                              onChange={changeObj}
                            />
                            <label
                              htmlFor="4"
                              onClick={() => {
                                setCurrentSlideID(item._id!);
                              }}
                            >
                              Изменить фотографию
                            </label>
                          </div>
                          <div className="admin__portfolio__img__change">
                            <img
                              src={
                                photoSlide && photoSlide.photo5
                                  ? URL.createObjectURL(photoSlide.photo5)
                                  : `${process.env.REACT_APP_LINK}${item.photo5}`
                              }
                              alt=""
                            />
                            <input
                              id="5"
                              type="file"
                              name="photo5"
                              onChange={changeObj}
                            />
                            <label
                              htmlFor="5"
                              onClick={() => {
                                setCurrentSlideID(item._id!);
                              }}
                            >
                              Изменить фотографию
                            </label>
                          </div>
                          <div className="admin__portfolio__img__change">
                            <img
                              src={
                                photoSlide && photoSlide.photo6
                                  ? URL.createObjectURL(photoSlide.photo6)
                                  : `${process.env.REACT_APP_LINK}${item.photo6}`
                              }
                              alt=""
                            />
                            <input
                              id="6"
                              type="file"
                              name="photo6"
                              onChange={changeObj}
                            />
                            <label
                              htmlFor="6"
                              onClick={() => {
                                setCurrentSlideID(item._id!);
                              }}
                            >
                              Изменить фотографию
                            </label>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
);

export default AdminPortfolio;
