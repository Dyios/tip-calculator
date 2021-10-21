import React from 'react'
import "./inputSection.css"
import FormElement from "../formElement/FormElement";
import InputElement from "../inputElement/InputElement";
import TipElements from '../tipElements/TipElements';

function InputSection({ bill, setBill, tip, setTip, customTip, setCustomTip, nbrPeople, setNbrPeople }) {
    const errorIf = nbrPeople !== "" && (isNaN(parseInt(nbrPeople)) || parseInt(nbrPeople) <= 0);

    return (
        <div className="inputSection-container">
            <FormElement label="Bill" >
                <InputElement icon={"dollar"} data={bill} setData={setBill} />
            </FormElement>
            <FormElement label="Select Tip %" >
                <TipElements tips={[5, 10, 15, 25, 50]} tip={tip} setTip={setTip} customTip={customTip} setCustomTip={setCustomTip} />
            </FormElement>
            <FormElement label="Number of People" wrongDataMessage={<div>Can't be zero</div>} showError={errorIf} >
                <InputElement icon={"person"} data={nbrPeople} setData={setNbrPeople} error={errorIf} />
            </FormElement>
        </div>
    )
}

export default InputSection
