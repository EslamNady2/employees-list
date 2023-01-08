import styled, { keyframes } from "styled-components";

type loaderContainerPropsType = {
  size: number;
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
  ${({ size }: loaderContainerPropsType) => `
    width: ${size}px;
    height: ${size}px;
  `}
  border-radius: 50%;
  border: 5px solid transparent;
  border-top-color: black;
  border-left-color: black;
  animation: 1s ${rotationAnimation} linear infinte;
  -webkit-animation: 1s ${rotationAnimation} linear infinite;
`;
