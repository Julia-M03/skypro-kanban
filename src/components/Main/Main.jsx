import { Outlet } from "react-router-dom";
import { cardList } from "../../data";
import { Column } from "../Column/Column";
import { Container } from "../Header/Header.styled";
import { MainBlock, MainContent, SMain } from "./Main.styled";


const statusList = ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"]

export function Main({ loading, words, error }) {

    return (
        // {
        //     loading ? <Loader /> : ""
        // }
        <SMain>
            <Container>
                <MainBlock>
                    <MainContent>
                        {cardList.length > 0 &&
                            statusList.map((item) => (
                                <Column
                                    words={words}
                                    loading={loading}
                                    title={item}
                                    key={item}
                                    cards={cardList.filter((card) => card.status === item)}
                                />
                            ))}
                        {cardList.length === 0 && <p>Нет задач</p>}
                    </MainContent>
                </MainBlock>
                <p>{error}</p>
            </Container>
        </SMain>
    )
}