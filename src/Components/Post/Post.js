import React, { useEffect, useState } from 'react';
import PostDetail from '../PostDetail/PostDetail';

const Post = () => {
const [post,setPost]= useState([])
useEffect (() => {

         fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=> res.json())
        .then (data=> setPost(data.slice(0,10)))

},[])
    return (
        <div>
            {
                post.map(post => <PostDetail post={post}></PostDetail>)
            }
        </div>
    );
};

export default Post;