import './pages/index.css';
import logo from './images/logo.svg';
function App() {
    return (
        <div className="page">
        <header className="header">
            <img src={logo} alt="логотип" className="header__logo"/>
        </header>
        <main className="main">
            <section className="profile">
                <div className="profile__card">
                    <img src="./images/gidora.gif" alt="аватар профиля" className="profile__avatar"/>
                    <button className="profile__avatar-edit"></button>
                    <div className="profile__info">
                        <div className="profile__user">
                            <h1 className="profile__title">Gidora</h1>
                            <button type="button" className="profile__button profile__button_type_edit">
                                <img src="./images/edit_button.svg" className="image image_type_edit"
                                     alt="Редактировать профиль"/>
                            </button>
                        </div>
                        <p className="profile__text">Лайф энжоер</p>
                    </div>
                </div>
                <button type="button" className="profile__button profile__button_type_add">
                    <img src="./images/add.svg" className="image image_type_add" alt="Добавить пост"/>
                </button>
            </section>
            <section className="cards">
                <template id="template_card">
                    <div className="cards__item">
                        <button type="button" className="cards__delete"></button>
                        <img className="cards__img" src="link"/>
                        <div className="cards__info">
                            <h2 className="cards__title"></h2>
                            <div className="cards__likes">
                                <button type="button" className="cards__like"></button>
                                <span className="cards__like-number"></span>
                            </div>
                        </div>
                    </div>
                </template>
            </section>
        </main>
        <footer className="footer">
            <p className="footer__title">© 2023 GoldenGidora</p>
        </footer>
        <div className="popup popup_type_edit">
            <div className="popup__container">
                <h2 className="popup__title">Редактировать профиль</h2>
                <form id="popup_edit_submit" className="form" name="profile edit" action="/" method="get" noValidate>
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
                </form>
                <button type="button" id="CloseEdit" className="popup__close"></button>
            </div>
        </div>
        <div className="popup popup_type_add">
            <div className="popup__container">
                <h2 className="popup__title">Новое место</h2>
                <form id="popup_add_submit" className="form" name="post add" action="/" method="get" noValidate>
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
                </form>
                <button type="button" id="CloseAdd" className="popup__close"></button>
            </div>
        </div>
        <div className="popup popup_type_image">
            <div className="popup__image-container">
                <img src="#" className="popup__image" alt=""/>
                    <p className="popup__figcaption"></p>
                    <button type="button" id="CloseImage" className="popup__close"></button>
            </div>
        </div>
        <div className="popup popup_type_confirm">
            <div className="popup__container">
                <button type='button' className="popup__close"></button>
                <h2 className="popup__title">Вы уверены?</h2>
                <button type="button" id="DeleteCard" className="popup__submit">Да</button>
            </div>
        </div>
        <div className="popup popup_type_avatar">
            <div className="popup__container">
                <h2 className="popup__title">Обновить аватар</h2>
                <form id="popup_avatar-edit_submit" className="form" name="profile avatar-edit" action="/" method="get"
                      noValidate>
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
                </form>
                <button type="button" id="CloseAvatarEdit" className="popup__close"></button>
            </div>
        </div>
        </div>
    );
}

export default App;
