import { getDimensions, getScrollToRow } from './heatmap-container';

jest.mock('./assets/heatmap-shape.json', () => ({
  columns: Array(10).map((x, i) => `bait${i}`),
  rows: Array(100).map((x, i) => `prey${i}`),
}));

describe('Heat map container', () => {
  describe('get canvas dimensions', () => {
    it('should return dimensions', () => {
      const container = {
        getBoundingClientRect: () => ({ height: 100 }),
      };

      const expected = {
        canvas: {
          height: 500,
          width: 200,
        },
        numRows: 100,
        pageSize: 5,
        pageSizeWithBuffer: 25,
      };

      expect(getDimensions(container)).toEqual(expected);
    });
  });

  describe('scroll to row getter returns top index and slice boundaries', () => {
    it('should return when requested top is < 0', () => {
      const container = {
        getBoundingClientRect: () => ({ height: 100 }),
      };
      const dims = {
        pageSizeWithBuffer: 25,
      };
      const rowIndex = -1;

      const expected = {
        index: 0,
        sliceStart: 0,
        sliceEnd: 25,
      };

      expect(getScrollToRow(container, rowIndex, dims)).toEqual(expected);
    });

    it('should return when requested top is within top buffer', () => {
      const container = {
        getBoundingClientRect: () => ({ height: 100 }),
      };
      const dims = {
        pageSizeWithBuffer: 25,
      };
      const rowIndex = 4;

      const expected = {
        index: 4,
        sliceStart: 0,
        sliceEnd: 25,
      };

      expect(getScrollToRow(container, rowIndex, dims)).toEqual(expected);
    });

    it('should return when requested top exceeds row number', () => {
      const container = {
        getBoundingClientRect: () => ({ height: 100 }),
      };
      const dims = {
        numRows: 50,
        pageSizeWithBuffer: 25,
      };
      const rowIndex = 55;

      const expected = {
        index: 45,
        sliceStart: 25,
        sliceEnd: 50,
      };

      expect(getScrollToRow(container, rowIndex, dims)).toEqual(expected);
    });

    it('should return requested top is within end buffer', () => {
      const container = {
        getBoundingClientRect: () => ({ height: 100 }),
      };
      const dims = {
        numRows: 50,
        pageSizeWithBuffer: 25,
      };
      const rowIndex = 47;

      const expected = {
        index: 45,
        sliceStart: 25,
        sliceEnd: 50,
      };

      expect(getScrollToRow(container, rowIndex, dims)).toEqual(expected);
    });

    it('should return when requested top is within normal bounds', () => {
      const container = {
        getBoundingClientRect: () => ({ height: 100 }),
      };
      const dims = {
        numRows: 50,
        pageSize: 5,
        pageSizeWithBuffer: 25,
      };
      const rowIndex = 25;

      const expected = {
        index: 25,
        sliceStart: 15,
        sliceEnd: 40,
      };

      expect(getScrollToRow(container, rowIndex, dims)).toEqual(expected);
    });
  });
});
