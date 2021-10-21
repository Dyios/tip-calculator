import React from 'react'
import "./tipElement.css"

function TipElement({value, className, onClick}) {
    return (
        <div className={`tipElement-container ${className}`} onClick={onClick}>
            {value}%
        </div>
    )
}

export default TipElement
