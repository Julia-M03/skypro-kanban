import { cardList } from "../../data";
import { Card } from "../Card/Card";

export function Column({title}) {
    return (
        <div className="main__column column">
            <div className="column__title">
                <p>{title}</p>
            </div>
            <div className="cards">
                {
                    cardList.filter((card) => card.status === title ).map((card) => <Card card={card} key={card.id} />)
                }
            </div>
        </div>
    )
}