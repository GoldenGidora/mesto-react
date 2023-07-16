import EditButton from '../images/edit_button.svg';
import AddButton from '../images/add.svg';

function Main(props) {


    return (
        <main className="main">
            <section className="profile">
                <div className="profile__card">
                    <img src="../images/gidora.gif" alt="аватар профиля" className="profile__avatar"/>
                    <button
                        className="profile__avatar-edit"
                        onClick={props.onEditAvatar}
                    />
                    <div className="profile__info">
                        <div className="profile__user">
                            <h1 className="profile__title">Gidora</h1>
                            <button
                                type="button"
                                className="profile__button profile__button_type_edit"
                                onClick={props.onEditProfile}
                            >
                                <img src={EditButton} className="image image_type_edit"
                                     alt="Редактировать профиль"/>
                            </button>
                        </div>
                        <p className="profile__text">Лайф энжоер</p>
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
                <template id="template_card">
                    <div className="cards__item">
                        <button type="button" className="cards__delete"></button>
                        <img className="cards__img" src="#"  alt='post card'/>
                        <div className="cards__info">
                            <h2 className="cards__title">Card title</h2>
                            <div className="cards__likes">
                                <button type="button" className="cards__like"></button>
                                <span className="cards__like-number"></span>
                            </div>
                        </div>
                    </div>
                </template>
            </section>
        </main>
    )
}

export default Main