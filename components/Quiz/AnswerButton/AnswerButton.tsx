import { StyledButton } from "./styles";

type props = {
  children: React.ReactNode;
};

export const AnswerButton = ({ children }: props) => {
  return <StyledButton>{children}</StyledButton>;
};
