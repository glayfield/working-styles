"use client";
import Link from "next/link";

import GradientBox from "@/components/gradient-box";
import Container from "@/components/container";
import Nav from "@/components/nav";
import Progress from "@/components/progress";
import Footer from "@/components/footer";

import OPTIONS from "@/data/options";
import QUESTIONS from "@/data/questions";
import { Question, Option } from "@/types/interfaces";
import { useStickyState } from "@/utils/storage";

export default function Survey() {
  const totalQuestions: number = 25;
  const [currentQuestion, setCurrentQuestion] = useStickyState(
    0,
    "user-current"
  );
  const [answers, setAnswers] = useStickyState([], "user-answers");
  const question: Question = QUESTIONS[currentQuestion];
  const progress: number = Math.round((currentQuestion / totalQuestions) * 100);

  function updateScore(question: Question, score: number) {
    const answer = { group: question.group, score };
    setAnswers((arr: any) => [...arr, answer]);
    setCurrentQuestion(currentQuestion + 1);
  }

  if (currentQuestion === totalQuestions) {
    return (
      <div>
        <Nav />
        <Progress progress={progress} />
        <GradientBox>
          <Container>
            <div className="text-xl py-16">Survey Complete!</div>
            <Link
              href="/results"
              className="w-full text-xl rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Click to view your results
            </Link>
          </Container>
        </GradientBox>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Nav />
      <Progress progress={progress} />
      <GradientBox>
        <Container>
          <p className="text-sm">
            Question {question.id} of {totalQuestions}
          </p>
          <div className="text-xl py-4 min-h-[40vh]">{question.text}</div>
          <div className="space-y-4 justify-center">
            {OPTIONS.map((option: Option) => (
              <button
                key={option.score}
                className="w-full text-xl rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                onClick={() => updateScore(question, option.score)}
              >
                {option.text}
              </button>
            ))}
          </div>
        </Container>
      </GradientBox>
      <Footer />
    </div>
  );
}
