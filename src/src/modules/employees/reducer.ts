import { initialEmployeesState } from "src/redux/initialState";
import { status } from "src/constants/general";
import employeesActionTypes from "./action-types";

const employeesReducer = (
  state = initialEmployeesState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case employeesActionTypes.FETCH_EMPLOYEES:
      return {
        ...state,
        employeesList: {
          ...state.employeesList,
          status: status.FETCHING,
        },
      };

    case employeesActionTypes.FETCH_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employeesList: {
          status: status.SUCCESS,
          data: payload,
        },
      };

    case employeesActionTypes.FETCH_EMPLOYEES_FAIL:
      return {
        ...state,
        employeesList: {
          ...state.employeesList,
          status: status.FAIL,
        },
      };

    case employeesActionTypes.UPDATE_EMPLOYEE_STATUS: {
      // add submitting data status to employee object inside employees array
      const employeesArray = state.employeesList.data.map((employee) => {
        if (employee.id === payload.id) {
          return { ...employee, submittingStatus: status.SUBMITTING };
        }
        return employee;
      });

      return {
        ...state,
        employeesList: {
          ...state.employeesList,
          data: employeesArray,
        },
      };
    }

    case employeesActionTypes.UPDATE_EMPLOYEE_STATUS_SUCCESS: {
       // add submitting data status to employee object inside employees array
      const employeesArray = state.employeesList.data.map((employee) => {
        // match employee id with the employee id in the response update response
        // then add the new employee status to current employee data
        if (employee.id === payload.id) {
          return { ...employee, ...payload, submittingStatus: status.SUCCESS };
        }
        return employee;
      });
      return {
        ...state,
        employeesList: {
          ...state.employeesList,
          data: employeesArray,
        },
      };
    }

    case employeesActionTypes.UPDATE_EMPLOYEE_STATUS_FAIL: {
       // add submitting data status to employee object inside employees array
      const employeesArray = state.employeesList.data.map((employee) => {
        if (employee.id === payload.id) {
          return { ...employee, submittingStatus: status.FAIL };
        }
        return employee;
      });
      
      return {
        ...state,
        employeesList: {
          ...state.employeesList,
          data: employeesArray,
        },
      };
    }

    default:
      return state;
  }
};

export default employeesReducer;
