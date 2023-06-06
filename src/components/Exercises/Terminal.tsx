import { ChangeEvent, useState, KeyboardEvent, useEffect } from "react";

import { useStore } from "@/store/globalStore";

interface TermianlProps {
  answers: string[];
}

export default function Terminal(props: TermianlProps) {
  const [command, setCommand] = useState("");

  const [isCorrect, setIsCorrect] = useState<undefined | boolean>();

  const { totalExerciseState, currentExerciseState, setCurrentExerciseState } = useStore((state) => ({
    totalExerciseState: state.totalExerciseState,
    currentExerciseState: state.currentExerciseState,
    setCurrentExerciseState: state.setCurrentExerciseState,
  }));

  const remainingExercises = totalExerciseState - currentExerciseState - 1;

  const onTextInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommand(e.target.value);
  };

  const onInputPressedEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      if (isCorrect) {
        if (remainingExercises <= 0) {
          setCurrentExerciseState(0);
        } else {
          setCurrentExerciseState(currentExerciseState + 1);
        }
      } else {
        setIsCorrect(props.answers.includes(command));
      }
    }
  };

  const onButtonPressed = () => {
    if (isCorrect) {
      if (remainingExercises <= 0) {
        setCurrentExerciseState(0);
      } else {
        setCurrentExerciseState(currentExerciseState + 1);
      }
    } else {
      setIsCorrect(props.answers.includes(command));
    }
  };

  useEffect(() => {
    setCommand("");
    setIsCorrect(undefined);
  }, [currentExerciseState]);

  const getButtonText = () => {
    if (isCorrect) {
      return remainingExercises <= 0 ? "Start Again" : "Next Question";
    } else {
      return "Check Answer";
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-start items-start text-gray-300 bg-secondary border border-outline pt-4">
        <div className="text-sm font-medium pl-4 pr-2">$</div>
        <textarea
          autoFocus
          title="Command"
          value={command}
          spellCheck="false"
          autoComplete="none"
          autoCapitalize="none"
          onChange={onTextInputChange}
          onKeyDown={onInputPressedEnter}
          className="w-full bg-transparent outline-none text-sm font-mono h-56 break-all"
        />
      </div>
      {isCorrect === false && (
        <div className="mt-6 p-4 text-sm text-red-700 bg-red-200">
          <span className="font-medium">Incorrect!</span> Read the question carefully and rewrite the command.
        </div>
      )}
      {isCorrect && (
        <div className="mt-6 p-4 text-sm text-green-700 bg-green-200">
          <span className="font-medium">Congratulations!</span> You have entered entered the correct command.
        </div>
      )}
      <div className="flex justify-end pt-8">
        <button type="button" className="bg-orange-400 px-6 py-3 font-medium" onClick={onButtonPressed}>
          {getButtonText()}
        </button>
      </div>
    </div>
  );
}
