import { initialEmployeesState } from "src/redux/initialState";
import { status } from "src/constants/general";
import employeesActionTypes from "./action-types";

const employeesReducer = (state = initialEmployeesState, { type, payload }: {type: string, payload: any}) => {
  switch (type) {
    case employeesActionTypes.FETCH_EMPLOYEES:
      return {
        ...state,
        employees: {
          status: status.FETCHING,
        },
      };

    case employeesActionTypes.FETCH_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employees: {
          status: status.SUCCESS,
          data: payload,
        },
      };

    case employeesActionTypes.FETCH_EMPLOYEES_FAIL:
      return {
        ...state,
        employees: {
          status: status.FAIL,
        },
      };

    default:
      return state;
  }
};

export default employeesReducer;
