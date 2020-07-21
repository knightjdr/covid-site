import find from './find';

jest.mock('../../../content/preys.json', () => ({
  prey1: {
    synonyms: ['p11'],
    uniprot: ['P11111'],
  },
  p1: {
    synonyms: ['prey11'],
    uniprot: ['PA1111'],
  },
  prey2: {
    synonyms: ['p2'],
    uniprot: ['P2A2A2'],
  },
}));

describe('Find preys matching query', () => {
  it('should return results sorted based on gene name', () => {
    const tests = ['prey1', 'p1'];

    const expected = [
      [
        { symbol: 'prey1', synonyms: ['p11'], uniprot: ['P11111'] },
        { symbol: 'p1', synonyms: ['prey11'], uniprot: ['PA1111'] },
      ],
      [
        { symbol: 'p1', synonyms: ['prey11'], uniprot: ['PA1111'] },
        { symbol: 'prey1', synonyms: ['p11'], uniprot: ['P11111'] },
      ],
    ];

    tests.forEach((test, index) => {
      expect(find(test)).toEqual(expected[index]);
    });
  });

  it('should return no results when query only partially matches uniprot accession ', () => {
    const test = 'P2A';

    const expected = [];

    expect(find(test)).toEqual(expected);
  });

  it('should return results when query exactly matches uniprot accession ', () => {
    const test = 'P2a2a2';

    const expected = [
      { symbol: 'prey2', synonyms: ['p2'], uniprot: ['P2A2A2'] },
    ];

    expect(find(test)).toEqual(expected);
  });
});