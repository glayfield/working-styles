'use client';
import { useState } from 'react';
import Link from 'next/link';

import { Question, Answer, Option, Group, ChartResult, BarChartProps } from '@/types/interfaces';

import Nav from '@/components/nav';
import Progress from '@/components/progress';
import Container from '@/components/container';
import Footer from '@/components/footer';

import GROUPS from '@/data/groups';
import OPTIONS from '@/data/options';
import QUESTIONS from '@/data/questions';
import { BarChart } from '@/components/bar-chart';

export default function Survey() {
  const totalQuestions: number = 25;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Array<Answer>>([]);
  const question: Question = QUESTIONS[currentQuestion];
  const progress: number = Math.round(currentQuestion / totalQuestions * 100);
  let results: Array<ChartResult> = [];

  function updateScore(question: Question, score: number) {
    const answer = { group: question.group, score };
    setAnswers(arr => [...arr, answer]);
    setCurrentQuestion(currentQuestion + 1);
  }

  function totalScore(groupId: number) {
    const matches: Array<Answer> = answers.filter(({ group }) => group === groupId);
    const sum = matches.reduce(
      (accumulator, currentValue) => accumulator + currentValue.score,
      0,
    );
    return sum;
  }

  function newChartResult(group: Group): ChartResult {
    const label = group.name.replaceAll(' Driver', '');
    const value = totalScore(group.id);

    return {label, value};
  }

  if (answers.length >= 25) {

    GROUPS.map((group: Group) => (
      results.push(newChartResult(group))
    ));

    return (
      <div>
        <Nav />
        <Container>
          <h1>Your Results</h1>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <BarChart data={results} />
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