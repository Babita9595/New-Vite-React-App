import { useContext } from "react";
// import PostList from "./PostList";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {

    const {deletePost} = useContext(PostList)
    return (
        <div className="card post-card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <span onClick={()=>{deletePost(post.id)}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                   delete
                   
                </span>
                <p className="card-text">{post.body}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}
export default Post;