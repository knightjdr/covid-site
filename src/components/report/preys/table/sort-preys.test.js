import sortPreys from './sort-preys';

describe('Sort preys', () => {
  describe('sort by spectral count', () => {
    it('should in ascending direction', () => {
      const options = { condition: 'b', direction: 'asc', type: 'numeric' };
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

      const expected = [
        {
          id: 'id1',
          prey: 'prey1',
          conditions: {
            a: { count: 10, fdr: 0.01 },
            b: { count: 5, fdr: 0.05 },
          },
        },
        {
          id: 'id3',
          prey: 'prey3',
          conditions: {
            a: { count: 4, fdr: 0.02 },
            b: { count: 6, fdr: 0.01 },
          },
        },
        {
          id: 'id2',
          prey: 'prey2',
          conditions: {
            a: { count: 7, fdr: 0.02 },
            b: { count: 30.3, fdr: 0.05 },
          },
        },
      ];
      expect(sortPreys(preys, options)).toEqual(expected);
    });

    it('should in descending direction', () => {
      const options = { condition: 'b', direction: 'des', type: 'numeric' };
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

      const expected = [
        {
          id: 'id2',
          prey: 'prey2',
          conditions: {
            a: { count: 7, fdr: 0.02 },
            b: { count: 30.3, fdr: 0.05 },
          },
        },
        {
          id: 'id3',
          prey: 'prey3',
          conditions: {
            a: { count: 4, fdr: 0.02 },
            b: { count: 6, fdr: 0.01 },
          },
        },
        {
          id: 'id1',
          prey: 'prey1',
          conditions: {
            a: { count: 10, fdr: 0.01 },
            b: { count: 5, fdr: 0.05 },
          },
        },
      ];
      expect(sortPreys(preys, options)).toEqual(expected);
    });
  });

  describe('sort by prey name', () => {
    it('should in ascending direction', () => {
      const options = { condition: 'prey', direction: 'asc', type: 'string' };
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

      const expected = [
        {
          id: 'id1',
          prey: 'prey1',
          conditions: {
            a: { count: 10, fdr: 0.01 },
            b: { count: 5, fdr: 0.05 },
          },
        },
        {
          id: 'id2',
          prey: 'prey2',
          conditions: {
            a: { count: 7, fdr: 0.02 },
            b: { count: 30.3, fdr: 0.05 },
          },
        },
        {
          id: 'id3',
          prey: 'prey3',
          conditions: {
            a: { count: 4, fdr: 0.02 },
            b: { count: 6, fdr: 0.01 },
          },
        },
      ];
      expect(sortPreys(preys, options)).toEqual(expected);
    });

    it('should in descending direction', () => {
      const options = { condition: 'prey', direction: 'des', type: 'string' };
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

      const expected = [
        {
          id: 'id3',
          prey: 'prey3',
          conditions: {
            a: { count: 4, fdr: 0.02 },
            b: { count: 6, fdr: 0.01 },
          },
        },
        {
          id: 'id2',
          prey: 'prey2',
          conditions: {
            a: { count: 7, fdr: 0.02 },
            b: { count: 30.3, fdr: 0.05 },
          },
        },
        {
          id: 'id1',
          prey: 'prey1',
          conditions: {
            a: { count: 10, fdr: 0.01 },
            b: { count: 5, fdr: 0.05 },
          },
        },
      ];
      expect(sortPreys(preys, options)).toEqual(expected);
    });
  });

  describe('highlighted prey', () => {
    it('should prepend a prey to the sorted results', () => {
      const options = {
        condition: 'prey',
        direction: 'asc',
        highlightedPrey: 'prey3',
        type: 'string',
      };
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

      const expected = [
        {
          highlight: true,
          id: 'id3',
          prey: 'prey3',
          conditions: {
            a: { count: 4, fdr: 0.02 },
            b: { count: 6, fdr: 0.01 },
          },
        },
        {
          id: 'id1',
          prey: 'prey1',
          conditions: {
            a: { count: 10, fdr: 0.01 },
            b: { count: 5, fdr: 0.05 },
          },
        },
        {
          id: 'id2',
          prey: 'prey2',
          conditions: {
            a: { count: 7, fdr: 0.02 },
            b: { count: 30.3, fdr: 0.05 },
          },
        },
      ];
      expect(sortPreys(preys, options)).toEqual(expected);
    });
  });
});
