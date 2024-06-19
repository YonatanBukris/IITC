import React from 'react';
import { Link } from 'react-router-dom';
import PostList from '../components/PostList';
import Button from '@mui/material/Button';

const PostsFeedPage = () => {
  return (
    <div className="posts-feed-page">
      <h1>Posts Feed</h1>
      <Button variant="contained" color="primary" component={Link} to="/posts/create">
        Create New Post
      </Button>
      <PostList />
    </div>
  );
};

export default PostsFeedPage;
