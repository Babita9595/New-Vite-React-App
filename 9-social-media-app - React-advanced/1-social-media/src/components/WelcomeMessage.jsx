

const WelcomMessage = ({onGetPostsClick})=>{
    return(
<center>
<h3 className="text-center">there are no post</h3>
<button onClick={onGetPostsClick} type="button" className="btn btn-primary mt-3">fetch</button>
</center>
    )
}
export default WelcomMessage;