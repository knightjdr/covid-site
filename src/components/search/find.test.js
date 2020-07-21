/* eslint-disable object-curly-newline */
import find from './find';

jest.mock('../../../content/preys.json', () => ({
  prey1: {
    entrez: 111,
    synonyms: ['p11'],
    uniprot: ['P11111'],
  },
  p1: {
    entrez: 112,
    synonyms: ['prey11'],
    uniprot: ['PA1111'],
  },
  prey2: {
    entrez: 222,
    synonyms: ['p2'],
    uniprot: ['P2A2A2'],
  },
}));

describe('Find preys matching query', () => {
  it('should return results sorted based on gene name', () => {
    const tests = ['prey1', 'p1'];

    const expected = [
      [
        { entrez: 111, symbol: 'prey1', synonyms: ['p11'], uniprot: ['P11111'] },
        { entrez: 112, symbol: 'p1', synonyms: ['prey11'], uniprot: ['PA1111'] },
      ],
      [
        { entrez: 112, symbol: 'p1', synonyms: ['prey11'], uniprot: ['PA1111'] },
        { entrez: 111, symbol: 'prey1', synonyms: ['p11'], uniprot: ['P11111'] },
      ],
    ];

    tests.forEach((test, index) => {
      expect(find(test)).toEqual(expected[index]);
    });
  });

  it('should return results when query exactly matches entrez id', () => {
    const test = '111';

    const expected = [
      { entrez: 111, symbol: 'prey1', synonyms: ['p11'], uniprot: ['P11111'] },
    ];

    expect(find(test)).toEqual(expected);
  });

  it('should return no results when query only partially matches uniprot accession', () => {
    const test = 'P2A';

    const expected = [];

    expect(find(test)).toEqual(expected);
  });

  it('should return results when query exactly matches uniprot accession', () => {
    const test = 'P2a2a2';

    const expected = [
      { entrez: 222, symbol: 'prey2', synonyms: ['p2'], uniprot: ['P2A2A2'] },
    ];

    expect(find(test)).toEqual(expected);
  });
});
