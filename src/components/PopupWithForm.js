import React from "react";

function PopupWithForm(props) {

    return (
        <div className={`popup popup_type_${props.name} ${ props.isOpen ? "popup_opened" : ""}`}>
            <div className="popup__container">
                <h2 className="popup__title">{props.title}</h2>
                <form
                    className="form"
                    name={`${props.name}`}
                    action="#"
                >
                    {props.children}
                    <button type="submit" className="popup__submit">{props.submitText}</button>
                </form>
                <button type="button" className="popup__close" onClick={props.onClose}/>
            </div>
        </div>
    )
}

export default PopupWithForm;