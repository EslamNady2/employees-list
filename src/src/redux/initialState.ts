import { status } from "src/constants/general";
import { employeeListStoreType } from "src/modules/employees/dataTypes";

type initialEmployeesStateType = {
  employeesList: employeeListStoreType;
};

export const initialCommonState = {
  context: "",
};

export const initialEmployeesState: initialEmployeesStateType = {
  employeesList: {
    status: status.SHOULD_CALL_API,
    data: [],
  },
};
