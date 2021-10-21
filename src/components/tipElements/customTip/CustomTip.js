import React from 'react'
import "./customTip.css"

function CustomTip({customTip, setCustomTip, setTip}) {
    return (
        <div className="customTip-container">
            <input type="text" placeholder="Custom" value={customTip} onInput={(e)=>{setCustomTip(e.target.value);setTip(0)}} />
        </div>
    )
}

export default CustomTip
