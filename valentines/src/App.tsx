import "./App.css";
import { Component } from "./Components/Alert";

export type Button = {
  message: string;
  next?: JSX.Element;
};

function App() {
  const buildBtn = (message: string, next?: JSX.Element) => {
    return {
      message,
      next,
    };
  };
  const build = (header: string, messages: string[], btns: Button[]) => {
    return <Component messages={messages} header={header} btns={btns} />;
  };

  const Reallyyy = build(
    "Reallyyyy???",
    ["I LOVE YOUUUUU", "SOOOOO MUCH!! <3 <3 <3"],
    []
  );

  const noChoice = build(
    "Actually, you don't have the choice...",
    ["Do you want to be my valentine?"],
    [buildBtn("YES I DOOOO!!!", Reallyyy)]
  );

  const doYouWantToBeMyValentine = build(
    "Then I have something to tell you!",
    ["Do you want to be my valentine?"],
    [buildBtn("YES I DOOOO!!!", Reallyyy), buildBtn("Nooo..", noChoice)]
  );

  const _buildAreYouSure: (i: number, n: number) => JSX.Element = (i, n) => {
    if (i === 0) {
      return build(
        "WHAT!?",
        ["BAAAA Are you " + "really " + "sure?"],
        [
          buildBtn("Baaa of course I do!", doYouWantToBeMyValentine),
          buildBtn("Baaa of course I do!", doYouWantToBeMyValentine),
          buildBtn("Baaa of course I do!", doYouWantToBeMyValentine),
          buildBtn("Baaa of course I do!", doYouWantToBeMyValentine),
        ]
      );
    } else {
      return build(
        "WHAT!?",
        ["Are you " + "really ".repeat(n) + "sure?"],
        [
          buildBtn("Of course I do!", doYouWantToBeMyValentine),
          buildBtn("No I Don't.", _buildAreYouSure(i - 1, n + 1)),
        ]
      );
    }
  };
  const buildAreYouSure = (n: number) => {
    return _buildAreYouSure(n, 0);
  };

  const okayIKnow = build(
    "I hope you will do the right choice",
    ["So, Do you love me?"],
    [
      buildBtn("Yes I do.", doYouWantToBeMyValentine),
      buildBtn("No I don't", buildAreYouSure(10)),
    ]
  );

  const pleaseKnow = build(
    "Please know...",
    ["It's important...", "Think about it"],
    [buildBtn("Okay I know, I am ready", okayIKnow), buildBtn("Let me think")]
  );

  const first = build(
    "Bonjour mon bebe!",
    ["I hope you are good, just a reminder that I love you!", "Do you?"],
    [
      buildBtn("YES I DOOOO!", doYouWantToBeMyValentine),
      buildBtn("No I don't", buildAreYouSure(10)),
      buildBtn("I don't know", pleaseKnow),
    ]
  );

  return <>{first}</>;
}

export default App;
