import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;

  return <SButtton>{children}</SButtton>;
};

const SButtton = styled(BaseButton)`
  background-color: #40514e;
`;
