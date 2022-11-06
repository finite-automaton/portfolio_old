import { StyledHeading } from "./styles";

type props = {
  children: React.ReactNode;
};

export const Question = ({ children }: props) => {
  return <StyledHeading>{children}</StyledHeading>;
};
