import { EmployeeReducer, initialState } from './employee.reducer';

describe('Employee Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = EmployeeReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
