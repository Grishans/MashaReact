import { observer } from "mobx-react-lite";
import React from "react";
import { coursecStores } from "../../../stores/coursesStores";
import { ICourse } from "../../../types";
import AdminBTN from "../AdminBTN";

const AdminCourses: React.FC = observer(
  (): React.ReactElement => {
    const course: ICourse[] = coursecStores.items;
    const [courseCurr, setCourseCurr] = React.useState<ICourse>();

    const changeInput = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
      setCourseCurr((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    };
    const saveForm = async (): Promise<void> => {
      try {
        await coursecStores.edit(courseCurr!);
        setCourseCurr(undefined);
        alert("Курсы сохранены!");
      } catch (error) {
        console.error(`Ошибка Курсы: ${error}`);
      }
    };
    return (
      <>
        <div className="admin__sevices__wrap">
          <AdminBTN
            Save
            onClick={saveForm}
            disabled={courseCurr === undefined}
          />
          <div className="adminCourses__wrap">
            {course &&
              course.map((item, index) => (
                <div
                  className="admin__content__box adminCourses__box"
                  key={index}
                >
                  <label className="adminLabel">{item.title}</label>{" "}
                  <label
                    id="AdminEditLabel"
                    onClick={() => setCourseCurr(item)}
                  >
                    Редактировать
                  </label>
                  {/* <button
										onClick={() => setCourseCurr(item)}
										disabled={courseCurr === undefined}>
										Редактировать
									</button> */}
                  <hr />
                  <label htmlFor="coursesINP1" className="adminLabel">
                    Название курса
                  </label>
                  <input
                    id="coursesINP1"
                    type="text"
                    name="title"
                    value={
                      courseCurr && courseCurr._id === item._id
                        ? courseCurr.title
                        : item.title
                    }
                    onChange={changeInput}
                    className="adminInput"
                    disabled={courseCurr && courseCurr!._id !== item._id}
                    placeholder="Введите название"
                  />
                  <label htmlFor="coursesTA1" className="adminLabel">
                    Описание
                  </label>
                  <textarea
                    className="adminInput"
                    id="coursesTA1"
                    name="desc"
                    value={
                      courseCurr && courseCurr._id === item._id
                        ? courseCurr.desc
                        : item.desc
                    }
                    onChange={changeInput}
                    disabled={courseCurr && courseCurr!._id !== item._id}
                    placeholder="Описание"
                  ></textarea>
                </div>
              ))}
          </div>
        </div>
      </>
    );
  }
);

export default AdminCourses;
