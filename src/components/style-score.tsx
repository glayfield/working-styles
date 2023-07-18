import { ChartResult } from "@/types/interfaces";
import LinkButton from "./link-button";

export default function StyleScore({
  results,
  group,
}: {
  results: Array<ChartResult>;
  group: string;
}) {
  const lowScore: string =
    "rounded-xl text-lg font-bold p-4 mb-4 sm:text-xl text-black bg-[#c6f9ff]";
  const medScore: string =
    "rounded-xl text-lg font-bold p-4 mb-4 sm:text-xl text-black bg-[#f0e16e]";
  const hiScore: string =
    "rounded-xl text-lg font-bold p-4 mb-4 sm:text-xl text-black bg-[#f38938]";
  const attract: string =
    "rounded-xl flex flex-col text-md p-4 mb-4 sm:text-l text-white bg-[#3b38f3]";
  let calcClass: string = medScore;
  let subText: string = "";

  const thisGroup = results.find(function (result: ChartResult) {
    return result.key === group;
  });

  if (!results.length || !thisGroup) {
    return (
      <h3 className={attract}>
        <div className="pb-4">Find out how you score:</div>
        <LinkButton route="/survey" text="Start Survey" />
      </h3>
    );
  }

  const score = thisGroup.value;

  if (score < 4) {
    calcClass = lowScore;
  }
  if (score > 6) {
    subText = `You scored high in the ${thisGroup.label} driver`;
    calcClass = hiScore;
  }

  return (
    <h3 className={calcClass}>
      <div>You scored {score}/10</div>
      {subText.length > 0 ? (
        <div className="font-normal text-sm">{subText}</div>
      ) : null}
    </h3>
  );
}
