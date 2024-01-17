import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";


const CreatePost = () => {
const {addPost} = useContext(PostList)

const userIdElement = useRef();
const postTitleElement = useRef();
const postBodyElement = useRef();
const reactionsElement = useRef();
const tagsElement = useRef();


const handleSubmit = (event)=>{
    event.preventDefault();
    const  userId = userIdElement.current.value
    const postTitle = postTitleElement.current.value
    const postBody = postBodyElement.current.value
    const reactions = reactionsElement.current.value
    const  tags = tagsElement.current.value.split(' ')
    addPost(userId,postTitle,postBody,reactions,tags)

    userIdElement.current.value="";
    postTitleElement.current.value="";
    postBodyElement.current.value ="";
    reactionsElement.current.value = ""; 
    tagsElement.current.value = "";
}

    return (
        <form className="create-post" onSubmit={handleSubmit}>

            <div className="mb-3">
                <label htmlFor="userId" className="form-label">userID</label>
                <input
                    type="text"
                    className="form-control"
                    id="userId"
                    ref={userIdElement}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="title" className="form-label">post title</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    ref={postTitleElement}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="body" className="form-label">post content</label>
                <textarea
                    type="text"
                    className="form-control"
                    id="body"
                    rows="4"
                    ref={postBodyElement}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="ureactions" className="form-label">reactions</label>
                <input
                    type="number"
                    className="form-control"
                    id="reactions"
                    ref={reactionsElement}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="tags" className="form-label">enter your tags</label>
                <input
                    type="text"
                    className="form-control"
                    id="tags"
                    ref={tagsElement}
                />
            </div>

            <button type="submit" className="btn btn-primary">Post</button>
        </form>
    )
}
export default CreatePost;