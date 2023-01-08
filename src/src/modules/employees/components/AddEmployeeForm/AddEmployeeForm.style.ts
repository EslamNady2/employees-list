import styled from "styled-components";
import { colors } from "src/configs/theme";

export const Title = styled.h3`
  margin-bottom: 8px;
  color: ${colors.black};
`;

export const FormContentsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const InputWrapper = styled.div`
width: 300px;
`

export const Input = styled.input`
  width: 100%;
  height: 36px;
  padding: 8px 12px;
  font-size: 13px;
  line-height: 20px;
  color: ${colors.black};
  border: 1px solid ${colors.mainGrey};
  border-radius: 4px;
  box-sizing: border-box;

  &:focus {
    border: 1px solid ${colors.mainBlue};
    outline: none;
  }
`;

export const ValidationErrMsg = styled.p`
  margin: 2px;
  color: ${colors.mainRed};
  font-size: 12px;
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  border: none;
  width: 106px;
  height: 36px;
  color: ${colors.white};
  background-color: ${colors.mainBlue};
  border-radius: 4px;
  margin-inline-start: 8px;
`;
