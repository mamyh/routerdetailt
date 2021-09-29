import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'

const PostDetails = () => {
    const { postId } = useParams();

    const [post, setPost] = useState({});
    const history = useHistory()
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, []);
    const handleClick = () => {
        history.push('/');
    }
    const { title, body } = post;
    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
            <button onClick={handleClick}>go back</button>
        </div>
    )
}

export default PostDetails;
