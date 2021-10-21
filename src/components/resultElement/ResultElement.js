import React from 'react'
import "./resultElement.css"

function ResultElement({ label, state }) {
    return (
        <div className="resultElement-container">
            <div className="resultLabel-container">
                <div className="resultLabel">{label}</div>
                <div className="person">/ person</div>
            </div>
            <div className="amount">${state}</div>
        </div>
    )
}

export default ResultElement
