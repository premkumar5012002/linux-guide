"use client";

import { ReactNode, useEffect } from "react";

import { useStore } from "@/store/globalStore";

interface ExercisesProps {
  children: ReactNode[];
}

export default function Exercises(props: ExercisesProps) {
  const { totalExerciseState, currentExerciseState, setTotalExerciseState, setCurrentExerciseState } = useStore(
    (state) => ({
      totalExerciseState: state.totalExerciseState,
      currentExerciseState: state.currentExerciseState,
      setTotalExerciseState: state.setTotalExerciseState,
      setCurrentExerciseState: state.setCurrentExerciseState,
    })
  );

  useEffect(() => {
    setCurrentExerciseState(0);
    setTotalExerciseState(props.children.length);
  }, [props.children.length, setTotalExerciseState, setCurrentExerciseState]);

  return (
    <div className="max-w-2xl h-full md:h-min w-full bg-primary">
      {/* Body */}
      <div className="pt-6 pb-12">
        <div className="text-gray-400 font-medium">
          {currentExerciseState + 1} / {totalExerciseState} Questions
        </div>
        {props.children[currentExerciseState]}
      </div>
    </div>
  );
}
