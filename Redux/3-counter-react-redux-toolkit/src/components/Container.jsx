const Container = ({children})=>{
    return(
        <div className="card" style={{width:'300px'}}>
           <div className="card-body">
           {children}
            </div> 
        </div>
    )
}
export default Container;