import { requestStatusType } from "src/modules/common/dataTypes"
import { employeeType } from "src/modules/employees/dataTypes"

export type rootStateType= {
    employees:{
        employeesList: {
            status: requestStatusType,
            data: employeeType[]
        }
    }
}