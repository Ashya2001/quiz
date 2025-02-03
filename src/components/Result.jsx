// src/components/Result.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Result = ({ score, total }) => {
  return (
    <div>
      <h2>Quiz Results</h2>
      <p>Your score: {score}/{total}</p>
      <Link to="/quiz">Take the quiz again</Link> 
      <br />
      <Link to="/">Go to Home Page</Link> 
    </div>
  );
};

export default Result;
