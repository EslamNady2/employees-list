import styled from "styled-components";
import { colors } from "src/configs/theme";

export const EmployeeRowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  &:not(:last-child) {
    border-bottom: 2px solid ${colors.mainGrey};
  }

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const EmployeeName = styled.span`
  font-weight: 600;
  font-size: 15px;
  @media (max-width: 991px) {
    margin-bottom: 8px;
  }
`;
