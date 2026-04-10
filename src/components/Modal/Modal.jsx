import React, { Component } from "react";
import style from "../Modal/Modal.module.css"
export class Modal extends Component{

    componentDidMount() { 
        window.addEventListener("keydown", this.handleEscModalClose)
    }
    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleEscModalClose)
    }
    
    handleEscModalClose = (evt) => {
    if (evt.code === "Escape") {
        this.props.onClose()
    }
}

    handleBackdropClick = (evt) => {
    if (evt.target === evt.currentTarget) {
        this.props.onClose()
    }
}

    render() {
        const { onClose } = this.props;
        return (
            <><div className={style.backdrop} onClick={this.handleBackdropClick}>
                <div className={style.modal}>
                    <h2 className={style.title}>Modal window</h2>
                    <button className={style.modalClose} onClick={onClose} type="button">X</button>
                </div>
            </div></>
        )   
    }
}