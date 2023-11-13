import splitArrayIntoChunks from "@features/search-results/helpers/splitArrayIntoChunks.ts";

describe('splitArrayIntoChunks function', () => {
    it('should split an array into chunks of the specified size', () => {
        const arrayToSplit:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const chunkSize = 3;

        const result = splitArrayIntoChunks(arrayToSplit, chunkSize);

        expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    });

    it('should handle an empty array', () => {
        const arrayToSplit:[] = [];
        const chunkSize = 3;

        const result = splitArrayIntoChunks(arrayToSplit, chunkSize);

        expect(result).toEqual([]);
    });

    it('should handle chunkSize greater than array length', () => {
        const arrayToSplit = [1, 2, 3, 4, 5];
        const chunkSize = 10;

        const result = splitArrayIntoChunks(arrayToSplit, chunkSize);

        expect(result).toEqual([[1, 2, 3, 4, 5]]);
    });
});
