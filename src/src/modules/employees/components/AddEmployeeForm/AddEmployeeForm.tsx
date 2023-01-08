import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "src/modules/common/components/Loader";
import { addEmployee } from "src/modules/employees/actions";
import { rootStateType } from "src/redux/stateType";
import { colors } from "src/configs/theme";
import { status } from "src/constants/general";

import {
  FormContentsWrapper,
  Title,
  InputWrapper,
  Input,
  ValidationErrMsg,
  SubmitButton,
} from "./AddEmployeeForm.style";

const AddEmployeeForm = () => {
  const dispatch = useDispatch();
  const { employeesList } = useSelector(
    (state: rootStateType) => state.employees
  );

  const isSubmitting = employeesList.addingStatus === status.SUBMITTING;
  const hasError = employeesList.addingStatus === status.FAIL;

  const [employeeName, setEmployeeName] = useState<string>("");

  //clear input after submission successed
  useEffect(() => {
    if (employeesList.addingStatus === status.SUCCESS) {
      setEmployeeName("");
    }
  }, [employeesList.addingStatus]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmployeeName(value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (employeeName) {
      dispatch(addEmployee({ name: employeeName }));
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Title>Add an Employee</Title>
      <FormContentsWrapper>
        <InputWrapper>
          <Input
            required
            value={employeeName}
            onChange={handleInputChange}
            placeholder="Enter Employee Name"
          />
          {hasError && (
            <ValidationErrMsg>An error has occered</ValidationErrMsg>
          )}
        </InputWrapper>
        <SubmitButton disabled={isSubmitting}>
          {isSubmitting ? (
            <Loader size={5} color={colors.white} />
          ) : (
            "Add Employee"
          )}
        </SubmitButton>
      </FormContentsWrapper>
    </form>
  );
};

export default AddEmployeeForm;
