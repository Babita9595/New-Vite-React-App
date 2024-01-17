
import { useState } from 'react'
import style from './App.module.css'
import ButtonContainer from './components/ButtonContainer'
import Display from './components/Display'

function App() {
  
const [calVal, setCalVal] = useState('')

const  handleButtonClick = (buttonValue)=>{
if(buttonValue === "C"){
  setCalVal('')
}else if(buttonValue === "="){
  const result = eval(calVal)
  setCalVal(result)
}else{
  const newDisplayValue = calVal + buttonValue;
  setCalVal(newDisplayValue);
}
}

  return (
   <div className={style.calculator} >
      < Display displayValue={calVal}/>
      <ButtonContainer onButtonClick={(buttonValue)=> handleButtonClick(buttonValue)}/>
   </div>
  )
}

export default App;
