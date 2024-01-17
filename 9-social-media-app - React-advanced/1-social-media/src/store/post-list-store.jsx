import { useReducer } from "react";
import { createContext } from "react";


//default value


export const PostList = createContext(
    {
        postlist:[],
        addPost:()=>{},
        addInitialPosts:()=>{},
        deletePost: ()=>{},
    }
);



//reducer function
const postListReducer =(currentPostList, action)=>{
    let newPostList = currentPostList
if(action.type === 'DELETE_POST'){
    newPostList = currentPostList.filter((post)=> post.id !== action.payload.postId);
}else if(action.type === 'ADD_INITIAL_POSTS'){
    newPostList = action.payload.posts
}else if(action.type === 'ADD_POST'){
    newPostList = [
        action.payload,
        ...currentPostList
    ]
}
return newPostList;
}



//componnt
const PostListProvider = ({children})=>{

    const DEFAULT_POST_LIST = [{
        id:'1',
        title:'go to mumbai',
        body:'hi frnds kkkkkkkkkkkkkk',
        reactions:2,
        userId:'user-9',
        tags:['vocation','mumbai','enjoying']
    },
    {
        id:'2',
        title:'we passed',
        body:'hi frnds kkkkkkkkkkkkkk',
        reactions:4,
        userId:'user-12',
        tags:['btech','mpass','graduating']
    }]
    
//reducer 
const [postlist , dispatchPostList] = useReducer(postListReducer,[]) //reducer fn and initial value

//actions
const  addInitialPosts =(posts)=>{
dispatchPostList({
    type:'ADD_INITIAL_POSTS',
    payload:{
       posts
    }
})
}


const  addPost =(userId,postTitle,postBody,reactions,tags)=>{
    dispatchPostList({
        type:'ADD_POST',
        payload:{
            id:Date.now(),
            title:postTitle,
            body:postBody,
            reactions:reactions,
            userId:userId,
            tags:tags
        }
    })
    }

const deletePost =(postId)=>{
  dispatchPostList({
    type:'DELETE_POST',
    payload:{
        postId,
    }
  })
}

return(
    <PostList.Provider  value={{postlist, addInitialPosts, addPost ,deletePost}} >
        {children}
    </PostList.Provider>
)
}



export default PostListProvider;