import React from "react";
import { Select } from "antd";

const AdminFeedback: React.FC = (): React.ReactElement => {
  const { Option } = Select;

  const adminFeedbackActiveRefLabel = React.useRef<HTMLLabelElement>(null);
  const adminFeedbackCompletedRefLabel = React.useRef<HTMLLabelElement>(null);

  const [active, setActive] = React.useState(true);
  const [completed, setCompleted] = React.useState(false);

  const [feedbackMake, setFeedbackMake] = React.useState(true);
  const [feedbackCourses, setFeedbackCourses] = React.useState(false);

  const checkFeedbackToogle = React.useCallback(() => {
    adminFeedbackActiveRefLabel.current!.style.color = "#197BBD";
    adminFeedbackActiveRefLabel.current!.style.borderColor = "#197BBD";

    adminFeedbackCompletedRefLabel.current!.style.color = "#AEAEAE";
    adminFeedbackCompletedRefLabel.current!.style.borderColor = "#AEAEAE";
    adminFeedbackActiveRefLabel.current!.addEventListener("click", () => {
      setActive(true);
      setCompleted(false);

      adminFeedbackActiveRefLabel.current!.style.color = "#197BBD";
      adminFeedbackActiveRefLabel.current!.style.borderColor = "#197BBD";

      adminFeedbackCompletedRefLabel.current!.style.color = "#AEAEAE";
      adminFeedbackCompletedRefLabel.current!.style.borderColor = "#AEAEAE";
    });

    adminFeedbackCompletedRefLabel.current!.addEventListener("click", () => {
      setActive(false);
      setCompleted(true);

      adminFeedbackActiveRefLabel.current!.style.color = "#AEAEAE";

      adminFeedbackActiveRefLabel.current!.style.borderColor = "#AEAEAE";

      adminFeedbackCompletedRefLabel.current!.style.color = "#AA4D54";

      adminFeedbackCompletedRefLabel.current!.style.borderColor = "#AA4D54";
    });
  }, []);

  React.useEffect(() => {
    checkFeedbackToogle();
  }, [checkFeedbackToogle]);

  const MakeShow = React.useCallback(() => {
    setFeedbackMake(true);
    setFeedbackCourses(false);
  }, []);
  const CoursesShow = React.useCallback(() => {
    setFeedbackMake(false);
    setFeedbackCourses(true);
  }, []);

  function handleChange(value: any) {
    if (value === "Make") {
      MakeShow();
    } else if (value === "Courses") {
      CoursesShow();
    }
  }
  return (
    <>
      <div className="admin__sevices__wrap">
        <div className="admin__feedBack__select">
          <Select defaultValue="Запись на макияж" onChange={handleChange}>
            <Option id="labelMake" value="Make">
              Запись на макияж
            </Option>
            <Option id="labelCourses" value="Courses">
              Запись на курсы
            </Option>
          </Select>
        </div>
        <div className="admin__feedback__toogle">
          <label
            ref={adminFeedbackActiveRefLabel}
            htmlFor="adminFeedbackActive"
          >
            Активные
          </label>
          <label
            ref={adminFeedbackCompletedRefLabel}
            htmlFor="adminFeedbackСompleted"
          >
            Завершенные
          </label>
        </div>
        <div className="admin__feedback__table">
          <div className="aft__make">
            {feedbackMake && (
              <div className="aftm__Wrap">
                {active && (
                  <table>
                    <tr className="adminTableTitle">
                      <th></th>
                      <th>Имя</th>
                      <th>Номер</th>
                      <th>Дата</th>
                      <th>Тип макияжа</th>
                      <th></th>
                    </tr>
                    <tr>
                      <td className="adminTDActive">
                        <img src="/img/admin_check.svg" alt="" />
                      </td>
                      <td>Мария</td>
                      <td>+380712281488</td>
                      <td>15.01.2021</td>
                      <td>Вечерний макияж</td>
                      <td className="adminTDCross">
                        <img src="/img/admin_cross.svg" alt="" />
                      </td>
                    </tr>
                    <tr>
                      <td className="adminTDActive">
                        <img src="/img/admin_check.svg" alt="" />
                      </td>
                      <td>Мария</td>
                      <td>+380712281488</td>
                      <td>15.01.2021</td>
                      <td>Вечерний макияж</td>
                      <td className="adminTDCross">
                        <img src="/img/admin_cross.svg" alt="" />
                      </td>
                    </tr>
                    <tr>
                      <td className="adminTDActive">
                        <img src="/img/admin_check.svg" alt="" />
                      </td>
                      <td>Мария</td>
                      <td>+380712281488</td>
                      <td>15.01.2021</td>
                      <td>Вечерний макияж</td>
                      <td className="adminTDCross">
                        <img src="/img/admin_cross.svg" alt="" />
                      </td>
                    </tr>
                    <tr>
                      <td className="adminTDActive">
                        <img src="/img/admin_check.svg" alt="" />
                      </td>
                      <td>Мария</td>
                      <td>+380712281488</td>
                      <td>15.01.2021</td>
                      <td>Вечерний макияж</td>
                      <td className="adminTDCross">
                        <img src="/img/admin_cross.svg" alt="" />
                      </td>
                    </tr>
                  </table>
                )}
                {completed && (
                  <table>
                    <tr className="adminTableTitle">
                      <th></th>
                      <th>Имя</th>
                      <th>Номер</th>
                      <th>Дата</th>
                      <th>Тип макияжа</th>
                      <th></th>
                    </tr>
                    <tr>
                      <td className="adminTDActive">
                        <img src="/img/admin_check.svg" alt="" />
                      </td>
                      <td>Виктор</td>
                      <td>+380712281488</td>
                      <td>15.01.2021</td>
                      <td>Вечерний макияж</td>
                      <td className="adminTDCross">
                        <img src="/img/admin_cross.svg" alt="" />
                      </td>
                    </tr>
                    <tr>
                      <td className="adminTDActive">
                        <img src="/img/admin_check.svg" alt="" />
                      </td>
                      <td>Мария</td>
                      <td>+380712281488</td>
                      <td>15.01.2021</td>
                      <td>Вечерний макияж</td>
                      <td className="adminTDCross">
                        <img src="/img/admin_cross.svg" alt="" />
                      </td>
                    </tr>
                    <tr>
                      <td className="adminTDActive">
                        <img src="/img/admin_check.svg" alt="" />
                      </td>
                      <td>Мария</td>
                      <td>+380712281488</td>
                      <td>15.01.2021</td>
                      <td>Вечерний макияж</td>
                      <td className="adminTDCross">
                        <img src="/img/admin_cross.svg" alt="" />
                      </td>
                    </tr>
                    <tr>
                      <td className="adminTDActive">
                        <img src="/img/admin_check.svg" alt="" />
                      </td>
                      <td>Мария</td>
                      <td>+380712281488</td>
                      <td>15.01.2021</td>
                      <td>Вечерний макияж</td>
                      <td className="adminTDCross">
                        <img src="/img/admin_cross.svg" alt="" />
                      </td>
                    </tr>
                  </table>
                )}
              </div>
            )}
          </div>

          {feedbackCourses && (
            <div className="atfm__courses">
              {active && (
                <table>
                  <tr className="adminTableTitle">
                    <th></th>
                    <th>Имя</th>
                    <th>Номер</th>
                    <th>Дата</th>
                    <th>Тип макияжа</th>
                    <th></th>
                  </tr>
                  <tr>
                    <td className="adminTDActive">
                      <img src="/img/admin_check.svg" alt="" />
                    </td>
                    <td>Елизаветта</td>
                    <td>+380712281488</td>
                    <td>15.01.2021</td>
                    <td>Вечерний макияж</td>
                    <td className="adminTDCross">
                      <img src="/img/admin_cross.svg" alt="" />
                    </td>
                  </tr>
                  <tr>
                    <td className="adminTDActive">
                      <img src="/img/admin_check.svg" alt="" />
                    </td>
                    <td>Мария</td>
                    <td>+380712281488</td>
                    <td>15.01.2021</td>
                    <td>Вечерний макияж</td>
                    <td className="adminTDCross">
                      <img src="/img/admin_cross.svg" alt="" />
                    </td>
                  </tr>
                  <tr>
                    <td className="adminTDActive">
                      <img src="/img/admin_check.svg" alt="" />
                    </td>
                    <td>Мария</td>
                    <td>+380712281488</td>
                    <td>15.01.2021</td>
                    <td>Вечерний макияж</td>
                    <td className="adminTDCross">
                      <img src="/img/admin_cross.svg" alt="" />
                    </td>
                  </tr>
                  <tr>
                    <td className="adminTDActive">
                      <img src="/img/admin_check.svg" alt="" />
                    </td>
                    <td>Мария</td>
                    <td>+380712281488</td>
                    <td>15.01.2021</td>
                    <td>Вечерний макияж</td>
                    <td className="adminTDCross">
                      <img src="/img/admin_cross.svg" alt="" />
                    </td>
                  </tr>
                </table>
              )}
              {completed && (
                <table>
                  <tr className="adminTableTitle">
                    <th></th>
                    <th>Имя</th>
                    <th>Номер</th>
                    <th>Дата</th>
                    <th>Тип макияжа</th>
                    <th></th>
                  </tr>
                  <tr>
                    <td className="adminTDActive">
                      <img src="/img/admin_check.svg" alt="" />
                    </td>
                    <td>Юлия</td>
                    <td>+380712281488</td>
                    <td>15.01.2021</td>
                    <td>Вечерний макияж</td>
                    <td className="adminTDCross">
                      <img src="/img/admin_cross.svg" alt="" />
                    </td>
                  </tr>
                  <tr>
                    <td className="adminTDActive">
                      <img src="/img/admin_check.svg" alt="" />
                    </td>
                    <td>Мария</td>
                    <td>+380712281488</td>
                    <td>15.01.2021</td>
                    <td>Вечерний макияж</td>
                    <td className="adminTDCross">
                      <img src="/img/admin_cross.svg" alt="" />
                    </td>
                  </tr>
                  <tr>
                    <td className="adminTDActive">
                      <img src="/img/admin_check.svg" alt="" />
                    </td>
                    <td>Мария</td>
                    <td>+380712281488</td>
                    <td>15.01.2021</td>
                    <td>Вечерний макияж</td>
                    <td className="adminTDCross">
                      <img src="/img/admin_cross.svg" alt="" />
                    </td>
                  </tr>
                  <tr>
                    <td className="adminTDActive">
                      <img src="/img/admin_check.svg" alt="" />
                    </td>
                    <td>Мария</td>
                    <td>+380712281488</td>
                    <td>15.01.2021</td>
                    <td>Вечерний макияж</td>
                    <td className="adminTDCross">
                      <img src="/img/admin_cross.svg" alt="" />
                    </td>
                  </tr>
                </table>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminFeedback;
