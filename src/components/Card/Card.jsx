import styled from "styled-components";
import { CardContent, CardDate, CardGroup, CardNumber, CardPoint, CardPoints, CardsCard, CardsItem, CardTitle } from "./Card.styled";
import { Link } from "react-router-dom";

  
 const CardTopic = styled.div`
    width: auto;
    height: 20px;
    padding: 5px 14px;
    border-radius: 18px;
    background-color: ${({ $colors }) =>
        $colors === "Orange" ? "#FFE4C2" : $colors === "Green" ? "#B4FDD1" 
        : $colors === "Purple" ? "#E9D4FF" : "#EEEEE"
};

    p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
    color: ${({ $colors }) =>
        $colors === "Orange" ? "#FF6D00" : $colors === "Green" ? "#06B16E" 
        : $colors === "Purple" ? "#9A48F1" : "#EEEEE"
};
    }
  `;


export function Card({ card }) {
    let topicClass = "";
    if (card.topic === "Web Design") topicClass = "Orange";
    else if (card.topic === "Research") topicClass = "Green";
    else if (card.topic === "Copywriting") topicClass = "Purple";


    return (
        <CardsItem>
                    <CardsCard>
                        <CardGroup>
                            <CardTopic $colors={topicClass}><p>{card.topic}</p></CardTopic>
                            <Link to={`/cards/${card.id}`} >
                                <CardPoints>
                                    <CardPoint/><CardPoint/><CardPoint/>
                                </CardPoints>
                            </Link>
                        </CardGroup>
                        <CardContent>
                            <Link to={`/cards/${card.id}`}>
                                <CardTitle>{card.title}</CardTitle>
                            </Link>
                            <CardDate>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                    <g clipPath="url(#clip0_1_415)">
                                        <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinejoin="round" />
                                        <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_415">
                                            <rect width="13" height="13" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <CardNumber>{card.date}</CardNumber>
                            </CardDate>
                        </CardContent>
                    </CardsCard>
                </CardsItem>
    )
}