import React from "react";
import { StyledContainer } from "./styles";
import { Question } from "../../components/Quiz/Question";
import GENERAL_QUESTIONS from "../../resources/general.json";
import { AnswerButton } from "../../components/Quiz/AnswerButton";

console.log(GENERAL_QUESTIONS[0]);
const currQuestion = GENERAL_QUESTIONS[0];
const choices = [
  currQuestion["A"],
  currQuestion["B"],
  currQuestion["C"],
  currQuestion["D"],
];
console.log(choices);

const optionButtons = choices.map((option) => {
  return <AnswerButton key={option}>{option}</AnswerButton>;
});

export const QuizContainer = () => {
  return (
    <StyledContainer>
      <Question>{currQuestion["Questions"]}</Question>
      {optionButtons}
    </StyledContainer>
  );
};
