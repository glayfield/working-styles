'use client';
import { useState } from 'react';

import { Question, Answer, Option, Group } from '@/interfaces';
import Footer from "../footer"
import Nav from "../nav"
import QUESTIONS from "./questions";
import OPTIONS from "./options";
import GROUPS from './groups';
import Link from 'next/link';

export default function Survey() {
  const totalQuestions: number = 25;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Array<Answer>>([]);
  const question: Question = QUESTIONS[currentQuestion];
  const progress: number = Math.round(currentQuestion / totalQuestions * 100);

  function updateScore(question: Question, score: number) {
    const answer = { group: question.group, score };
    setAnswers(arr => [...arr, answer]);
    console.log(question.id);
    setCurrentQuestion(currentQuestion + 1);
  }

  function totalScore(groupId: number) {
    const matches:Array<Answer> = answers.filter(({ group }) => group === groupId);
    console.log(matches);
    const sum = matches.reduce(
      (accumulator, currentValue) => accumulator + currentValue.score,
      0,
    );
    return sum;
  }

  if (answers.length >= 25) {
    return (
      <div>
        <Nav></Nav>
        <div className="mx-auto max-w-6xl py-4 sm:px-6 sm:py-32 lg:px-8 ">
          <h1>Your Results</h1>
          
          {GROUPS.map((group: Group) => (
            <h2 key={group.id}>{group.name} = {totalScore(group.id)} / 10</h2>
          ))}

          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link href="/" className="rounded-md bg-white px-3.5 py-2.5 text-md font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Start again?</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Nav></Nav>
      <div className="w-full bg-gray-200 rounded-full h-15 dark:bg-gray-700">
        <div className="bg-blue-600 h-15 rounded-fullbg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${progress}%` }}>{progress}%</div>
      </div>
      <div className="mx-auto max-w-6xl py-4 sm:px-6 sm:py-32 lg:px-8 ">
        <div className="bg-gray-900 px-6 pt-6 pb-16 shadow-2xl sm:rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-24 flex-col space-y-8 text-center">
          <p className="text-sm">Question {question.id} of {totalQuestions}</p>
          <div className="text-xl py-4 min-h-[40vh]">{question.text}</div>
          <div className="space-y-4 justify-center">
            {OPTIONS.map((option: Option) => (
              <button key={option.score} className="w-full text-xl rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                onClick={() => updateScore(question, option.score)}>
                {option.text}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}