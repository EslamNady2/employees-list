import { useSelector } from "react-redux";

import { rootStateType } from "src/redux/stateType";
import EmployeeRow from "src/modules/employees/components/EmployeeRow";

import { EmployeesListContainer } from "./EmployeesList.style";

const EmployeesList = () => {
  const { employeesList } = useSelector(
    (state: rootStateType) => state.employees
  );

  return (
    <EmployeesListContainer>
      {employeesList.data.map((employee) => (
        <EmployeeRow key={employee.id} employee={employee} />
      ))}
    </EmployeesListContainer>
  );
};

export default EmployeesList;
