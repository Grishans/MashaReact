import React from "react";
import { Select } from "antd";
import AdminBTN from "../AdminBTN";

const AdminReviews: React.FC = (): React.ReactElement => {
  const { Option } = Select;

  const [reviewsAdd, setReviewsAdd] = React.useState(false);
  const [reviesVideoShow, setReviewsVideoShow] = React.useState(true);
  const [reviesTextShow, setReviewsTextShow] = React.useState(false);

  const ReviewsAddShow = React.useCallback(() => {
    setReviewsAdd((prev) => !prev);
  }, []);

  const VideoShow = React.useCallback(() => {
    setReviewsVideoShow(true);
    setReviewsTextShow(false);
  }, []);
  const TextShow = React.useCallback(() => {
    setReviewsVideoShow(false);
    setReviewsTextShow(true);
  }, []);

  React.useEffect(() => {
    const addBTN = document.querySelector<HTMLButtonElement>("#adminADD");
    addBTN!.onclick = ReviewsAddShow;
  });

  function handleChange(value: any) {
    if (value === "Video") {
      VideoShow();
    } else if (value === "Text") {
      TextShow();
    }
  }
  return (
    <>
      <div className="admin__sevices__wrap">
        <div className="admin__reviews__BTN">
          <Select defaultValue="Видео отзывы" onChange={handleChange}>
            <Option id="labelVideo" value="Video">
              Видео отзывы
            </Option>
            <Option id="labelNight" value="Text">
              Текствые отзывы
            </Option>
          </Select>
          <AdminBTN Save />
          <AdminBTN Add />
        </div>
        <div className="amdin__reviews__content__wrap">
          {reviesVideoShow && (
            <div className="arcw__video__wrap">
              {reviewsAdd && (
                <div className="arcw__box">
                  <div className="arcw__top">
                    <img src="img/admin_cross.svg" alt="" />
                  </div>
                  <div className="ascb__inputs__img">
                    <div className="ascb__inputs__addNew">
                      <input id="inpFile" type="file" />
                      <label htmlFor="inpFile">
                        <img src="/img/admin_camera.png" alt="" />
                      </label>
                    </div>
                  </div>
                </div>
              )}
              <div className="arcw__box">
                <div className="arcw__top">
                  <img src="img/admin_cross.svg" alt="" />
                </div>
                <div className="arcw__bottomImg">
                  <video controls src="/img/video.mp4"></video>
                </div>
                <div className="Admin__change">
                  <label htmlFor="personalPhoto">Изменить видео</label>
                  <input id="personalPhoto" type="file" />
                </div>
              </div>
              <div className="arcw__box">
                <div className="arcw__top">
                  <img src="img/admin_cross.svg" alt="" />
                </div>
                <div className="arcw__bottomImg">
                  <video controls src="/img/video.mp4"></video>
                </div>
                <div className="Admin__change">
                  <label htmlFor="personalPhoto">Изменить видео</label>
                  <input id="personalPhoto" type="file" />
                </div>
              </div>
            </div>
          )}
          {reviesTextShow && (
            <div className="arcw__text__wrap">
              {reviewsAdd && (
                <div className="arcw__box">
                  <div className="arcw__top">
                    <img src="img/admin_cross.svg" alt="" />
                  </div>
                  <div className="ascb__inputs__img">
                    <div className="ascb__inputs__addNew">
                      <input id="inpFile" type="file" />
                      <label htmlFor="inpFile">
                        <img src="/img/admin_camera.png" alt="" />
                      </label>
                    </div>
                  </div>
                </div>
              )}
              <div className="arcw__box">
                <div className="arcw__top">
                  <img src="img/admin_cross.svg" alt="" />
                </div>
                <div className="arcw__bottomImg">
                  <img src="/img/review_template.png" alt="" />
                </div>
                <div className="Admin__change">
                  <label htmlFor="personalPhoto">Изменить видео</label>
                  <input id="personalPhoto" type="file" />
                </div>
              </div>
              <div className="arcw__box">
                <div className="arcw__top">
                  <img src="img/admin_cross.svg" alt="" />
                </div>
                <div className="arcw__bottomImg">
                  <img src="/img/review_template.png" alt="" />
                </div>
                <div className="Admin__change">
                  <label htmlFor="personalPhoto">Изменить видео</label>
                  <input id="personalPhoto" type="file" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminReviews;
