
import { status } from "src/constants/general";
import { requestStatusType } from "src/modules/common/dataTypes";
import { employeesArrayType } from "src/modules/employees/dataTypes";

type initialEmployeesStateType={
  employeesList:{
    status: requestStatusType,
    data: employeesArrayType
  }
}

export const initialCommonState = {
  context: "",
};

export const initialEmployeesState: initialEmployeesStateType = {
  employeesList: {
    status: status.SHOULD_CALL_API,
    data: [],
  },
};
