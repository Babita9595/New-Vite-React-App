import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomMessage from "./WelcomeMessage";
import LodingSpinner from "./LoadingSpinner";

const PostList = ()=>{
    const {postlist,addInitialPosts} = useContext(PostListData);
    const [fetching, setFetching] = useState(false)

    const handleGetPostsClick = ()=>{
        setFetching(true)

        fetch("https://dummyjson.com/posts")
        .then((res)=>res.json())
        .then((response)=>
        {
         addInitialPosts(response.posts)
        setFetching(false)
        }
        )
    }
    useEffect(()=>{
     
        handleGetPostsClick();
        return ()=>{
            console.log("cleaning")
            
        }
    },[])

    return(
        <>
        {
            fetching && <LodingSpinner/>
        }
        {!fetching && postlist.length === 0 && <WelcomMessage onGetPostsClick={handleGetPostsClick}/>}
        {!fetching && postlist?.map((post)=>
        <Post key={post.id} post={post}/>
        )}
        
        
        </>
    )
}
export default PostList;