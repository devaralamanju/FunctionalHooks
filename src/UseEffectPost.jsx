import React, {useState,useEffect} from 'react';

function UseEffectPost(){
    const [posts,setPosts] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/posts";
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return(
        <div>
            <h2>posts</h2>
           {posts.map(post => (
                <p key={post.id}>{post.title}</p>
           ))}
        
        </div>
    )
}

export default UseEffectPost;