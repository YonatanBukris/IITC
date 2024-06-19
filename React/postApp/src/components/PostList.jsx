import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostItem from './PostItem';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8001/posts');
        setPosts(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); 

  const handleDeletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching posts: {error.message}</p>;

  return (
    <div className="post-list">
      {posts.map(post => (
        <PostItem key={post.id} post={post} handleDeletePost={handleDeletePost} />
      ))}
    </div>
  );
};

export default PostList;
