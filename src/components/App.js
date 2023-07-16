import '../pages/index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React from 'react';

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true);
    }

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
    }

    return (
        <div className="page">
            <Header/>
            <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
            />
            <Footer/>
            <PopupWithForm
                name='edit'
                title='Редактировать профиль'
                isOpen={isEditProfilePopupOpen}
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
                <button type="submit" className="popup__submit">Сохранить</button>
            </PopupWithForm>
            <PopupWithForm
                name='add'
                title='Новое место'
                isOpen={isAddPlacePopupOpen}
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
                <button type="submit" className="popup__submit">Сохранить</button>
            </PopupWithForm>
            <ImagePopup/>
            <div className="popup popup_type_confirm">
                <div className="popup__container">
                    <button type='button' className="popup__close"></button>
                    <h2 className="popup__title">Вы уверены?</h2>
                    <button type="button" id="DeleteCard" className="popup__submit">Да</button>
                </div>
            </div>
            <PopupWithForm
                name='avatar'
                title='Обновить аватар'
                isOpen={isEditAvatarPopupOpen}
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
                <button type="submit" className="popup__submit">Сохранить</button>
            </PopupWithForm>
        </div>
    );
}

export default App;
