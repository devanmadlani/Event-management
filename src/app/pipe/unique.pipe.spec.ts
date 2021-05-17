import { UniquePipe } from './unique.pipe';
import { eventsMock } from '../mock/events-mocks';

describe('PhoneNumberPipe Tests', () => {
  let uniquePipe: UniquePipe = null;

  beforeEach(() => {
    uniquePipe = new UniquePipe();
  });

  describe('default behavior', () => {
    it('should transform array to unique list', () => {
      const transformedArray = uniquePipe.transform(eventsMock);
      expect(transformedArray.length).toBe(3);
    });
  });

  afterEach(() => {
    uniquePipe = null;
  });
})
