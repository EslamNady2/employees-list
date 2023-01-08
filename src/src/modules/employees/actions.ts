import employeesActionTypes from "./action-types";
import { employeesArrayType, updateEmployeePayloadType } from "./dataTypes";

export const fetchEmployees = () => ({
  type: employeesActionTypes.FETCH_EMPLOYEES,
});

export const fetchEmployeesSuccess = (payload: employeesArrayType) => ({
  type: employeesActionTypes.FETCH_EMPLOYEES_SUCCESS,
  payload,
});

export const fetchEmployeesFail = () => ({
  type: employeesActionTypes.FETCH_EMPLOYEES_FAIL,
});

export const updateEmployeeStatus = (payload: updateEmployeePayloadType) => ({
  type: employeesActionTypes.UPDATE_EMPLOYEE_STATUS,
  payload,
});

export const updateEmployeeStatusSuccess = (
  payload: updateEmployeePayloadType
) => ({
  type: employeesActionTypes.UPDATE_EMPLOYEE_STATUS_SUCCESS,
  payload,
});

export const updateEmployeeStatusFail = (
  payload: updateEmployeePayloadType
) => ({
  type: employeesActionTypes.UPDATE_EMPLOYEE_STATUS_FAIL,
  payload,
});
