import React from 'react'
import "./resultSection.css"
import ResultElement from '../resultElement/ResultElement'

function ResultSection({tipAmount, total, reset, resetDisabled}) {
    return (
        <div className="resultSection-container">
            <div className="amount-container">
                <ResultElement label="Tip Amount" state={tipAmount} />
                <ResultElement label="Total" state={total} />
            </div>
            <button type="reset" className="reset" onClick={reset} disabled={resetDisabled}>RESET</button>
        </div>
    )
}

export default ResultSection
