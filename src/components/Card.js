import React from "react";

const Card = ({card, onCardClick}) => {
    const handleCardClick = () => {
        onCardClick(card);
    }
    return (
        <div className="cards__item" key={card._id}>
            <button type="button" className="cards__delete"></button>
            <img className="cards__img"
                 src={card.link}
                 alt={card.name}
                onClick={handleCardClick}
            />
            <div className="cards__info">
                <h2 className="cards__title">{card.name}</h2>
                <div className="cards__likes">
                    <button type="button" className="cards__like"></button>
                    <span className="cards__like-number">
                                        {card.likes.length}
                                    </span>
                </div>
            </div>
        </div>
    )
}

export default Card;