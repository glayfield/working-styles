'use client';
import { useState } from 'react';

import Footer from "../footer"
import Nav from "../nav"
import QUESTIONS from "./questions";

const answers = [
  {
    text: 'Yes',
    score: 2
  },
  {
    text: 'To Some Extent',
    score: 1
  },
  {
    text: 'No',
    score: 0
  }
]

export default function Survey () {
  const totalQuestions:number = 25;
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [results, setResults] = useState<Array<Number>>([]);
  
  function updateScore(score:Number) {
    setResults( arr => [...arr, score]);
    console.log(results);
    setCurrentQuestion(currentQuestion + 1);
  }

  return (
    <div>
      <Nav></Nav>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${currentQuestion / totalQuestions * 100}%` }}></div>
      </div>
      <div className="mx-auto max-w-7xl py-4 sm:px-6 sm:py-32 lg:px-8 ">
        <div className="bg-gray-900 px-6 pt-6 pb-16 shadow-2xl sm:rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-24 flex-col space-y-8 text-center">
          <p className="text-sm">Question {currentQuestion} of {totalQuestions}</p>
          <h1 className="text-2xl py-4">{QUESTIONS[currentQuestion-1].Question}</h1>
          <div className="space-y-4 justify-center">
            {answers.map((answer) => (
              <button key={answer.score} className="w-full text-xl rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      onClick={() => updateScore(answer.score)}>
                {answer.text}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}