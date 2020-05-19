import React, { useState, useEffect } from "react";
// import axios from 'axios';

import PostCard from "../PostCard/PostCard";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import "../Blog/Blog.css";
import FullPost from "../FullPost/FullPost";
import postdata from "../../postdata";

const Blog = () => {
  let match = useRouteMatch();
  const post = postdata;
//   const [post, setPost] = useState([]);
//   let match = useRouteMatch();



//   useEffect(() => {
//     axios.get('http://localhost:3001/posts').then(
//     (response) => {
      
//       setPost(response.data);
//     });
//   }, []);    

const removeHandler = () => {
    console.log(post.id)
};
// const removeHandler = (id) => {
//   console.log(id);

//   axios.delete('http://localhost:3001/posts/' + id)
//   .then(() => { 
//     return axios.get('http://localhost:3001/posts');
    
// })
// .then ((response) => {
//   setPost(response.data);
// });
// };

  const PostList = post.map((post, index) => {
    return (
      <PostCard
        key={post.id}
        title={post.title}
        desc={post.desc}
        img={post.img}
        link={`${match.url}/${post.id}`}
        remove={() => removeHandler(post.id)}
      />
    );
  },[]);

  return (
    <>
      <Switch>
        <Route path="/blog/:postId">
          <FullPost />
        </Route>
        <Route path={match.path}>
          <div className="blogContainer">
            <h1>My stories</h1>
            <div className="postsContainer">
            {PostList}
            </div>
          </div>
        </Route>
      </Switch>
    </>
  );
};

export default Blog;
