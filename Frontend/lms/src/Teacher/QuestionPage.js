
import React, { useState } from 'react';
import QuestionForm from './QuestionForm';

const QuestionPage = () => {
  const [questions, setQuestions] = useState([]);

  const handleSaveQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
   
    saveQuestionsToJson([...questions, newQuestion]);
  };

  const saveQuestionsToJson = (questionsData) => {
    
    const jsonData = JSON.stringify(questionsData);
    
    console.log(jsonData); 
  };

  return (
    <div className="question-page">
      <h1>Question Page</h1>
      <QuestionForm onSave={handleSaveQuestion} />
      
      <div className="saved-questions">
        {questions.map((question, index) => (
          <div key={index} className="question">
            <h3>{question.question}</h3>
            <ul>
              {question.options.map((option, optionIndex) => (
                <li key={optionIndex}>{option}</li>
              ))}
            </ul>
            <p>Correct Answer: {question.correctAnswer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionPage;
