import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children, onClick } = props;

  return <SButtton onClick={onClick}>{children}</SButtton>;
};

const SButtton = styled(BaseButton)`
  background-color: #11999e;
`;
