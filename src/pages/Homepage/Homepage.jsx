import FixtureListitemMain from '../../components/FixtureItems/FixtureItemMain';
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
      <FixtureListitemMain key={idx} info={fixture} />
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
