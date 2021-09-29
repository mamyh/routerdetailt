import React, { useEffect, useState } from 'react'
import Post from '../Post/Post'

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(data => setPosts(data));

    }, [])
    return (
        <div>
            <h1>Total posts are : {posts.length}</h1>
            {posts.map(post => <Post key={post.id} post={post}></Post>)}

        </div>
    )
}

export default Posts
