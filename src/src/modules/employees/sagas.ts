import { takeLatest, call, put, takeEvery } from "redux-saga/effects";

import { getEmployees, updateEmployeeStatus, addEmployee } from "./api";
import employeesActionTypes from "./action-types";
import {
  fetchEmployeesSuccess,
  fetchEmployeesFail,
  updateEmployeeStatusSuccess,
  updateEmployeeStatusFail,
  addEmployeeSuccess,
  addEmployeeFail,
} from "./actions";
import { updateEmployeePayloadType } from "./dataTypes";

type updateEmployeeStatusSagaAttributesType = {
  payload: updateEmployeePayloadType;
  type: string;
};
type addEmployeeSagaAttributesType = {
  payload: { name: string };
  type: string;
};

function* fetchEmployeesSaga(): Generator<any, void, any> {
  try {
    const response = yield call(getEmployees);
    yield put(fetchEmployeesSuccess(response.data));
  } catch (error) {
    console.error(error);
    yield put(fetchEmployeesFail());
  }
}

function* updateEmployeeStatusSaga({
  payload,
}: updateEmployeeStatusSagaAttributesType): Generator<any, void, any> {
  try {
    const params = { status: payload.status };
    const response = yield call(updateEmployeeStatus, payload.id, params);
    yield put(updateEmployeeStatusSuccess(response.data));
  } catch (error) {
    console.error(error);
    yield put(updateEmployeeStatusFail(payload));
  }
}

function* addEmployeeSaga({
  payload,
}: addEmployeeSagaAttributesType): Generator<any, void, any> {
  try {
    const params = { name: payload.name };
    const response = yield call(addEmployee, params);
    yield put(addEmployeeSuccess(response.data));
  } catch (error) {
    console.error(error);
    yield put(addEmployeeFail());
  }
}

function* employeesSaga() {
  yield takeLatest(employeesActionTypes.FETCH_EMPLOYEES, fetchEmployeesSaga);
  yield takeEvery(
    employeesActionTypes.UPDATE_EMPLOYEE_STATUS,
    updateEmployeeStatusSaga
  );
  yield takeLatest(employeesActionTypes.Add_EMPLOYEE, addEmployeeSaga);
}

export default employeesSaga;
