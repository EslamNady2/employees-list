import { employeeType } from "src/modules/employees/dataTypes";
import EmployeeStatusSelector from "src/modules/employees/components/EmployeeStatusSelector";

import { EmployeeRowContainer, EmployeeName } from "./EmployeeRow.style";

type employeeRowPropsType = {
  employee: employeeType;
};

const EmployeeRow = ({ employee }: employeeRowPropsType) => {
  return (
    <EmployeeRowContainer>
      <EmployeeName>{employee.name}</EmployeeName>
      <EmployeeStatusSelector value={employee.status} employee={employee} />
    </EmployeeRowContainer>
  );
};

export default EmployeeRow;
