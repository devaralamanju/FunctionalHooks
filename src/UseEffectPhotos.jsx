import { useState,useEffect } from "react";

function UseEffectComment(){
    const [comment, setComment] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/photos";
    useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then(data => setComment(data))
    },[])
    return(
      <div>
      {/* <h1>useEffect using Api integration (post method)</h1> */}
      {comment.map(post =>(
        <h3 key={post.albumId}> {post.title}<br />{post.url} <br /> {post.thumbnailUrl}</h3>
      ))}
      </div>
    )
}

export default UseEffectComment;