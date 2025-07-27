import { useContext } from "react";
import { Card } from "../Card/Card";
import { Cards, ColumnTitle, MainColumn } from "./Column.styled";
import { TasksContext } from "../../context/TasksContext";


export function Column({title}) {
    const { tasks } = useContext(TasksContext);

    return (
        <MainColumn>
            <ColumnTitle>
                {title}
            </ColumnTitle>
            <Cards>
                {
                    tasks.filter((card) => card.status === title ).map((card) => <Card card={card} key={card._id} />)
                }
            </Cards>
        </MainColumn>
    )
}