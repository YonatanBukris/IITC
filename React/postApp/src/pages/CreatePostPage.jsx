import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const CreatePostPage = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const newPost = {
        title,
        body,
        userId: parseInt(userId, 10), 
        reactions: { likes: 0 },
        comments: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      await axios.post('http://localhost:8001/posts', newPost);
      navigate('/posts');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <h1>Create New Post</h1>
      {error && <p>Error: {error}</p>}
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="Body"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="User ID"
        variant="outlined"
        fullWidth
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
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
        {loading ? 'Creating...' : 'Create Post'}
      </Button>
    </Box>
  );
};

export default CreatePostPage;
