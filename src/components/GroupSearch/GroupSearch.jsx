import '../../pages/Groups/Group.css'
import TextField from '@mui/material/TextField';
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
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <>
      <form onSubmit={handleSubmit} className='group-search-form'>
        <label>Join a Group</label>
        <TextField onChange={handleChange} name="invite_key" id="outlined-search" label="Enter Invite Key" type="search" 
        sx={{
          backgroundColor: '#13222F',
          '& .MuiInputBase-input': {
            color: 'white', // Change input text color
          },
          '& .MuiInputLabel-root': {
            color: '#7CB4B8', // Change label text color
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#7CB4B8', // Change border color
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#AFD2D4', // Change border color on hover
          },
          '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#AFD2D4', // Change the border color when focused
          }
        }}
        />
        <button type="submit">Join</button>
      </form>
    </>
  )
}