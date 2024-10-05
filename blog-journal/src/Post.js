import React from 'react';
import { useParams } from 'react-router-dom';

const posts = {
  1: { title: 'Working with React and HTML', content: 'This post explains React and HTML...', date: 'Oct 5, 2024' },
  2: { title: 'Lets use TailwindCSS?', content: 'TailwindCSS is used in this site...', date: 'Oct 5, 2024' },
  3: { title: 'Netlify is host this site', content: 'Netlify is a powerful platform to deploy websites...', date: 'Oct 5, 2024' }
};

const Post = () => {
  const { id } = useParams();
  const post = posts[id];

  if (!post) return <p>Post not found</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-4">{post.date}</p>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
