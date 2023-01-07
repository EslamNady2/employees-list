import { fork } from 'redux-saga/effects';

// import commonSaga from 'modules/common/sagas';
import  employeeSaga from 'src/modules/employees/sagas'


function* rootSaga() {
  yield fork(employeeSaga);
}

export default rootSaga;
