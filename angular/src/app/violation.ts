export class Violation {
  timestamp: number;
  ingestionTime: number;
  recordId: number;
  unitId: string;
  violation: string;
  violationId: number;
  violationStartTime: number;
  violationEndTime: number;
  parentViolationId: number;
  violationSubject: string;
  occurrences: number;
}
