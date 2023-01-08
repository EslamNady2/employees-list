import styled from "styled-components";
import { colors } from "src/configs/themeData";

export const EmployeeRowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 8px;
  &:not(:last-child) {
    border-bottom: 2px solid ${colors.mainGrey};
  }

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const EmployeeName = styled.span`
  @media (max-width: 991px) {
    margin-bottom: 8px;
  }
`