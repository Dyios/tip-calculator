import React from 'react'
import "./inputElement.css"

function InputElement({ icon, data, setData, error }) {
    const errorOutline = error ? "error" : ""
    return (
        <div className="InputElement-container">
            <img className="icon" src={`images/icon-${icon}.svg`} alt={icon} />
            <input type="texte" className={`input ${errorOutline}`} placeholder="0" value={data} onInput={e => setData(e.target.value)} />
        </div>
    )
}

export default InputElement
