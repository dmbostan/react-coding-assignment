import getInitialRangeOfPages from './getInitialRangeOfPages.ts';
import { expect } from 'vitest';

describe('Get Initial Range of Pages', function () {
  it('should show initially set value', () => {
    const mockedInitialRange = 2;
    const mockedTotalPages = 100;

    const items = getInitialRangeOfPages(mockedTotalPages, mockedInitialRange);

    expect(items).toBe(2);
  });

  it('should not to show initially set value', () => {
    const mockedInitialRange = 10;
    const mockedTotalPages = 3;

    const items = getInitialRangeOfPages(mockedTotalPages, mockedInitialRange);

    expect(items).toBe(3);
  });

  it('should show initially set value if total pages is equal with default value', () => {
    const mockedInitialRange = 3;
    const mockedTotalPages = 3;

    const items = getInitialRangeOfPages(mockedTotalPages, mockedInitialRange);

    expect(items).toBe(3);
  });
});
