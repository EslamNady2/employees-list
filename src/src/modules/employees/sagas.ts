import { takeLatest, call, put } from "redux-saga/effects";
import employeesActionTypes from "./action-types";

// import { fetchEmployeesSuccess, fetchEmployeesFail } from "./actions";

function* fetchEmployeesSaga() {
  try {
    // const response = yield call(getEmployees);
    // yield put(fetchEmployeesSuccess(response.data));
  } catch (error) {
    console.log(error);
    // yield put(fetchEmployeesFail(error));
  }
}

function* employeesSaga() {
  yield takeLatest(employeesActionTypes.FETCH_EMPLOYEES, fetchEmployeesSaga);
}

export default employeesSaga;
