import LinkButton from "./link-button";

export default function StartButton({
  currentQuestion,
  resultCount,
}: {
  currentQuestion: number;
  resultCount: number;
}) {
    let route: string = "/survey";
    let buttonText: string = "Get Started!";

    if (currentQuestion > 0) {
      buttonText = "Continue";
    }
    if (resultCount) {
      route = "/results";
      buttonText = "See Your Results!";
    }

    return (<LinkButton route={route} text={buttonText} />);
}
