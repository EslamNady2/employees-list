import styled from "styled-components";
import { colors } from "src/configs/themeData";

export const StatusItemsContainer = styled.div`
  display: flex;
  align-items: center;

  ${({ disabled }: { disabled: boolean }) =>
    disabled &&
    `
    opacity: 0.5;
    user-events: none;
  `}

  @media (max-width: 991px) {
    max-width: 100%;
    overflow-x: auto;
  }
`;

export const StatusItemButtonWrapper = styled.div`
  background-color: white;
  padding-inline-end: 25px;
`;

export const StatusItemButton = styled.button`
  cursor: pointer;
  position: relative;
  border: none;
  height: 50px;
  width: 120px;
  background-color: ${({ active }: { active: boolean }) =>
    active ? colors.mainBlue : colors.white};
  &::after {
    content: "";
    position: absolute;
    pointer-events: none;
    border: 25px solid transparent;
    left: 100%;
    top: 0;
    border-left-color: ${({ active }: { active: boolean }) =>
      active ? colors.mainBlue : "transparent"};
    z-index: 1;
  }
`;
