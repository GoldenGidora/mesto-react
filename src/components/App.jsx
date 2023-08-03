import '../pages/index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import {currentUserContext} from "../contexts/CurrentUserContext";
import React from 'react';
import api from "../utils/Api";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
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
                }));
            })
    }

    const handleUpdateUser = userInfo => {
        setIsLoading(true);
        api.setUserInfo(userInfo)
            .then((user) => {
                setCurrentUser(user);
                closeAllPopups();
            })
            .catch(e => console.log(e))
            .finally(() => setIsLoading(false))
    }

    const handleUpdateAvatar = (newData) => {
        setIsLoading(true);
        api.editAvatar(newData)
            .then((data) => {
                setCurrentUser(data);
                closeAllPopups();
            })
            .finally(() => setIsLoading(false))
    }

    const handleAddPlace = (newData) => {
        setIsLoading(true);
        api.addCard(newData)
            .then(newCard => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            })
            .then(e => console.log(e))
            .finally(() => setIsLoading(false))
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
                <EditProfilePopup
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    onUpdateUser={handleUpdateUser}
                    onLoading={isLoading}
                />
                <AddPlacePopup
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    onAddPlace={handleAddPlace}
                    onLoading={isLoading}
                />
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
                <EditAvatarPopup
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                    onUpdateAvatar={handleUpdateAvatar}
                    onLoading={isLoading}
                />
            </currentUserContext.Provider>
        </div>
    );
}

export default App;
