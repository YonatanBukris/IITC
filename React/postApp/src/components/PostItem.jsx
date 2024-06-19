import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function PostItem({ post, handleDeletePost  }) {
    const navigate = useNavigate(); 
    const handleInfoTodo = (postId) => {
    
      navigate(`/posts/${postId}`);
    };

    const handleEditTodo = (postId) => {
      navigate(`/posts/edit/${postId}`);
    };

    const handleRemoveTodo = async (postId) => {
      try {
        await axios.delete(`http://localhost:8001/posts/${postId}`);
        handleDeletePost(postId); 
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    };




    return (
      <div className="post-item">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>Author: {post.userId}</p>
        <p>Likes: {post.reactions.likes}</p>
        <p>Created At: {new Date(post.createdAt).toLocaleString()}</p>
        <p>Updated At: {new Date(post.updatedAt).toLocaleString()}</p>
        <div>
          <h3>Comments</h3>
          {post.comments.map((comment, index) => (
            <div key={index}>
              <p>{comment.content}</p>
              <p>Comment by: {comment.userId}</p>
              <p>Date: {new Date(comment.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
        <Button variant="contained" color="info"  onClick={() => handleInfoTodo(post.id)}>info</Button>
        <Button variant="contained" color="primary" onClick={() => handleEditTodo(post.id)}>Edit</Button>
        <Button variant="contained" color="error"  onClick={() => handleRemoveTodo(post.id)}>delete</Button>
      </div>
    );
};

export default PostItem;
