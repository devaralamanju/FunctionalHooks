import React, { useEffect } from 'react';
import axios from "axios";

function UseEffectAxios(){
    // const [axios, axiosSet] = useState([]);
    // const url = "https://jsonplaceholder.typicode.com/posts";
    useEffect(() => {
        // axios.get('url')
        // fetch(url)
        // .then(res => res.json([]))
        // .then(data => axiosSet(data))
        const newPost = { title: 'New Post', body: 'This is a new post.' };
        axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
          .then(response => {
            console.log('New post created:', response.data);
          })
          .catch(error => {
            console.error('Error creating post:', error);
          });
    },[])
   return(
    <>
    {/* {map((post) => (
        <div key={post.userid}>{post.id}<br/>{post.title}</div>
    ))} */}
    </>
   )
   
}

export default UseEffectAxios;
