export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function helperRandomReadTime() {
  return Math.floor(Math.random() * 20);
}

export function helperRandomColor(){
  const colors = [ 'blue', 'yellow', 'orange', 'red', 'green', 'violet', 'indego', 'teal', 'salmon', 'gold', 'silver']
  return `${rando(colors)}`
}

export function helperArticleType() {
  const articleTypes = [
    "Old Article",
    "Archived Article",
    "New Article",
    "Top Article"
  ];
  return `${rando(articleTypes)}`;
}

export function helperFunName() {
  const adjectives = [
    "adorable",
    "beautiful",
    "clean",
    "drab",
    "elegant",
    "fancy",
    "glamorous",
    "handsome",
    "long",
    "magnificent",
    "old-fashioned",
    "plain",
    "quaint",
    "sparkling",
    "ugliest",
    "unsightly",
    "angry",
    "bewildered",
    "clumsy",
    "defeated",
    "embarrassed",
    "fierce",
    "grumpy",
    "helpless",
    "itchy",
    "jealous",
    "lazy",
    "mysterious",
    "nervous",
    "obnoxious",
    "panicky",
    "repulsive",
    "scary",
    "thoughtless",
    "uptight",
    "worried"
  ];

  const nouns = [
    "women",
    "men",
    "children",
    "teeth",
    "feet",
    "people",
    "leaves",
    "mice",
    "geese",
    "halves",
    "knives",
    "wives",
    "lives",
    "elves",
    "loaves",
    "potatoes",
    "tomatoes",
    "cacti",
    "foci",
    "fungi",
    "nuclei",
    "syllabuses",
    "analyses",
    "diagnoses",
    "oases",
    "theses",
    "crises",
    "phenomena",
    "criteria",
    "data"
  ];

  return `${rando(adjectives)} ${rando(adjectives)} ${rando(nouns)}`;
}
