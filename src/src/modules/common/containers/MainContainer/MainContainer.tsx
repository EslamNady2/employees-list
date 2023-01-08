import React from "react";
import EmployeesListView from "src/modules/employees/views/EmployeesListView";

import { AppContainer, GlobalStyle } from "./MainContainer.style";
const MainContainer = () => (
  <AppContainer>
    <GlobalStyle />
    
    {/* there should be a router here but I preferred to just render the EmployeesListView component for simplicity  */}
    <EmployeesListView />
  </AppContainer>
);

export default MainContainer;
