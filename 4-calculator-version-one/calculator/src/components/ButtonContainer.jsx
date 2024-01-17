import style from "./ButtonContainer.module.css" 

const ButtonContainer = ()=>{
    const buttonName = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
    return(
        <div className={style.buttonContainer}>
            {
                buttonName?.map((item,index)=>
                <button key={index} className={style.button}>{item}</button>
                )
            }
      </div>
    )
}

export default ButtonContainer;