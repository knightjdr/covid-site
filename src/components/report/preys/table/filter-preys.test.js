import filterPreys from './filter-preys';

describe('Filter preys', () => {
  it('should filter by FDR', () => {
    const preys = {
      prey1: {
        id: 'id1',
        conditions: {
          a: { count: 10, fdr: 0.01 },
          b: { count: 5, fdr: 0.05 },
        },
      },
      prey2: {
        id: 'id2',
        conditions: {
          a: { count: 7, fdr: 0.02 },
          b: { count: 30.3, fdr: 0.05 },
        },
      },
      prey3: {
        id: 'id3',
        conditions: {
          a: { count: 4, fdr: 0.02 },
          b: { count: 6, fdr: 0.01 },
        },
      },
    };

    const expected = {
      prey1: {
        id: 'id1',
        conditions: {
          a: { count: 10, fdr: 0.01 },
          b: { count: 5, fdr: 0.05 },
        },
      },
      prey3: {
        id: 'id3',
        conditions: {
          a: { count: 4, fdr: 0.02 },
          b: { count: 6, fdr: 0.01 },
        },
      },
    };
    expect(filterPreys(preys, 0.01, 0)).toEqual(expected);
  });

  it('should filter by spectral count', () => {
    const preys = {
      prey1: {
        id: 'id1',
        conditions: {
          a: { count: 10, fdr: 0.01 },
          b: { count: 5, fdr: 0.05 },
        },
      },
      prey2: {
        id: 'id2',
        conditions: {
          a: { count: 7, fdr: 0.02 },
          b: { count: 30.3, fdr: 0.05 },
        },
      },
      prey3: {
        id: 'id3',
        conditions: {
          a: { count: 4, fdr: 0.02 },
          b: { count: 6, fdr: 0.01 },
        },
      },
    };

    const expected = {
      prey1: {
        id: 'id1',
        conditions: {
          a: { count: 10, fdr: 0.01 },
          b: { count: 5, fdr: 0.05 },
        },
      },
      prey2: {
        id: 'id2',
        conditions: {
          a: { count: 7, fdr: 0.02 },
          b: { count: 30.3, fdr: 0.05 },
        },
      },
    };
    expect(filterPreys(preys, 1, 7)).toEqual(expected);
  });

  it('should filter by FDR and spectral count', () => {
    const preys = {
      prey1: {
        id: 'id1',
        conditions: {
          a: { count: 10, fdr: 0.02 },
          b: { count: 5, fdr: 0.05 },
        },
      },
      prey2: {
        id: 'id2',
        conditions: {
          a: { count: 7, fdr: 0.05 },
          b: { count: 30.3, fdr: 0.01 },
        },
      },
      prey3: {
        id: 'id3',
        conditions: {
          a: { count: 4, fdr: 0.02 },
          b: { count: 6, fdr: 0.01 },
        },
      },
    };

    const expected = {
      prey2: {
        id: 'id2',
        conditions: {
          a: { count: 7, fdr: 0.05 },
          b: { count: 30.3, fdr: 0.01 },
        },
      },
    };
    expect(filterPreys(preys, 0.01, 10)).toEqual(expected);
  });
});
