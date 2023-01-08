import employeesActionTypes from "./action-types";
import { employeesArrayType, updateEmployeePayloadType, employeeType } from "./dataTypes";

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

export const addEmployee = (payload: {name: string}) => ({
  type: employeesActionTypes.Add_EMPLOYEE,
  payload,
});

export const addEmployeeSuccess = (payload: employeeType) => ({
  type: employeesActionTypes.Add_EMPLOYEE_SUCCESS,
  payload,
});

export const addEmployeeFail = () => ({
  type: employeesActionTypes.Add_EMPLOYEE_FAIL,
});
