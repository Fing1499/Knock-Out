import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import * as GROUPAPI from '../../../utilities/groups-api'




export default function GroupPage() {

  const [groups, setGroups] = useState(null)
  
  useEffect(() => {
    async function getGroups() {
      try {
        const response = GROUPAPI.getGroups()
        console.log(response)
        setGroups(response)
      } catch (err) {
        console.log(err)
      }
    }
    getGroups()
  }, [])


  return (
    <>
      <h1>group page</h1>
      <Link to='create-group'>Create Group</Link>
      <h1>Your Groups</h1>

    </>
  )
}