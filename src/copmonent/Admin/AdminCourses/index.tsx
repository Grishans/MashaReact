import React from "react";
import AdminBTN from "../AdminBTN";

const AdminCourses: React.FC = (): React.ReactElement => {
  return (
    <>
      <div className="admin__sevices__wrap">
        <AdminBTN Save />
        <div className="adminCourses__wrap">
          <div className="admin__content__box adminCourses__box">
            <label className="adminLabel">Сам себе визажист</label>
            <hr />
            <label htmlFor="coursesINP1" className="adminLabel">
              Название курса
            </label>
            <input
              id="coursesINP1"
              type="text"
              className="adminInput"
              placeholder="Введите название"
            />
            <label htmlFor="coursesTA1" className="adminLabel">
              Описание
            </label>
            <textarea
              className="adminInput"
              id="coursesTA1"
              placeholder="Описание"
            ></textarea>
          </div>
          <div className="admin__content__box adminCourses__box">
            <label className="adminLabel">Сам себе визажист</label>
            <hr />
            <label htmlFor="coursesINP1" className="adminLabel">
              Название курса
            </label>
            <input
              id="coursesINP1"
              type="text"
              className="adminInput"
              placeholder="Введите название"
            />
            <label htmlFor="coursesTA1" className="adminLabel">
              Описание
            </label>
            <textarea
              className="adminInput"
              id="coursesTA1"
              placeholder="Описание"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCourses;
