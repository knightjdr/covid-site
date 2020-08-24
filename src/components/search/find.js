import levenshtein from 'fastest-levenshtein';

import preys from '../../../content/preys.json';

const preyDB = Object.entries(preys).map(([key, details]) => ({
  entrez: String(details.entrez),
  symbols: [key, ...details.synonyms],
  uniprot: details.uniprot,
}));

const getMinLevenshteinCalculator = (term) => {
  const lcTerm = term.toLowerCase();
  return (arr) => {
    let min = Number.MAX_SAFE_INTEGER;

    arr.forEach((value) => {
      const d = levenshtein.distance(value.toLowerCase(), lcTerm);
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
  const reSymbol = new RegExp(term, 'i');
  const reUniprot = new RegExp(`^${term}$`, 'i');
  const matches = preyDB.filter((prey) => (
    prey.symbols.some((symbol) => reSymbol.test(symbol))
    || prey.entrez === term
    || prey.uniprot.some((accession) => reUniprot.test(accession))
  )).map((prey) => [...prey.symbols, prey.entrez, ...prey.uniprot]);
  return sortMatches(term, matches);
};

export default find;
