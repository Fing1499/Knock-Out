import * as Football from '../../utilities/football-api';
import { useState } from 'react';

export default function HomePage() {
  const [fixtures, setFixtures] = useState(null);

  async function fetchData() {
    try {
      const response = await Football.getFixtures();
      setFixtures(response);
      console.log('res', response);
    } catch (error) {
      // Handle errors here if needed
      console.error('Error in fetchData:', error);
    }
  }

  function renderFixtures(data) {
    
    if (fixtures === null) {
      return <h1>nothing to see</h1>;
    } else {
      
    const fixturesData = data.response
    return fixturesData.map((fixture, idx) => (
      <div key={idx}>
        <h1>{fixture.teams.home.name} vs {fixture.teams.away.name}</h1>
        <p>{fixture.fixture.date}</p>
      </div>
    ));
    }
  }

  return (
    <>
      <h1>HomePage</h1>
      <button onClick={fetchData}>Get Fixtures</button>
      <div>
        <h2>Fixtures:</h2>
        {renderFixtures(fixtures)}
      </div>
    </>
  );
}
