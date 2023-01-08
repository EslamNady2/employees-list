import { useDispatch } from "react-redux";

import {
  employeeStatusType,
  employeeType,
} from "src/modules/employees/dataTypes";
import { employeeStatuses } from "src/constants/employees";
import { updateEmployeeStatus } from "src/modules/employees/actions";
import { status } from "src/constants/general";

import {
  StatusItemsContainer,
  StatusItemButtonWrapper,
  StatusItemButton,
} from "./EmployeeStatusSelector.style";

type EmployeeStatusSelectorPropsType = {
  value: employeeStatusType;
  employee: employeeType;
};

const EmployeeStatusSelector = ({
  value,
  employee,
}: EmployeeStatusSelectorPropsType) => {
  const dispatch = useDispatch();
  const isSelectorDisabled = employee.submittingStatus === status.SUBMITTING;

  const handleStatusButtonClick = (status: employeeStatusType) => {
    if (!isSelectorDisabled) {
      dispatch(updateEmployeeStatus({ status, id: employee.id }));
    }
  };

  return (
    <StatusItemsContainer disabled={isSelectorDisabled}>
      {employeeStatuses.map((employeeStatus) => (
        <StatusItemButtonWrapper key={employeeStatus}>
          <StatusItemButton
            active={value === employeeStatus}
            key={employeeStatus}
            onClick={() => {
              handleStatusButtonClick(employeeStatus);
            }}
          >
            {employeeStatus}
          </StatusItemButton>
        </StatusItemButtonWrapper>
      ))}
    </StatusItemsContainer>
  );
};

export default EmployeeStatusSelector;
