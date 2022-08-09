import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Post = () => {

    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/posts')
            .then((res) => {
                setPosts(res.data);
                console.log(posts);
            })
    },[])
    return (
        <div className='post'>
           <ul>
            {/* {
                posts.map((post, index) => (<li key={index}>{post.title}</li>))
            } */}
           </ul>
        </div>
    );
};

export default Post;