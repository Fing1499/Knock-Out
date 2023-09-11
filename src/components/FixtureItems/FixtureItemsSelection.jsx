import './FixtureItems.css'
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import { useState } from 'react';
import * as GROUPAPI from '../../utilities/groups-api'

export default function FixtureListitemSelection({ info, invite_key }) {


  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${formattedMinutes}`;
  }

  const [selection, setSelection] = useState({
    team: '',
    id: '',
    result: '',
    invite_key: invite_key
  })


  async function handleChange(value) {
    try {
    if (value === 'HOME') {
      setSelection({
        team: info.teams.home.name,
        id: info.fixture.id,
        result: value,
        invite_key: invite_key
      })
    }
    if (value === 'DRAW') {
      setSelection({
        team: 'DRAW',
        id: info.fixture.id,
        result: value,
        invite_key: invite_key
      })
    }
    if (value === 'AWAY') {
      setSelection({
        team: info.teams.away.name,
        id: info.fixture.id,
        result: value,
        invite_key: invite_key
      })
    }
      const response = await GROUPAPI.makeSelection(selection)
    } catch (error) {
      
    }
  }

  return (
    <>
      <div className="fixture-card">
        <section className="teams-section">
          <section className="home-team">
            <h3>{info.teams.home.name}</h3>
            <img className="team-logo" src={info.teams.home.logo} alt={`${info.teams.home.name}'s Crest`} />
          </section>
          <section className="date">
            <h3 className='fixtureDate'>{formatDate(info.fixture.date)}</h3>
          </section>
          <section className="away-team">
            <img className="team-logo" src={info.teams.away.logo} alt={`${info.teams.away.name}'s Crest`} />
            <h3>{info.teams.away.name}</h3>
          </section>
        </section>
        <section className="win-lose-buttons">
          <ButtonGroup
            color="neutral"
            orientation="horizontal"
            size="md"
            variant="plain"
            sx={{
              width: '100%',
              bgcolor: '#13222F',
              display: 'flex',
              justifyContent: 'space-around',
              margin: '0',
              borderTopLeftRadius: '0',
              borderTopRightRadius: '0',
              border: '.1vmin solid #e6ecf360'

            }}
          >
            <Button value='HOME' onClick={() => handleChange('HOME')} sx={{ color: '#e6ecf3', width: '100%', margin: '0' }}>HOME</Button>
            <Button value='DRAW' onClick={() => handleChange('DRAW')} sx={{ color: '#e6ecf3', width: '50%'}}>DRAW</Button>
            <Button value='AWAY' onClick={() => handleChange('AWAY')} sx={{ color: '#e6ecf3', width: '100%' }}>AWAY</Button>
          </ButtonGroup>
        </section>
      </div>
    </>
  )
}