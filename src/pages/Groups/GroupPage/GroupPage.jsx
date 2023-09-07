import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import * as GROUPAPI from '../../../utilities/groups-api'
import * as CODES from '../../../utilities/football-api-codes'



export default function GroupPage() {

  const [groups, setGroups] = useState(null)
  
  useEffect(() => {
    async function getGroups() {
      try {
        const response = await GROUPAPI.getGroups()
        console.log(response)
        setGroups(response)
      } catch (err) {
        console.log(err)
      }
    }
    getGroups()
  }, [])

  function renderGroups() {
    if (groups < 1) {
      return (
        <h1>You Have No Groups</h1>
      )
    }
    return (
      <div>
        {groups.map((group) => (
          <div key={group._id}>
            <Link to={`group/${group._id}`} state={{ group: group }}>
              <h1>{group.name}</h1>
              <h3>{CODES.leagueCodes[group.league]}</h3>
              <h2>{group.users.length}</h2>
            </Link>
          </div>
        ))}
      </div>
    );

  }


  return (
    <>
      <h1>group page</h1>
      <Link to='create-group'>Create Group</Link>
      <h1>Your Groups</h1>
      {renderGroups()}
    </>
  )
}