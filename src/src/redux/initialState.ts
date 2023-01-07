import { status } from "src/constants/general";

export const initialCommonState = {
  context: "",
};

export const initialEmployeesState = {
  employees: {
    status: status.SHOULD_CALL_API,
    data: [],
  },
};
