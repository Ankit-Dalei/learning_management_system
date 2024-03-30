// QuestionPage.js
import React, { useState } from 'react';
import QuestionForm from './QuestionForm';

const QuestionPage = () => {
  const [questions, setQuestions] = useState([]);

  const handleSaveQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
    // Save questions data to JSON file (you can adjust this logic as per your backend setup)
    saveQuestionsToJson([...questions, newQuestion]);
  };

  const saveQuestionsToJson = (questionsData) => {
    // Convert questionsData to JSON format and save it to a file
    const jsonData = JSON.stringify(questionsData);
    // Here, you can implement logic to save jsonData to a file using backend APIs
    console.log(jsonData); // For demonstration purposes
  };

  return (
    <div className="question-page">
      <h1>Question Page</h1>
      <QuestionForm onSave={handleSaveQuestion} />
      {/* Display saved questions here */}
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
