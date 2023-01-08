export type requestStatusType =
  | "SHOULD_CALL_API"
  | "FETCHING"
  | "SUBMITTING"
  | "SUCCESS"
  | "FAIL";

export type statusObjectType = {
  SHOULD_CALL_API: requestStatusType;
  FETCHING: requestStatusType;
  SUBMITTING: requestStatusType;
  SUCCESS: requestStatusType;
  FAIL: requestStatusType;
};
