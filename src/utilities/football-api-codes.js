const codes = {
  'Premier League': {
    'id': 39,
    'Arsenal': 62,
    'Liverpool': 64,
    'Manchester City': 65,
    'Manchester United': 66,
    // Add other Premier League teams here
  },
  'La Liga': {
    'id': 140,
    'Barcelona': 54,
    'Real Madrid': 55,
    'Atletico Madrid': 57,
    'Sevilla': 62,
    // Add other La Liga teams here
  },
  'Bundesliga': {
    'id': 78,
    'Bayern Munich': 21,
    'Borussia Dortmund': 22,
    'RB Leipzig': 19,
    'Bayer Leverkusen': 31,
    // Add other Bundesliga teams here
  },
  'Serie A': {
    'id': 135,
    'Juventus': 109,
    'Inter Milan': 108,
    'AC Milan': 112,
    'Napoli': 113,
    // Add other Serie A teams here
  },
  'Ligue 1': {
    'id': 61,
    'Paris Saint-Germain': 85,
    'Marseille': 87,
    'Lyon': 88,
    'Monaco': 95,
    // Add other Ligue 1 teams here
  }
};

const leagueCodes = {
  39: 'Premier League',
  140: 'La Liga',
  78: 'Bundesliga',
  135: 'Serie A',
  61: 'Ligue 1'
}

module.exports = {
  codes, 
  leagueCodes
}