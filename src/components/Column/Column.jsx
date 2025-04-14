import { cardList } from "../../data";
import { Card } from "../Card/Card";
import { Cards, ColumnTitle, MainColumn } from "./Column.styled";


export function Column({title}) {
    return (
        <MainColumn>
            <ColumnTitle>
                {title}
            </ColumnTitle>
            <Cards>
                {
                    cardList.filter((card) => card.status === title ).map((card) => <Card card={card} key={card.id} />)
                }
            </Cards>
        </MainColumn>
    )
}