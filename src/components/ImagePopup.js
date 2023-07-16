function ImagePopup() {
    return (
        <div className="popup popup_type_image">
            <div className="popup__image-container">
                <img src="#" className="popup__image" alt=""/>
                <p className="popup__figcaption"></p>
                <button type="button" id="CloseImage" className="popup__close"></button>
            </div>
        </div>
    )
}

export default ImagePopup;