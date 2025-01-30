import { useState } from "react";
import { Button } from "../App";

export const Component = ({
  header,
  messages,
  btns,
}: {
  header: string;
  messages: string[];
  btns: Button[];
}) => {
  const [choice, setChoice] = useState<JSX.Element | null>(null);

  const choseBtn = (btn: Button) => {
    if (btn.next) setChoice(btn.next);
  };

  if (!choice) {
    return (
      <>
        <h2>{header}</h2>
        {messages.map((m, i) => (
          <h3 key={i}>{m}</h3>
        ))}
        {btns.map((btn, i) => (
          <button key={i} onClick={() => choseBtn(btn)}>
            {btn.message}
          </button>
        ))}
      </>
    );
  } else {
    return choice;
  }
};
