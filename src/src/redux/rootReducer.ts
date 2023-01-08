import { combineReducers } from 'redux';
import employeesReducer from 'src/modules/employees/reducer';

export default combineReducers({
  employees: employeesReducer,
});
