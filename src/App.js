import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import './App.css';
import InputSection from './components/inputSection/InputSection';
import ResultSection from './components/resultSection/ResultSection';

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState("")
  const [nbrPeople, setNbrPeople] = useState("");
  const [tipAmount, setTipAmount] = useState("0.00");
  const [total, setTotal] = useState("0.00");
  const [resetDisabled, setResetDisabled] = useState(true);

  useEffect(() => {
     setResetDisabled(bill === "" && nbrPeople === "");

    // CALCUALTION PART --------------------------
    // if nomber of people not valide
    if(nbrPeople <= 0)
      return
    // calculate the tip / person
    let newTip = 0;
    if (customTip !== "") {
      newTip = Math.round((parseFloat(bill) * parseFloat(customTip) / 100 / parseInt(nbrPeople)) * 100) / 100
      newTip = isNaN(newTip) ? "0.00" : newTip.toFixed(2);
    } else {
      newTip = Math.round((parseFloat(bill) * parseFloat(tip) / 100 / parseInt(nbrPeople)) * 100) / 100;
      newTip = isNaN(newTip) ? "0.00" : newTip.toFixed(2);
    }
    setTipAmount(newTip)

    // calculate the total / person
    setTotal(() => {
      const total = Math.round((parseFloat(bill) / parseInt(nbrPeople) + parseFloat(newTip)) * 100) / 100;
      return isNaN(total) ? "0.00" : total.toFixed(2);
    })


  }, [bill, tip, customTip, nbrPeople])

  function reset() {
    setBill("");
    setTip(0);
    setCustomTip("");
    setNbrPeople("");
    setTipAmount("0.00");
    setTotal("0.00");
  }

  return (
    <div className="App">
      <div className="splitter-container">
        SPLI <br /> TTER
      </div>
      <form action="#" >
        <InputSection bill={bill} setBill={setBill}
          tip={tip} setTip={setTip}
          customTip={customTip} setCustomTip={setCustomTip}
          nbrPeople={nbrPeople} setNbrPeople={setNbrPeople}
        />
        <ResultSection tipAmount={tipAmount} total={total} resetDisabled={resetDisabled} reset={reset} />
      </form>
    </div>
  );
}

export default App;
