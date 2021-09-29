import React from 'react'
import { useHistory } from 'react-router';

const Post = ({ post }) => {
    const { id, title, body } = post;
    const history = useHistory();

    const handleClick = () => {
        const url = `/posts/${id}`;
        history.push(url);
    }
    return (
        <div>

            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={handleClick}>Post Details</button>
        </div>
    )
}

export default Post
