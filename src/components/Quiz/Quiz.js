import React, { useState } from "react";
import './quiz.css'

const questions = [
  {
    question: "What is the name of the Shelby family's gang in the show?",
    options: ["The Peaky Blinders", "The Black Hand", "The Red Right Hand", "The Billy Boys"],
    answer: "The Peaky Blinders"
  },
  {
    question: "Who plays the lead role of Thomas Shelby in Peaky Blinders?",
    options: ["Cillian Murphy", "Tom Hardy", "Sam Neill", "Adrien Brody"],
    answer: "Cillian Murphy"
  },
  {
    question: "What is the name of Thomas Shelby's younger brother?",
    options: ["Arthur Shelby", "John Shelby", "Michael Gray", "Finn Shelby"],
    answer: "Arthur Shelby"
  },
    {
    question: "What is the occupation of Aunt Polly in Peaky Blinders?",
    options: ["Barmaid","Bookmaker", "Pub owner", "Gang leader's wife"],
    answer: "Pub owner"
  },
    {
    question: "Who is the police inspector pursuing the Shelby family throughout the show?",
    options: ["Inspector Campbell", "Inspector Moss", "Inspector Hughes", "Inspector O'Connor"],
    answer: "Inspector Campbell"
  },
    {
    question: "Which World War did Peaky Blinders take place in?",
    options: ["World War I", "World War II", "Cold War", "World War III"],
    answer: "World War I"
  },
   {
    question: "What is the name of the Shelby family's pub?",
    options: ["The Garrison", "The Black Cat", "The Blind Tiger", "The Shelby Arms"],
    answer: "The Garrison"
  },
   {
    question: "Who is Thomas Shelby's love interest in the show?",
    options: ["May Carleton", "Lizzie Stark", "Grace Burgess", "Esme Shelby"],
    answer: "Grace Burgess"
  },
   {
    question: "What is the name of the horse owned by Thomas Shelby?",
    options: ["Black Bess", "White Lightning", "Red Rum", "Silver Bullet"],
    answer: "Black Bess"
  },
   {
    question: "What is the name of the Shelby family's bookmaker business?",
    options: ["Shelby Bookies", "Garrison Bookies", "Shelby Betting", "Shelby Company Limited"],
    answer: "Shelby Company Limited"
  },
  {
    question: "Who is Thomas Shelby's trusted advisor and secretary?",
    options: ["Arthur Shelby", "Ada Shelby", "Polly Gray", "Johnny Dogs"],
    answer: "Polly Gray"
  },
  {
    question: "What is the Shelby family's motto?",
    options: ["By the sword we seek peace" , "Family is everything", "No one messes with the Shelbys", "We don't get mad, we get even"],
    answer: "By the sword we seek peace"
  },
  {
    question: "Who is May Carleton?",
    options: ["A police informant", "Thomas Shelby's love interest", "Leader of the Lee family", "A Shelby family member"],
    answer: "Thomas Shelby's love interest"
  },
  {
    question: "What is the Shelby family's main objective in Peaky Blinders?",
    options: ["Gaining political power", "Expanding their criminal empire", "Seeking revenge on their enemies", "Rebuilding their legitimate business"],
    answer: "Expanding their criminal empire"
  },
  {
    question: "What is the significance of the razor blades in Peaky Blinders?",
    options: ["The razor blades are hidden in the caps and used as weapons", "The razor blades are used to smuggle illegal goods", "The razor blades are a symbol of the Peaky Blinders' loyalty", "The razor blades are a form of currency in the gang's illegal dealings"],
    answer: "The razor blades are hidden in the caps and used as weapons"
  },
  {
    question: "Who is Luca Changretta?",
    options: ["Inspector Campbell's assistant", "Thomas Shelby's arch-rival", "Polly Gray's son", "Leader of the Sabini family"],
    answer: "Thomas Shelby's arch-rival"
  },
  {
    question: "What is the Shelby family's relationship with the Lee family?",
    options: ["Allies", "Rivals", "Business partners", "Enemies"],
    answer: "Rivals"
  },
  {
    question: "Who is Ada Shelby?",
    options: ["Thomas Shelby's sister","Inspector Campbell's assistant", "Leader of the Sabini family", "A police informant"],
    answer: " Thomas Shelby's sister"
  },
  {
    question: "What is the Shelby family's legitimate front business?",
    options: ["Legal gambling", "Horse-racing", "Legitimate trading", "Distillery"],
    answer: "Horse-racing"
  },
   {
    question: "What is the 'Black Hand'?",
    options: ["A secret society targeting the Shelbys", "A rival gang led by Luca Changretta", "A police task force", "Thomas Shelby's nickname"],
    answer: "A secret society targeting the Shelbys"
  },
  // Add more questions here...
];

const Quiz = () => {
const [currentQuestion, setCurrentQuestion] = useState(0);
const [selectedOption, setSelectedOption] = useState("");
const [score, setScore] = useState(0);
const [incorrectAnswers, setIncorrectAnswers] = useState([]);

const handleOptionSelect = (option) => {
setSelectedOption(option);
};

const handleNextQuestion = () => {
if (selectedOption === questions[currentQuestion].answer) {
setScore(score + 1);
} else {
setIncorrectAnswers([...incorrectAnswers, currentQuestion]);
}
setSelectedOption("");
setCurrentQuestion(currentQuestion + 1);
};

const handleRestartQuiz = () => {
  setCurrentQuestion(0); // Reset current question to the first question
  setSelectedOption(""); // Reset selected option
  setScore(0); // Reset score to 0
};



return (
<div className="quiz-container">
{currentQuestion < questions.length ? (
<div>
<h1 className="quiz-question">Peaky Blinder Quiz</h1>
<h2>Question {currentQuestion + 1}</h2>
<p>{questions[currentQuestion].question}</p>
<div className="quiz-options">
{questions[currentQuestion].options.map((option, index) => (
<div key={index} id="radiobtn">
<input
type="radio"
id={option}
name="option"
value={option}
checked={selectedOption === option}
onChange={() => handleOptionSelect(option)}
/>
<label htmlFor={option}>{option}</label>
</div>
))}
</div>
<button className="quiz-next-button" disabled={!selectedOption}onClick={handleNextQuestion}>Next</button>
</div>
) : (
<div className="quiz-result">
<h2>Quiz Completed!</h2>
<p>Final Score: {score} out of {questions.length}</p>
{/* <p>Incorrect Answers: {incorrectAnswers.length}</p>
<h2>Questions Answered Correctly:</h2>
      <ul>
        {questions.map((question, index) => {
          if (question.answer === question.selectedAnswer) {
            return <li key={index}>{question.question}</li>;
          }
          return null;
        })}
      </ul>
      <h2>Questions Answered Incorrectly:</h2>
      <ul>
        {questions.map((question, index) => {
          if (question.answer !== question.selectedAnswer) {
            return <li key={index}>{question.question}</li>;
          }
          return null;
        })}
      </ul> */}
      <button className="quiz-retry-button" onClick={handleRestartQuiz}>Take Quiz Again</button>
     
</div>
)}
</div>
);
};

export default Quiz;