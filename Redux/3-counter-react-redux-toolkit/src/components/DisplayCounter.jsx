import { useSelector } from "react-redux";

const  DisplayCounter = ()=>{

const counter = useSelector(store=>store.counter)

return(
    <>
    <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
   <h5>{counter}</h5>
    </>
)
}

export default DisplayCounter;