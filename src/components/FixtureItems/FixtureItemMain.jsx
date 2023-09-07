import './FixtureItems.css'



export default function FixtureListitemMain({ info }) {


  return (
    <>
      <div className="fixture-card">
        <section className="teams-section">
          <h3>{info.teams.home.name}</h3>
          <img className="team-logo" src={info.teams.home.logo} alt={`${info.teams.home.name}'s Crest`} />
          <h3>V</h3>
          <img className="team-logo" src={info.teams.away.logo} alt={`${info.teams.away.name}'s Crest`} />
          <h3>{info.teams.away.name}</h3>
        </section>
        <h4 className="fixture-date">{info.fixture.date}</h4>
      </div>
    </>
  )
}