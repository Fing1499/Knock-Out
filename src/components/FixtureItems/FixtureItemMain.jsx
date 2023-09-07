import './FixtureItems.css'


export default function FixtureListitemMain({ info }) {


  return (
    <>
      <div className="fixture-card">
        <section className="teams-section">
          <section className="home-team">
            <h3>{info.teams.home.name}</h3>
            <img className="team-logo" src={info.teams.home.logo} alt={`${info.teams.home.name}'s Crest`} />
          </section>
          <section className="versus">
            <h3 className='v'>V</h3>
          </section>
          <section className="away-team">
            <img className="team-logo" src={info.teams.away.logo} alt={`${info.teams.away.name}'s Crest`} />
            <h3>{info.teams.away.name}</h3>
          </section>
        </section>
        <h4 className="fixture-date">{info.fixture.date}</h4>
      </div>
    </>
  )
}