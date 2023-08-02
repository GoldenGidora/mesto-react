import React from "react";
import {currentUserContext} from "../contexts/CurrentUserContext";

const Card = ({card, onCardClick}) => {
    const currentUser = React.useContext(currentUserContext);
    const handleCardClick = () => {
        onCardClick(card);
    }
    return (
        <div className="cards__item">
            <button type="button" className={card.owner_id === currentUser._id ? 'cards__delete' : ''}></button>
            <img className="cards__img"
                 src={card.link}
                 alt={card.name}
                 onClick={handleCardClick}
            />
            <div className="cards__info">
                <h2 className="cards__title">{card.name}</h2>
                <div className="cards__likes">
                    <button type="button" className="cards__like"></button>
                    <span className="cards__like-number"> {card.likes.length} </span>
                </div>
            </div>
        </div>
    )
}

export default Card;