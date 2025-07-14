// import { Outlet } from "react-router-dom";
import { Column } from "../Column/Column";
import { Container } from "../Header/Header.styled";
import { MainBlock, MainContent, SMain } from "./Main.styled";


const statusList = ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"]

export function Main({ loading, tasks, error }) {

    return (
        // {
        //     loading ? <Loader /> : ""
        // }
        <SMain>
            <Container>
                <MainBlock>
                    <MainContent>
                        {tasks.length > 0 &&
                            statusList.map((item) => (
                                <Column
                                    // tasks={tasks}
                                    // loading={loading}
                                    title={item}
                                    key={item}
                                    // cards={cardList.filter((card) => card.status === item)}
                                />
                            ))}
                        {tasks.length === 0 && <p>Нет задач</p>}
                    </MainContent>
                </MainBlock>
                <p>{error}</p>
            </Container>
        </SMain>
    )
}