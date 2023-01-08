import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "src/modules/common/components/Loader";
import EmployeesList from "src/modules/employees/components/EmployeesList";
import { fetchEmployees } from "src/modules/employees/actions";
import { rootStateType } from "src/redux/stateType";
import { status } from "src/constants/general";

import {
  PageContainer,
  LoaderContainer,
  SectionsDivider,
} from "./EmployeeListContainer.style";
import AddEmployeeForm from "../../components/AddEmployeeForm";

const EmployeeListContainer = () => {
  const dispatch = useDispatch();
  const { employeesList } = useSelector(
    (state: rootStateType) => state.employees
  );
  const shouldShowLoader = employeesList.status === status.FETCHING;

  // get employees list
  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const renderLoader = () => (
    <LoaderContainer>
      <Loader size={20} />
    </LoaderContainer>
  );

  const renderContainerContent = () => (
    <>
      <AddEmployeeForm />
      <SectionsDivider />
      <EmployeesList />
    </>
  );

  return (
    <PageContainer>
      {shouldShowLoader ? renderLoader() : renderContainerContent()}
    </PageContainer>
  );
};
export default EmployeeListContainer;
