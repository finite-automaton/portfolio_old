import React, { useEffect, useState } from "react";
import { StyledContainer } from "./styles";
import { Question } from "../../components/Quiz/Question";
import GENERAL_QUESTIONS from "../../resources/general.json";
import { AnswerButton } from "../../components/Quiz/AnswerButton";

type question = {
  A: string;
  B: string;
  C: string;
  D: string;
  Correct: string;
  FIELD1: number;
  Questions: string;
};

type option = {
  text: string;
  color: string;
};

enum GAME_STATE {
  START,
  GUESSING,
  GUESSED,
}

const getRandomQuestion = (): question => {
  return GENERAL_QUESTIONS[
    Math.floor(Math.random() * GENERAL_QUESTIONS.length)
  ];
};

const getOptions = (question: question) => {
  return [
    { text: question["A"], color: "black" },
    { text: question["B"], color: "black" },
    { text: question["C"], color: "black" },
    { text: question["D"], color: "black " },
  ];
};

const startingStateQuestion = {
  A: "",
  B: "",
  C: "",
  D: "",
  Correct: "",
  FIELD1: 0,
  Questions: "",
};

const startingOptions: option[] = [
  { text: "", color: "black" },
  { text: "", color: "black" },
  { text: "", color: "black" },
  { text: "", color: "black" },
];

export const QuizContainer = () => {
  const [gameState, setGameState] = useState(GAME_STATE.START);
  const [currentQuestion, setCurrentQuestion] = useState(startingStateQuestion);
  const [options, setOptions] = useState(startingOptions);

  const startGame = (option: string) => {
    const currQ = getRandomQuestion();
    setCurrentQuestion(currQ);
    setOptions(getOptions(currQ));
    setGameState(GAME_STATE.GUESSING);
  };

  const checkAnswer = (selected: string) => {
    if (gameState === GAME_STATE.GUESSING){
      setOptions(
        options.map((option: option) => {
          if (option.text === currentQuestion.Correct) {
            return {text: option.text, color: "green"}
          } else if (option.text === selected){
            return {text: option.text, color: "red"}
          }else {
            return {text: option.text, color: "black"}
          }
        })
      );
      setGameState(GAME_STATE.GUESSED);
    }
  };

  return (
    <StyledContainer>
      {gameState !== GAME_STATE.START && (
        <>
          <Question>{currentQuestion.Questions}</Question>
          {options
            .filter((x) => x.text !== "")
            .map((option: option) => (
              <AnswerButton
                key={option.text}
                onClick={checkAnswer}
                value={option.text}
                color={option.color}
              >
                {option.text}
              </AnswerButton>
            ))}
        </>
      )}
      {gameState === GAME_STATE.START && (
        <AnswerButton value="start" onClick={startGame} color="black">
          Start
        </AnswerButton>
      )}
    </StyledContainer>
  );
};
