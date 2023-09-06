import { useState } from "react"
import * as GROUPAPI from '../../../utilities/groups-api'



export default function CreateGroupPage() {

  const [groupParams, setGroupParams] = useState({
    'name': '',
    'league': '',
    'players': ''
  })

  function handleChange(evt) {
    setGroupParams({ ...groupParams, [evt.target.name]: evt.target.value });
  }

  async function handleSubmit(evt) {
    evt.preventDefault()
    try {
      const response = await GROUPAPI.createGroup(groupParams)
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <>
      <h1>create group page</h1>
      <form onSubmit={handleSubmit}>
        <label>Group Name</label>
        <input type="text" name="name" onChange={handleChange} />
        <label>Choose a League</label>
        <select name="league" onChange={handleChange}>
          <option value="PremierLeague">Premier League</option>
          <option value="LaLiga">La Liga</option>
          <option value="Ligue1">Ligue 1</option>
          <option value="SerieA">Serie A</option>
          <option value="Bundesliga">Bunesliga</option>
        </select>
        <label>Add Friends</label>
        <label>Insert player name here</label>
        <input type="checkbox" name="players"  value="add-players-here" onChange={handleChange} />
        <button type="submit">Create Group</button>
      </form>
    </>
  )
}