import { employeeListStoreType } from "src/modules/employees/dataTypes"

export type rootStateType= {
    employees:{
        employeesList: employeeListStoreType
    }
}