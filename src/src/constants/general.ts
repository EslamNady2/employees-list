import { statusObjectType } from "src/modules/common/dataTypes";

export const status: statusObjectType = {
  SHOULD_CALL_API: "SHOULD_CALL_API",
  FETCHING: "FETCHING",
  SUBMITTING: "SUBMITTING",
  SUCCESS: "SUCCESS",
  FAIL: "FAIL",
};
