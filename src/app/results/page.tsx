"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { BarChart } from "@/components/bar-chart";
import Container from "@/components/container";
import GradientBox from "@/components/gradient-box";

import GROUPS from "@/data/groups";
import { Answer, ChartResult, Group } from "@/types/interfaces";
import { useStickyState } from "@/utils/storage";

export default function Results() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useStickyState(
    0,
    "user-current"
  );
  const [answers, setAnswers] = useStickyState([], "user-answers");
  const [results, setResults] = useStickyState([], "user-results");

  function newChartResult(group: Group): ChartResult {
    const label = group.name.replaceAll(" Driver", "");
    const value = totalScore(group.id);

    return { label, value };
  }

  function totalScore(groupId: number) {
    const matches: Array<Answer> = answers.filter(function (group: Answer) {
      return group.group === groupId;
    });
    const sum = matches.reduce(
      (accumulator, currentValue) => accumulator + currentValue.score,
      0
    );
    return sum;
  }

  function startAgain(e: any) {
    e.preventDefault();
    setCurrentQuestion(0);
    setAnswers([]);
    setResults([]);
  }

  if (answers.length && !results.length) {
    GROUPS.map((group: Group) =>
      setResults((arr: any) => [...arr, newChartResult(group)])
    );
  } else if (!results.length && typeof window !== "undefined") {
    router.push("/survey");
  }

  return (
    <GradientBox>
      <Container>
        <h1>Your Results</h1>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <BarChart data={results} />
        </div>
        <div className="space-y-4 justify-center">
          <p></p>
          <div className="text-md">For more detail:</div>
          <button className="w-full min-w-[30vw] text-xl rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            <Link href="/styles">View the working styles</Link>
          </button>
          <div className="text-md">To take the survey again:</div>
          <button
            onClick={startAgain}
            className="w-full min-w-[30vw] text-xl rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Start the survey again
          </button>
        </div>
      </Container>
    </GradientBox>
  );
}
