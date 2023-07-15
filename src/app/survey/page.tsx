'use client';
import { useState } from 'react';
import Link from 'next/link';

import { Question, Answer, Option, Group } from '@/interfaces';

import Nav from '@/components/nav';
import Progress from '@/components/progress';
import Container from '@/components/container';
import Footer from '@/components/footer';

import GROUPS from '@/data/groups';
import OPTIONS from '@/data/options';
import QUESTIONS from '@/data/questions';

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
        <Nav />
        <Container>
          <h1>Your Results</h1>
          <div>
            {GROUPS.map((group: Group) => (
              <h2 key={group.id}>{group.name} = {totalScore(group.id)} / 10</h2>
            ))}
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/" className="rounded-md bg-white px-3.5 py-2.5 text-md font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Start again?</Link>
          </div>
        </Container>
        <Footer />
      </div>
    )
  }

  return (
    <div>
      <Nav />
      <Progress progress={progress} />
      <Container>
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
      </Container>
      <Footer />
    </div>
  )
}