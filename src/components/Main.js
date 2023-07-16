import EditButton from '../images/edit_button.svg';
import AddButton from '../images/add.svg';
import api from '../utils/Api';
import React from "react";
import Card from "./Card";

function Main(props) {
    const [userAvatar, setUserAvatar] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
            .then(data => {
                setUserName(data.name);
                setUserDescription(data.about);
                setUserAvatar(data.avatar);
            })
            .catch(e => console.log(e));
    })

    React.useEffect(() => {
        api.getCards()
            .then(data => {
                setCards(data);
            })
            .catch(e => console.log(e));
    })

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__card">
                    <img src={userAvatar} alt="аватар профиля" className="profile__avatar"/>
                    <button
                        className="profile__avatar-edit"
                        onClick={props.onEditAvatar}
                    />
                    <div className="profile__info">
                        <div className="profile__user">
                            <h1 className="profile__title">{userName}</h1>
                            <button
                                type="button"
                                className="profile__button profile__button_type_edit"
                                onClick={props.onEditProfile}
                            >
                                <img src={EditButton} className="image image_type_edit"
                                     alt="Редактировать профиль"/>
                            </button>
                        </div>
                        <p className="profile__text">{userDescription}</p>
                    </div>
                </div>
                <button
                    type="button"
                    className="profile__button profile__button_type_add"
                    onClick={props.onAddPlace}
                >
                    <img src={AddButton} className="image image_type_add" alt="Добавить пост"/>
                </button>
            </section>
            <section className="cards">
                {cards.map(card => {
                    return <Card
                        key={card._id}
                        card={card}
                        onCardClick={props.onCardClick}
                    />
                })}

            </section>
        </main>
    )
}

export default Main