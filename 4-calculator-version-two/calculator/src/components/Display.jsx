import style from "./Display.module.css"

const Display = ({displayValue})=>{
    return(
    <div>
         <input
          className={style.display} 
          type="text" value={displayValue} 
          
          />
    </div>
    )
}
export default Display;