import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import PostItem from '../components/PostItem';

function PostDetailesPage() {
    const { postId  } = useParams();
    const [post, setPost] = useState(null); 

    const navigate = useNavigate();

    function back() {
      navigate(-1);
    }

    useEffect(() => {
      const fetchTodo = async () => {
        try {
          const response = await axios.get(`http://localhost:8001/posts/${postId}`);
          setPost(response.data);
        } catch (error) {
          console.error('Error fetching post:', error);
        }
      };
      fetchTodo();
    }, [postId]);
  
    if (!post) {
      return <div>No post found for ID {postId}</div>;
    }

  return (

    <div className="post-details-page">
    <button onClick={back}>Back</button>
    <PostItem post={post} />
    </div>

  )
}

export default PostDetailesPage