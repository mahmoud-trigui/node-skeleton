import { stringToSortedArray } from '.';

describe('example', () => {
  it('stringToSortedArray', () => {
    const result = stringToSortedArray(
      'A, list, of,    words  , without,meaning',
    );

    expect(result).toMatchSnapshot();
  });
});
