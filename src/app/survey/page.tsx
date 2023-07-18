"use client";

import Container from "@/components/container";
import GradientBox from "@/components/gradient-box";
import LinkButton from "@/components/link-button";
import Progress from "@/components/progress";

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
      <GradientBox>
        <Container>
          <div className="text-xl py-16">Survey Complete!</div>
          <div className="text-xl py-16">
            <LinkButton route="/results" text="Calculate results" />
          </div>
        </Container>
      </GradientBox>
    );
  }

  return (
    <GradientBox>
      <Container>
        <Progress progress={progress} />
        <p className="text-md">
          Question {question.id} of {totalQuestions}
        </p>
        <div className="text-2xl py-4 min-h-[35vh]">{question.text}</div>
        <div className="space-y-4 justify-center">
          {OPTIONS.map((option: Option) => (
            <button
              key={option.score}
              className="w-full min-w-[30vw] text-xl rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={() => updateScore(question, option.score)}
            >
              {option.text}
            </button>
          ))}
        </div>
      </Container>
    </GradientBox>
  );
}
