import WikimediaPage from './WikimediaPage';

// wikimedia page
const jimiHendrixPage = new WikimediaPage(
  'Jimi Hendrix',
  `Jimi Hendrix (born November 27, 1942, Seattle, Washington, U.S. and died September 18, 1970, London, England.`,
  `Genres: Rock, Psychedelic Rock, Blues`,
  [
    "Are You Experienced (1967)",
    "Axis: Bold as Love (1967)",
    "Electric Ladyland (1968)"
  ]
);

jimiHendrixPage.printSummary();
jimiHendrixPage.printContent();
jimiHendrixPage.printContent('albums');
console.log(jimiHendrixPage.info);