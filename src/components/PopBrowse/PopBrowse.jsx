import { useContext, useEffect, useMemo, useState } from "react";
import { Calendar } from "../Calendar/Calendar";
import { ButtonChengeDelete, ButtonClose, ButtonGroup, CategoriesTheme, CategoriesThemeText, FormBrowseArea, FormBrowseBlock, FormBrowseTitle, OpenedCardTheme, PopBrouwse, PopBrouwseBlock, PopBrouwseContainer, PopBrouwseContent, PopBrouwseTitle, PopBrouwseTopBlock, PopBrouwseWrap, PopBrowseButtonBrowse, PopBrowseForm, PopBrowseStatus, StatusPsubTtlP, StatusThemeLabel, StatusThemeLabel_1, StatusThemesDiv } from "./PopBrowse.styled";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { TasksContext } from "../../context/TasksContext";
import { AuthContext } from "../../context/AuthContext";
import { deleteTask, editTask } from "../../services/api";

export function PopBrowse() {
  const { id } = useParams();
  const { tasks, setTasks } = useContext(TasksContext);
  const { user } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const [editableTask, setEditableTask] = useState({
    name: "",
    translation: "",
  });

  const task = useMemo(
    () => tasks.find((task) => task._id === id) || { name: "", translation: "" },
    [id, tasks]
  );

  const [selectedDate] = useState(task?.date);

  const [editCard, setEditCard] = useState({
    title: task?.title,
    description: task?.description,
    topic: task?.topic,
    status: task?.status,
    date: task?.date,
  });

  useEffect(() => {
    if (task) {
      setEditableTask({
        name: task.name,
        translation: task.translation,
      });
    }
  }, [task]);


  const handleFormSubmit = (e) => {
    e.preventDefault();
    const taskData = {
      ...editCard,
      date: selectedDate,
    };
    console.log(taskData);
    editTask({ token: user.token, id: id, taskData: taskData })
      .then((newCard) => {
        console.log(newCard)
        setTasks(newCard.tasks);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setEditCard({
      ...editCard,
      [name]: value,
    });
  };

  if (!task) {
    return <Navigate to={"/"} />;
  }

  const handlerDeleteTask = () => {
    deleteTask({ token: user.token, id: id })
      .then((tasks) => {
        setTasks(tasks);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  function handleCloseWindow(event) {
    event.preventDefault()
    navigate("/")
  }

  const themeList = {
    webDesign: "Web Design",
    research: "Research",
    copywriting: "Copywriting",
    development: "Development",
    marketing: "Marketing",
  };

  const color = (theme) => {
    switch (theme) {
      case themeList.webDesign:
        return "orange";
      case themeList.research:
        return "green";
      case themeList.copywriting:
        return "purple";
      default:
        return "gray";
    }
  };

  return (
    <PopBrouwse>
      <PopBrouwseContainer>
        <PopBrouwseBlock>
          <PopBrouwseContent>
            <PopBrouwseTopBlock>
              <PopBrouwseTitle>{task.title}</PopBrouwseTitle>
              <CategoriesTheme $color={color(task.topic)} $active={true}>
                <CategoriesThemeText $color={color(task.topic)}>{task.topic}</CategoriesThemeText>
              </CategoriesTheme>
            </PopBrouwseTopBlock>
            <PopBrowseStatus>
              <StatusPsubTtlP>Статус</StatusPsubTtlP>
              {!isEditing && <StatusThemeLabel_1>{editCard.status}</StatusThemeLabel_1>}
              {isEditing && (
                <StatusThemesDiv>
                  <OpenedCardTheme
                    type="radio"
                    checked={editCard.status === "Без статуса"}
                    id="radio1"
                    name="status"
                    value="Без статуса"
                    onChange={onChangeInput}
                  />
                  <StatusThemeLabel >Без статуса</StatusThemeLabel>

                  <OpenedCardTheme
                    type="radio"
                    checked={editCard.status === "Нужно сделать"}
                    id="radio2"
                    name="status"
                    value="Нужно сделать"
                    onChange={onChangeInput}
                  />
                  <StatusThemeLabel htmlFor="radio2">Нужно сделать</StatusThemeLabel>

                  <OpenedCardTheme
                    type="radio"
                    checked={editCard.status === "В работе"}
                    id="radio3"
                    name="status"
                    value="В работе"
                    onChange={onChangeInput}
                  />
                  <StatusThemeLabel htmlFor="radio3">В работе</StatusThemeLabel>

                  <OpenedCardTheme
                    type="radio"
                    checked={editCard.status === "Тестирование"}
                    id="radio4"
                    name="status"
                    value="Тестирование"
                    onChange={onChangeInput}
                  />
                  <StatusThemeLabel htmlFor="radio4">Тестирование</StatusThemeLabel>

                  <OpenedCardTheme
                    type="radio"
                    checked={editCard.status === "Готово"}
                    id="radio5"
                    name="status"
                    value="Готово"
                    onChange={onChangeInput}
                  />
                  <StatusThemeLabel htmlFor="radio5">Готово</StatusThemeLabel>
                </StatusThemesDiv>
              )}
            </PopBrowseStatus>
            <PopBrouwseWrap>
              <PopBrowseForm id="formBrowseCard" action="#">
                <FormBrowseBlock>
                  <FormBrowseTitle htmlFor="textArea01">
                    Описание задачи
                  </FormBrowseTitle>
                  {!isEditing && (
                    <FormBrowseArea
                      onChange={onChangeInput}
                      name="description"
                      id="textArea01"
                      readOnly=""
                      placeholder="Введите описание задачи..."
                      defaultValue={task.description}
                      disabled={true}
                    />
                  )}
                  {isEditing && (
                    <FormBrowseArea
                      onChange={onChangeInput}
                      name="description"
                      id="textArea01"
                      readOnly=""
                      placeholder="Введите описание задачи..."
                      defaultValue={task.description}
                      disabled={false}
                    />
                  )}
                </FormBrowseBlock>
              </PopBrowseForm>

              <Calendar />

            </PopBrouwseWrap>
            {!isEditing && (<PopBrowseButtonBrowse>
              <ButtonGroup>
                <ButtonChengeDelete onClick={() => { setIsEditing(!isEditing); }}>Редактировать задачу</ButtonChengeDelete>

                <ButtonChengeDelete onClick={handlerDeleteTask}>Удалить задачу</ButtonChengeDelete>
              </ButtonGroup>

              <ButtonClose onClick={handleCloseWindow}>Закрыть</ButtonClose>

            </PopBrowseButtonBrowse>)}
            {isEditing && (<PopBrowseButtonBrowse>
              <ButtonGroup>
                <ButtonChengeDelete onClick={handleFormSubmit}>Сохранить</ButtonChengeDelete>

                <ButtonChengeDelete onClick={() => { setIsEditing(!isEditing); }}>Отменить</ButtonChengeDelete>

                <ButtonChengeDelete onClick={handlerDeleteTask} >Удалить задачу</ButtonChengeDelete>
              </ButtonGroup>

              <ButtonClose onClick={handleCloseWindow}>Закрыть</ButtonClose>

            </PopBrowseButtonBrowse>)}
          </PopBrouwseContent>
        </PopBrouwseBlock>
      </PopBrouwseContainer>
    </PopBrouwse>
  );
};
