import React from 'react';
import PopupWithForm from "./PopupWithForm";
import {currentUserContext} from '../contexts/CurrentUserContext';

const EditProfilePopup = ({isOpen, onClose, onUpdateUser}) => {
    const currentUser = React.useContext(currentUserContext)
    const [name, setName] = React.useState("");
    const [about, setAbout] = React.useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        setAbout(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateUser({
            name,
            about
        })
    }

    React.useEffect(() => {
        setName(currentUser.name);
        setAbout(currentUser.about);
    }, [currentUser]);

    return (
        <PopupWithForm
            name='edit'
            title='Редактировать профиль'
            submitText='Сохранить'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <label className="popup__field">
                <input
                    id="username-input"
                    name="name"
                    type="text"
                    placeholder="Введите имя"
                    className="popup__input popup__input_type_name"
                    minLength="2"
                    maxLength="40"
                    value={name}
                    onChange={handleNameChange}
                    required
                />
                <span className="popup__input-error username-input-error"></span>
            </label>
            <label className="popup__field">
                <input
                    id="user-desc-input"
                    name="about"
                    type="text"
                    placeholder="Введите описание"
                    className="popup__input popup__input_type_description"
                    minLength="2"
                    maxLength="200"
                    value={about}
                    onChange={handleDescriptionChange}
                    required
                />
                <span className="popup__input-error user-desc-input-error"></span>
            </label>
        </PopupWithForm>
    );
};

export default EditProfilePopup;