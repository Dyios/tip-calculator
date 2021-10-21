import React from 'react'
import "./formElement.css"

function FormElement(props) {
    
    return (
        <div className="formElment-container">
            <div className="label-container">
                <div className="label">{props.label}</div>
                {props.showError && props.wrongDataMessage}
            </div>
            {props.children}
        </div>
    )
}

export default FormElement
