import { useNavigate } from "react-router-dom";
import { Calendar } from "../Calendar/Calendar";
import React, { useContext, useState } from "react";
import { TasksContext } from "../../context/TasksContext";
import { postTask } from "../../services/api";
import { AuthContext } from "../../context/AuthContext";
import { FormNewArea, FormNewBlock, FormNewInput, InputRadio, PopNewCardBlock, PopNewCardCategories, PopNewCardCategoriesTheme, PopNewCardClose, PopNewCardContainer, PopNewCardContent, PopNewCardForm, PopNewCardTtl, PopNewCardWrap, RadioToolbarLabel1, RadioToolbarLabel2, RadioToolbarLabel3, SPopNewCard, Subttl } from "./PopNewCard.styled";
import { ButtonClose, PopBrowseButtonBrowse } from "../PopBrowse/PopBrowse.styled";


export function PopNewCard() {

    const navigate = useNavigate();

    function handleCloseWindow(event) {
        event.preventDefault()
        navigate("/")
    }

    const { user } = useContext(AuthContext)
    const { setTasks } = useContext(TasksContext)
    const [error, setError] = useState('')

    const [editCard, setEditCard] = useState({
        title: '',
        topic: '',
        status: '',
        description: '',
        realDate: new Date(),
    })

    function onChangeDate(date) {
        setEditCard({
            ...editCard,
            date: date.toISOString(),
            realDate: date,
        });
    }

    const OnAddNewCard = () => {
        setError('')
        const title = !editCard.title ? 'Новая задача' : editCard.title
        const topic = !editCard.topic ? 'Research' : editCard.topic
        const status = !editCard.status ? 'Без статуса' : editCard.status
        const newCard = {
            description: editCard.description,
            title,
            topic,
            status,
        }

        if (editCard.date)
            newCard.date = editCard.date

        if (!editCard.description) {
            return setError('Заполните описание')
        }

        postTask(user.token, newCard)
            .then((responce) => {
                setTasks(responce)
                navigate("/")
            })
            .catch((err) => {
                setError(err.message)
            })
    }

    const onChangeInput = (e) => {
        const { value, name } = e.target
        setEditCard({ ...editCard, [name]: value })
    }

    return (
        <SPopNewCard id="popNewCard">
            <PopNewCardContainer>
                <PopNewCardBlock>
                    <PopNewCardContent>
                        <PopNewCardTtl>Создание задачи</PopNewCardTtl>
                        <PopNewCardClose onClick={handleCloseWindow}> &#10006; </PopNewCardClose>
                        <PopNewCardWrap>
                            <PopNewCardForm action="#">
                                <FormNewBlock>
                                    <Subttl htmlFor="formTitle">Название задачи</Subttl>
                                    <FormNewInput
                                        onChange={onChangeInput}
                                        value={editCard.title}
                                        type="text"
                                        name="title"
                                        id="formTitle"
                                        placeholder="Введите название задачи..."
                                        autoFocus=""
                                    />
                                </FormNewBlock>
                                <FormNewBlock>
                                    <Subttl htmlFor="textArea">
                                        Описание задачи
                                    </Subttl>
                                    <FormNewArea
                                        onChange={onChangeInput}
                                        name="description"
                                        id="textArea"
                                        placeholder="Введите описание задачи..."
                                        defaultValue={""}
                                    />
                                </FormNewBlock>
                            </PopNewCardForm>

                            <Calendar date={editCard.realDate} setDate={onChangeDate} readOnly={false} />

                        </PopNewCardWrap>
                        <PopNewCardCategories>
                            <p>Категория</p>
                            <PopNewCardCategoriesTheme>
                                <InputRadio
                                    type="radio"
                                    id="radio1"
                                    name="topic"
                                    value="Web Design"
                                    onChange={onChangeInput}
                                />
                                <RadioToolbarLabel1 htmlFor="radio1">Web Design</RadioToolbarLabel1>

                                <InputRadio
                                    type="radio"
                                    id="radio2"
                                    name="topic"
                                    value="Research"
                                    onChange={onChangeInput}
                                />
                                <RadioToolbarLabel2 htmlFor="radio2">Research</RadioToolbarLabel2>

                                <InputRadio
                                    type="radio"
                                    id="radio3"
                                    name="topic"
                                    value="Copywriting"
                                    onChange={onChangeInput}
                                />
                                <RadioToolbarLabel3 htmlFor="radio3">Copywriting</RadioToolbarLabel3>

                            </PopNewCardCategoriesTheme>
                        </PopNewCardCategories>

                        <PopBrowseButtonBrowse>
                            {error || (<>&nbsp;</>)}
                            <ButtonClose onClick={OnAddNewCard}>Создать задачу</ButtonClose>
                        </PopBrowseButtonBrowse>
                    </PopNewCardContent>
                </PopNewCardBlock>
            </PopNewCardContainer>
        </SPopNewCard>
    )
}
