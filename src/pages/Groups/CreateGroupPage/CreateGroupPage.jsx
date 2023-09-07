import { useState } from "react"
import * as GROUPAPI from '../../../utilities/groups-api'



export default function CreateGroupPage() {

  const [groupParams, setGroupParams] = useState({
    'name': '',
    'league': 39,
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
          <option name="league" value={39}>Premier League</option>
          <option name="league" value={140}>La Liga</option>
          <option name="league" value={61}>Ligue 1</option>
          <option name="league" value={135}>Serie A</option>
          <option name="league" value={78}>Bunesliga</option>
        </select>
        <label>Add Friends</label>
        <label>Insert player name here</label>
        <input type="checkbox" name="players"  value="add-players-here" onChange={handleChange} />
        <button type="submit">Create Group</button>
      </form>
    </>
  )
}