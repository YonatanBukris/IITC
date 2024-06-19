import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const EditPostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({
    title: '',
    body: '',
    userId: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:8001/posts/${postId}`);
        setPost(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchPost();
  }, [postId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(`http://localhost:8001/posts/${postId}`, post);
      navigate('/posts');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <h1>Edit Post</h1>
      {error && <p>Error: {error}</p>}
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        name="title"
        value={post.title}
        onChange={handleChange}
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="Body"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        name="body"
        value={post.body}
        onChange={handleChange}
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="User ID"
        variant="outlined"
        fullWidth
        name="userId"
        value={post.userId}
        onChange={handleChange}
        required
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={loading}
        sx={{ mt: 2 }}
      >
        {loading ? 'Updating...' : 'Update Post'}
      </Button>
    </Box>
  );
};

export default EditPostPage;
