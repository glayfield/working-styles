"use client";
import Image from "next/image";
import { useStickyState } from "@/utils/storage";

import GradientBox from "@/components/gradient-box";
import StartButton from "@/components/start-button";

export default function Home() {
  const [currentQuestion] = useStickyState(0, "user-current");
  const [results] = useStickyState([], "user-results");

  return (
    <GradientBox>
      <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl sm: pt-6">
          5 Minutes.
          <br />
          25 Questions.
          <br />
          Identify your work style.
        </h2>
        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <StartButton
            currentQuestion={currentQuestion}
            resultCount={results?.length}
          />
        </div>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Not everyone works the same way, which is why there are different work
          styles.
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Most people don&lsquo;t think about their work style, but when
          individuals try to collaborate as a group, team or business, then
          divergent work styles can block progress.
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          The first step is finding out what{" "}
          <b>
            <i>your</i>
          </b>{" "}
          work style is.
        </p>
      </div>
      <div className="relative mt-16 h-80 lg:mt-8">
        <Image
          className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
          src="alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg"
          alt="Workers in Kyiv, Ukraine by Alex Kotliarskyi (2017)"
          width="1920"
          height="1080"
        />
      </div>
    </GradientBox>
  );
}
