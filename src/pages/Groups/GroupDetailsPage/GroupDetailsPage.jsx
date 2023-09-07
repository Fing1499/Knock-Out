import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as FOOTBALLAPI from '../../../utilities/football-api'
import * as CODES from '../../../utilities/football-api-codes'
import FixtureListitemMain from '../../../components/FixtureItems/FixtureItemMain';

export default function GroupDetailsPage() {
  
  const location = useLocation();
  const { group } = location.state;

  const [availableChoices, setAvailableChoices] = useState(null)


  async function handleTeams() {
    const params = {
      'league': group.league,
    }
    try {
      const response = await FOOTBALLAPI.getLeagueFixtures(params)
      setAvailableChoices(response)
    } catch (err) {
      console.log(err)
    }
  }

  function renderFixtures() {
    if (!availableChoices) {
      return (
        <h1>click button for fixtures</h1>
      )
    }
    return availableChoices.response.map((choice, idx) => (
      <FixtureListitemMain key={idx} info={choice} />
    ))
  }




  return (
    <>
      <h1>group details page</h1>
      <h1>{group.name}</h1>
      <h3>{group.invite_key} add copy option here</h3>
      <h3>{CODES.leagueCodes[group.league]}</h3>

      <button onClick={handleTeams}>show Teams</button>
      {renderFixtures()}
      <button>confirm selection</button>
    </>
  )
}