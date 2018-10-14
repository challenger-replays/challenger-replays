import { getPagesSubset, getPaginationProps } from './helpers';

describe('getPagesSubset', () => {
  test('SubsetLength: 3, Total: 5', () => {
    expect(getPagesSubset(1, 5, 3)).toEqual([1, 2, 3]);
    expect(getPagesSubset(5, 5, 3)).toEqual([3, 4, 5]);
  });

  test('SubsetLength: 5, Total: 10', () => {
    expect(getPagesSubset(2, 10, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(getPagesSubset(4, 10, 5)).toEqual([2, 3, 4, 5, 6]);
    expect(getPagesSubset(9, 10, 5)).toEqual([6, 7, 8, 9, 10]);
  });

  test('SubsetLength: 8, Total: 5', () => {
    expect(getPagesSubset(2, 5, 8)).toEqual([1, 2, 3, 4, 5]);
    expect(getPagesSubset(4, 5, 8)).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('getPaginationProps', () => {
  test('Total > Limit', () => {
    const arg = {
      limit: 10,
      offset: 0,
      total: 1337,
    };
    expect(getPaginationProps(arg)).toEqual({
      current: 1,
      pages: 134,
    });
    expect(
      getPaginationProps({
        ...arg,
        offset: 1,
      }),
    ).toEqual({
      current: 2,
      pages: 135,
    });
    expect(
      getPaginationProps({
        ...arg,
        offset: 1336,
      }),
    ).toEqual({
      current: 135,
      pages: 135,
    });
  });

  test('Total < Limit', () => {
    const arg = {
      limit: 10,
      offset: 0,
      total: 7,
    };
    expect(getPaginationProps(arg)).toEqual({
      current: 1,
      pages: 1,
    });
    expect(
      getPaginationProps({
        ...arg,
        offset: 4,
      }),
    ).toEqual({
      current: 2,
      pages: 2,
    });
  });
});
