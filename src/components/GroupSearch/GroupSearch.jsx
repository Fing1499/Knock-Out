import { set } from "mongoose";
import { useState } from "react"
import * as GROUPAPI from '../../utilities/groups-api'





export default function GroupSearch() {

  const [searchKey, setSearchKey] = useState(null)

  function handleChange(evt) {
    setSearchKey({ ...searchKey, [evt.target.name]: evt.target.value });
  }

  async function handleSubmit() {
    try {
      const response = await GROUPAPI.joinGroup(searchKey)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Join a Group</label>
        <input onChange={handleChange} name="invite_key" type="text" />
        <button type="submit">Join</button>
      </form>
    </>
  )
}