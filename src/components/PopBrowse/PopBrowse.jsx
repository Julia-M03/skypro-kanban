import { useContext, useEffect, useMemo, useState } from "react";
import { Calendar } from "../Calendar/Calendar";
import { ButtonChengeDelete, ButtonClose, ButtonGroup, CategoriesTheme, CategoriesThemeText, FormBrowseArea, FormBrowseBlock, FormBrowseTitle, OpenedCardTheme, PopBrouwse, PopBrouwseBlock, PopBrouwseContainer, PopBrouwseContent, PopBrouwseTitle, PopBrouwseTopBlock, PopBrouwseWrap, PopBrowseButtonBrowse, PopBrowseForm, PopBrowseStatus, StatusPsubTtlP, StatusThemeLabel, StatusThemeLabel_1, StatusThemesDiv } from "./PopBrowse.styled";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { TasksContext } from "../../context/TasksContext";
import { AuthContext } from "../../context/AuthContext";
import { deleteTask, editTask } from "../../services/api";
import { FormNewInput } from "../PopNewCard/PopNewCard.styled";


export function PopBrowse() {
  const { id } = useParams();
  const { tasks, setTasks } = useContext(TasksContext);
  const { user } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const task = useMemo(
    () => tasks.find((task) => task._id === id),
    [id, tasks]
  );

  const [card, setCard] = useState();
  const [editCard, setEditCard] = useState();

  useEffect(() => {
    if (task) {
      const date = new Date(task.date)

      setCard({ ...task, realDate: date })
      setEditCard({ ...task, realDate: date })
    }
  }, [task]);

  function handleCancel(e) {
    e.preventDefault();
    setEditCard({ ...card })
    setIsEditing(false);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setCard({ ...editCard })

    editTask(user.token, id, editCard)
      .then((tasks) => {
        setIsEditing(false);
        setTasks(tasks);
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

  if (!editCard) {
    return null
  }

  const handlerDeleteTask = () => {
    deleteTask(user.token, id)
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

  function onChangeDate(date) {
    setEditCard({
      ...editCard,
      date: date.toISOString(),
      realDate: date,
    });
  }

  return (
    <PopBrouwse>
      <PopBrouwseContainer>
        <PopBrouwseBlock>
          <PopBrouwseContent>
            <PopBrouwseTopBlock>
              {isEditing && <PopBrouwseTitle>Редактирование задачи</PopBrouwseTitle>}
              {!isEditing && <PopBrouwseTitle>{card.title}</PopBrouwseTitle>}

              {!isEditing && (<CategoriesTheme $color={color(card.topic)} $active={true}>
                <CategoriesThemeText $color={color(card.topic)}>{card.topic}</CategoriesThemeText>
              </CategoriesTheme>)}
            </PopBrouwseTopBlock>
            <PopBrowseStatus>
              <StatusPsubTtlP>Статус</StatusPsubTtlP>
              {!isEditing && <StatusThemeLabel_1>{card.status}</StatusThemeLabel_1>}
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
                  <StatusThemeLabel htmlFor="radio1" $isActive={editCard.status === "Без статуса"}>Без статуса</StatusThemeLabel>

                  <OpenedCardTheme
                    type="radio"
                    checked={editCard.status === "Нужно сделать"}
                    id="radio2"
                    name="status"
                    value="Нужно сделать"
                    onChange={onChangeInput}
                  />
                  <StatusThemeLabel htmlFor="radio2" $isActive={editCard.status === "Нужно сделать"}>Нужно сделать</StatusThemeLabel>

                  <OpenedCardTheme
                    type="radio"
                    checked={editCard.status === "В работе"}
                    id="radio3"
                    name="status"
                    value="В работе"
                    onChange={onChangeInput}
                  />
                  <StatusThemeLabel htmlFor="radio3" $isActive={editCard.status === "В работе"}>В работе</StatusThemeLabel>

                  <OpenedCardTheme
                    type="radio"
                    checked={editCard.status === "Тестирование"}
                    id="radio4"
                    name="status"
                    value="Тестирование"
                    onChange={onChangeInput}
                  />
                  <StatusThemeLabel htmlFor="radio4" $isActive={editCard.status === "Тестирование"}>Тестирование</StatusThemeLabel>

                  <OpenedCardTheme
                    type="radio"
                    checked={editCard.status === "Готово"}
                    id="radio5"
                    name="status"
                    value="Готово"
                    onChange={onChangeInput}
                  />
                  <StatusThemeLabel htmlFor="radio5" $isActive={editCard.status === "Готово"}>Готово</StatusThemeLabel>
                </StatusThemesDiv>
              )}
            </PopBrowseStatus>

            <PopBrouwseWrap>
              <PopBrowseForm id="formBrowseCard" action="#">

                {isEditing && (
                  <FormBrowseBlock>
                    <FormBrowseTitle htmlFor="formTitle">Название задачи</FormBrowseTitle>
                    <FormNewInput
                      onChange={onChangeInput}
                      type="text"
                      name="title"
                      id="formTitle"
                      placeholder="Введите название задачи..."
                      value={editCard.title}
                      autoFocus
                    />
                  </FormBrowseBlock>
                )}

                <FormBrowseBlock>
                  <FormBrowseTitle htmlFor="textArea01">
                    Описание задачи
                  </FormBrowseTitle>
                  <FormBrowseArea
                    onChange={onChangeInput}
                    name="description"
                    placeholder="Введите описание задачи..."
                    disabled={!isEditing}
                    $isEditing={isEditing}
                    value={editCard.description}
                  />
                </FormBrowseBlock>
              </PopBrowseForm>

              <Calendar date={editCard.realDate} setDate={onChangeDate} readOnly={!isEditing} />

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

                <ButtonChengeDelete onClick={handleCancel}>Отменить</ButtonChengeDelete>

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
