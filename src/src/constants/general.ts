import { requestStatusType } from "src/modules/common/dataTypes";

export const status :{ 
  SHOULD_CALL_API: requestStatusType,
  FETCHING: requestStatusType,
  SUBMITTING: requestStatusType,
  SUCCESS: requestStatusType,
  FAIL: requestStatusType,
} = {
  SHOULD_CALL_API: 'SHOULD_CALL_API',
  FETCHING: 'FETCHING',
  SUBMITTING: 'SUBMITTING',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
};
