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
    uniprot: ['P22222'],
  },
}));

describe('Find preys matching query', () => {
  it('should return sorted array', () => {
    const tests = ['prey1', 'p1', 'p22222'];

    const expected = [
      [
        { symbol: 'prey1', synonyms: ['p11'], uniprot: ['P11111'] },
        { symbol: 'p1', synonyms: ['prey11'], uniprot: ['PA1111'] },
      ],
      [
        { symbol: 'p1', synonyms: ['prey11'], uniprot: ['PA1111'] },
        { symbol: 'prey1', synonyms: ['p11'], uniprot: ['P11111'] },
      ],
      [
        { symbol: 'prey2', synonyms: ['p2'], uniprot: ['P22222'] },
      ],
    ];

    tests.forEach((test, index) => {
      expect(find(test)).toEqual(expected[index]);
    });
  });
});
