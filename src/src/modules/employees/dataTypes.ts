import { requestStatusType } from "../common/dataTypes";

export type employeeStatusType =
  | "ADDED"
  | "IN-CHECK"
  | "APPROVED"
  | "ACTIVE"
  | "INACTIVE";

export type employeeType = {
  id: number;
  name: string;
  status: employeeStatusType;
  submittingStatus?: requestStatusType;
};

export type employeesArrayType = employeeType[];

export type employeeListStoreType = {
  status: requestStatusType;
  addingStatus?: requestStatusType;
  data: employeeType[];
};

export type updateEmployeePayloadType = {
  id: number;
  status: employeeStatusType;
};
