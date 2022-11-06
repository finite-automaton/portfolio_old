import { StyledButton } from "./styles";

type props = {
  children: React.ReactNode;
  value: string;
  onClick: (arg0: string) => void;
  color: string;
};

export const AnswerButton = ({ children, onClick, value, color }: props) => {
  return (
    <StyledButton
      onClick={() => {
        onClick(value);
      }}
      color={color}
    >
      {children}
    </StyledButton>
  );
};
