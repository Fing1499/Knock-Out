import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import * as GROUPAPI from '../../../utilities/groups-api'
import * as CODES from '../../../utilities/football-api-codes'
import GroupSearch from "../../../components/GroupSearch/GroupSearch"


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
              <Card variant="outlined" sx={{ display: 'inline-block', bgcolor: '#13222F', outline: '.1vmin solid #D3D9E1', width: '70%' }}>
                <CardContent>
                    {group.users.length > 1 ? 
                      <Typography sx={{ fontSize: 14 }} color="#D3D9E1" gutterBottom>
                        {group.users.length} Players
                      </Typography>
                    :
                      <Typography sx={{ fontSize: 14 }} color="#D3D9E1" gutterBottom>
                        {group.users.length} Player
                      </Typography>
                    }
                  <Typography variant="h5" component="div">
                    {group.name}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="D3D9E1">
                    {CODES.leagueCodes[group.league]}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to={`group/${group._id}`} state={{ group: group }}>
                    <Button size="small" sx={{ bgcolor: '#7CB4B8', color: '#13222F', textDecoration: 'none' }}>View Group</Button>
                  </Link>
                </CardActions>
              </Card>
          </div>
        ))}
      </div>
    );

  }


  return (
    <>
      <h1>group page</h1>
      <GroupSearch />
      <Link to='create-group'>
      <Button variant="outlined" sx={{ color: '#D3D9E1' }} endIcon={<AddIcon />}>
        Create Group
      </Button>
      </Link>
      <h1>Your Groups</h1>
      {renderGroups()}
      <Divider sx={{ 
        "&::before, &::after": {
          borderColor: "#D3D9E1",
        }, 
      }}>
        <Chip label="How It Works" sx={{ bgcolor: '#13222F', outline: '.1vmin solid #D3D9E1' }} />
      </Divider>
      <p>explain how it works here</p>
    </>
  )
}