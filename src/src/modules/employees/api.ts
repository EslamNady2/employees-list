import { get, patch } from "src/api/request";
import urls from "src/configs/urls";

import { employeeStatusType } from "./dataTypes";

export const getEmployees = () => get(urls.employeesUrls.getEmployees);
export const updateEmployeeStatus = (
  id: number,
  params: { status: employeeStatusType }
) => patch(`${urls.employeesUrls.getEmployees}/${id}`, params);
