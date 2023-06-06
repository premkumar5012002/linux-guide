"use client";
import { PropsWithChildren } from "react";

import Terminal from "@/components/Exercises/Terminal";

interface TerminalQuestionProps extends PropsWithChildren {
  answers: string[];
}

export function TerminalQuestion(props: TerminalQuestionProps) {
  return (
    <div className="space-y-3">
      <h6>{props.children}</h6>
      <Terminal answers={props.answers} />
    </div>
  );
}
