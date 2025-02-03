import React from 'react';

const Quiz = ({ questions, onAnswerChange, answers, isQuizSubmitted, currentQuestionIndex, setCurrentQuestionIndex, onSubmit }) => {

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  
  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div>
      <h2>Quiz</h2>
      
      <div key={questions[currentQuestionIndex].id} className="question">
        <h3>{questions[currentQuestionIndex].question}</h3>
        <div className="options">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <div key={index}>
              <label>
                <input
                  type="radio"
                  name={`question-${questions[currentQuestionIndex].id}`}
                  value={option}
                  checked={answers[questions[currentQuestionIndex].id] === option}  
                  onChange={() => onAnswerChange(questions[currentQuestionIndex].id, option)}  
                  disabled={isQuizSubmitted}  
                />
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>

    
      <div className="navigation-buttons">
        <button onClick={goToPreviousQuestion} disabled={currentQuestionIndex === 0}>
          Previous Question
        </button>

        
        {currentQuestionIndex === questions.length - 1 ? (
          <button onClick={onSubmit}>Submit Quiz</button>
        ) : (
          <button onClick={goToNextQuestion}>Next Question</button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
