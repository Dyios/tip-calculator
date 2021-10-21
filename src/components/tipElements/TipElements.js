import React from 'react'
import "./tipElements.css"
import TipElement from './tipElement/TipElement'
import CustomTip from './customTip/CustomTip'

function TipElements({ tips, tip, setTip, customTip, setCustomTip }) {

    return (
        <div className="tipElements-container">
            {tips.map(tipsElement =>
                <TipElement key={tipsElement} value={tipsElement}
                    className={tipsElement === tip && customTip === "" ? "selected" : "" }
                    onClick={()=>{setTip(tip=> tip === tipsElement ? 0 : tipsElement); setCustomTip("")}}
                />)
            }
            <CustomTip customTip={customTip} setCustomTip={setCustomTip} setTip={setTip} />
        </div>
    )
}

export default TipElements
