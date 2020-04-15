import levenshtein from 'fast-levenshtein';

import preys from '../../../content/preys.json';

const preyDB = Object.entries(preys).map(([key, details]) => ([
  key,
  ...details.synonyms,
  ...details.uniprot,
]));

const getMinLevenshteinCalculator = (term) => {
  const lcTerm = term.toLowerCase();
  return (arr) => {
    let min = Number.MAX_SAFE_INTEGER;

    arr.forEach((value) => {
      const d = levenshtein.get(value.toLowerCase(), lcTerm);
      if (d < min) {
        min = d;
      }
    });

    return min;
  };
};

const sortMatches = (term, matches) => {
  const calculateLevenshtein = getMinLevenshteinCalculator(term);
  matches.sort((a, b) => calculateLevenshtein(a) - calculateLevenshtein(b));
  return matches.map((match) => ({
    symbol: match[0],
    ...preys[match[0]],
  }));
};

const find = (term) => {
  const re = new RegExp(term, 'i');
  const matches = preyDB.filter((prey) => prey.some((id) => re.test(id)));
  return sortMatches(term, matches);
};

export default find;
