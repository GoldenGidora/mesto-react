import '../pages/index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import {currentUserContext} from "../contexts/CurrentUserContext";
import React from 'react';
import api from "../utils/Api";

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getCards()])
            .then(([user, cards]) => {
                setCurrentUser(user);
                setCards(cards);
            })
            .catch(e => console.log(e))
    }, []);

    const closeAllPopups = () => {
        setEditAvatarPopupOpen(false);
        setAddPlacePopupOpen(false);
        setEditProfilePopupOpen(false);
        setSelectedCard({});
    }

    const handleAddPlaceClick = () => {
        setAddPlacePopupOpen(true);
    }

    const handleEditAvatarClick = () => {
        setEditAvatarPopupOpen(true);
    }

    const handleEditProfileClick = () => {
        setEditProfilePopupOpen(true);
    }

    const handleCardClick = card => {
        setSelectedCard(card);
    }

    const handleCardLike = card => {
        const isLiked = card.likes.some(
            i => i._id === currentUser._id
        );
        api.changeLikeCardStatus(card._id, isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            })
    }

    const handleCardDelete = card => {
        api.removeCard(card._id)
            .then(() => {
                setCards(cards.filter((item) => {
                    return item._id !== card._id;
                }))
            })
    }

    return (
        <div className="page">
            <currentUserContext.Provider value={currentUser}>
                <Header/>
                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                    onCardLike={handleCardLike}
                    onCardDelete={handleCardDelete}
                    cards={cards}
                />
                <Footer/>
                <PopupWithForm
                    name='edit'
                    title='Редактировать профиль'
                    submitText='Сохранить'
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                >
                    <label className="popup__field">
                        <input
                            id="username-input"
                            name="username"
                            type="text"
                            placeholder="Введите имя"
                            className="popup__input popup__input_type_name"
                            minLength="2"
                            maxLength="40"
                            required
                        />
                        <span className="popup__input-error username-input-error"></span>
                    </label>
                    <label className="popup__field">
                        <input
                            id="user-desc-input"
                            name="userdescription"
                            type="text"
                            placeholder="Введите описание"
                            className="popup__input popup__input_type_description"
                            minLength="2"
                            maxLength="200"
                            required
                        />
                        <span className="popup__input-error user-desc-input-error"></span>
                    </label>
                </PopupWithForm>
                <PopupWithForm
                    name='add'
                    title='Новое место'
                    submitText='Сохранить'
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                >
                    <label className="popup__field">
                        <input
                            id="postTitle-input"
                            name="name"
                            type="text"
                            placeholder="Название"
                            className="popup__input popup__input_type_place"
                            minLength="2"
                            maxLength="30"
                            required
                        />
                        <span className="popup__input-error postTitle-input-error"></span>
                    </label>
                    <label className="popup__field">
                        <input
                            id="postUrl-input"
                            name="link"
                            type="url"
                            placeholder="Ссылка на картинку"
                            className="popup__input popup__input_type_link"
                            required
                        />
                        <span className="popup__input-error postUrl-input-error"></span>
                    </label>
                </PopupWithForm>
                <ImagePopup
                    card={selectedCard}
                    onClose={closeAllPopups}
                />
                <PopupWithForm
                    name='confirm'
                    title='Вы уверены?'
                    submitText='Да'
                    onClose={closeAllPopups}
                />
                <PopupWithForm
                    name='avatar'
                    title='Обновить аватар'
                    submitText='Сохранить'
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                >
                    <label className="popup__field">
                        <input
                            id="avatar-input"
                            name="avatar"
                            type="url"
                            placeholder="Вставьте ссылку"
                            className="popup__input popup__input_type_link"
                            required
                        />
                        <span className="popup__input-error avatar-input-error"></span>
                    </label>
                </PopupWithForm>
            </currentUserContext.Provider>
        </div>
    );
}

export default App;
