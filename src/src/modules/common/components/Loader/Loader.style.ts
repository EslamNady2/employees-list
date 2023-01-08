import styled, { keyframes } from "styled-components";
import { colors } from "src/configs/theme";

type loaderContainerPropsType = {
  size: number;
  color?: string;
};

const rotationAnimation = keyframes`
  from {
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
`;

export const LoaderComponent = styled.div`
  display: inline-block;
  border-radius: 50%;
  border: 5px solid transparent;
  ${({ size, color }: loaderContainerPropsType) => `
    width: ${size}px;
    height: ${size}px;
    border-top-color: ${color || colors.black};
    border-left-color: ${color || colors.black};
  `}

  animation: 1s ${rotationAnimation} linear infinte;
  -webkit-animation: 1s ${rotationAnimation} linear infinite;
`;
