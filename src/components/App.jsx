import React, { useState } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import quizData from '../database/Data'; 
import Quiz from './Quiz';
import Result from './Result';

const App = () => {
  const [questions] = useState(quizData); 
  const [answers, setAnswers] = useState({});
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false); 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); 
  
  const navigate = useNavigate(); 

  
  const handleAnswerChange = (questionId, selectedAnswer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedAnswer,
    }));
  };

  
  const calculateScore = () => {
    let score = 0;
    questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  
  const handleSubmitQuiz = () => {
    setIsQuizSubmitted(true);
    navigate('/result'); 
  };

  return (
    <div>
      <Routes>
        
        <Route
          path="/"
          element={
            <div>
              <h2>Welcome to the Quiz!</h2>
              <Link to="/quiz">Start Quiz</Link>
            </div>
          }
        />

        {/* Quiz Page */}
        <Route
          path="/quiz"
          element={
            <div>
              <Quiz
                questions={questions}
                onAnswerChange={handleAnswerChange}
                answers={answers}
                isQuizSubmitted={isQuizSubmitted}
                currentQuestionIndex={currentQuestionIndex}
                setCurrentQuestionIndex={setCurrentQuestionIndex}
                onSubmit={handleSubmitQuiz}
              />
            </div>
          }
        />

        {/* Result Page */}
        <Route
          path="/result"
          element={<Result score={calculateScore()} total={questions.length} />}
        />
      </Routes>
    </div>
  );
};

export default App;
