import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home for Pagination</h1>
      <h4>
        <Link to="/posts">Go to Post</Link>
      </h4>
    </div>
  );
};

export default Home;
