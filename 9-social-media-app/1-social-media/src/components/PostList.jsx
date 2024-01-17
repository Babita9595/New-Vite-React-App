import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = ()=>{
    const {postlist} = useContext(PostListData);
    return(
        <>
        {postlist?.map((post)=>
        <Post key={post.id} post={post}/>
        )}
        
        
        </>
    )
}
export default PostList;