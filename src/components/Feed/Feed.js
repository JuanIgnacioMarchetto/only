
import React, { useState, useEffect } from 'react';
import FeedService from '../../services/FeedService';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await FeedService.getPosts();
        setPosts(postsData);
      } catch (error) {
        console.error('Error al obtener publicaciones:', error);
      }
    };

    fetchPosts();
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <div>
      <h2>Feed</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          {/* Agrega más detalles según tu modelo de datos */}
        </div>
      ))}
    </div>
  );
};

export default Feed;
