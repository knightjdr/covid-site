import filterPreys from './filter-preys';

describe('Filter preys', () => {
  it('should filter by FDR', () => {
    const preys = {
      prey1: {
        id: 'id1',
        conditions: {
          a: { count: 10, fdr: 0.01, specificity: 0.5 },
          b: { count: 5, fdr: 0.05, specificity: 2 },
        },
      },
      prey2: {
        id: 'id2',
        conditions: {
          a: { count: 7, fdr: 0.02, specificity: 3 },
          b: { count: 30.3, fdr: 0.05, specificity: 1 },
        },
      },
      prey3: {
        id: 'id3',
        conditions: {
          a: { count: 4, fdr: 0.02, specificity: 1 },
          b: { count: 6, fdr: 0.01, specificity: Infinity },
        },
      },
    };

    const expected = {
      prey1: {
        id: 'id1',
        conditions: {
          a: { count: 10, fdr: 0.01, specificity: 0.5 },
          b: { count: 5, fdr: 0.05, specificity: 2 },
        },
      },
      prey3: {
        id: 'id3',
        conditions: {
          a: { count: 4, fdr: 0.02, specificity: 1 },
          b: { count: 6, fdr: 0.01, specificity: Infinity },
        },
      },
    };
    expect(filterPreys(preys, 0.01, 0, 0)).toEqual(expected);
  });

  it('should filter by specificity', () => {
    const preys = {
      prey1: {
        id: 'id1',
        conditions: {
          a: { count: 10, fdr: 0.01, specificity: 0.5 },
          b: { count: 5, fdr: 0.05, specificity: 2 },
        },
      },
      prey2: {
        id: 'id2',
        conditions: {
          a: { count: 7, fdr: 0.02, specificity: 3 },
          b: { count: 30.3, fdr: 0.05, specificity: 1 },
        },
      },
      prey3: {
        id: 'id3',
        conditions: {
          a: { count: 4, fdr: 0.02, specificity: 1 },
          b: { count: 6, fdr: 0.01, specificity: Infinity },
        },
      },
    };

    const expected = {
      prey2: {
        id: 'id2',
        conditions: {
          a: { count: 7, fdr: 0.02, specificity: 3 },
          b: { count: 30.3, fdr: 0.05, specificity: 1 },
        },
      },
      prey3: {
        id: 'id3',
        conditions: {
          a: { count: 4, fdr: 0.02, specificity: 1 },
          b: { count: 6, fdr: 0.01, specificity: Infinity },
        },
      },
    };
    expect(filterPreys(preys, 1, 3, 0)).toEqual(expected);
  });

  it('should filter by spectral count', () => {
    const preys = {
      prey1: {
        id: 'id1',
        conditions: {
          a: { count: 10, fdr: 0.01, specificity: 0.5 },
          b: { count: 5, fdr: 0.05, specificity: 2 },
        },
      },
      prey2: {
        id: 'id2',
        conditions: {
          a: { count: 7, fdr: 0.02, specificity: 3 },
          b: { count: 30.3, fdr: 0.05, specificity: 1 },
        },
      },
      prey3: {
        id: 'id3',
        conditions: {
          a: { count: 4, fdr: 0.02, specificity: 1 },
          b: { count: 6, fdr: 0.01, specificity: Infinity },
        },
      },
    };

    const expected = {
      prey1: {
        id: 'id1',
        conditions: {
          a: { count: 10, fdr: 0.01, specificity: 0.5 },
          b: { count: 5, fdr: 0.05, specificity: 2 },
        },
      },
      prey2: {
        id: 'id2',
        conditions: {
          a: { count: 7, fdr: 0.02, specificity: 3 },
          b: { count: 30.3, fdr: 0.05, specificity: 1 },
        },
      },
    };
    expect(filterPreys(preys, 1, 0, 7)).toEqual(expected);
  });

  it('should filter by all attributes', () => {
    const preys = {
      prey1: {
        id: 'id1',
        conditions: {
          a: { count: 10, fdr: 0.01, specificity: 0.5 },
          b: { count: 5, fdr: 0.05, specificity: 2 },
        },
      },
      prey2: {
        id: 'id2',
        conditions: {
          a: { count: 7, fdr: 0.02, specificity: 1 },
          b: { count: 30.3, fdr: 0.01, specificity: 3 },
        },
      },
      prey3: {
        id: 'id3',
        conditions: {
          a: { count: 4, fdr: 0.02, specificity: 1 },
          b: { count: 6, fdr: 0.01, specificity: Infinity },
        },
      },
    };

    const expected = {
      prey2: {
        id: 'id2',
        conditions: {
          a: { count: 7, fdr: 0.02, specificity: 1 },
          b: { count: 30.3, fdr: 0.01, specificity: 3 },
        },
      },
    };
    expect(filterPreys(preys, 0.01, 3, 10)).toEqual(expected);
  });
});
