import classNamesHandler from '@shared/utils/classNamesHandler.ts';

describe('classNamesHandler', function () {
  it('should display both class names', () => {
    const mockedClasses = classNamesHandler('class1', 'class2');

    expect(mockedClasses).toBe('class1 class2');
  });

  it('should display empty string if nothing provided', () => {
    const mockedClasses = classNamesHandler(undefined, undefined);

    expect(mockedClasses).toBe('');
  });
});
