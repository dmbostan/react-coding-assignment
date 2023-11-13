import shortenStringToWords from '@shared/helpers/shortenStringToWords.ts';

describe('shortenStringToWords function', () => {
  it('should not shorten the string if maxWords is greater than or equal to the number of words', () => {
    const inputString = 'This is a test string.';
    const maxWords = 5;

    const result = shortenStringToWords(inputString, maxWords);

    expect(result).toEqual(inputString);
  });

  it('should shorten the string to the specified number of words', () => {
    const inputString = 'This is a longer test string with more words.';
    const maxWords = 5;

    const result = shortenStringToWords(inputString, maxWords);

    expect(typeof result).toBe('string');
    expect(result.split(/\s+/).length).toBe(maxWords);
    expect(result.endsWith('...')).toBe(true);
  });

  it('should handle an empty string', () => {
    const inputString = '';
    const maxWords = 3;

    const result = shortenStringToWords(inputString, maxWords);

    expect(result).toEqual('');
  });

  it('should handle maxWords greater than the number of words in the string', () => {
    const inputString = 'This is a short string.';
    const maxWords = 10;

    const result = shortenStringToWords(inputString, maxWords);

    expect(result).toEqual(inputString);
  });
});
