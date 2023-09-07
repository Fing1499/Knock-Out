import './NavBar.css'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GroupsIcon from '@mui/icons-material/Groups';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as userService from '../../utilities/users-service';



export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null)
    //user.name
  }

  const [value, setValue] = useState(0);

  return (
    <>
      <nav>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {setValue(newValue)}}
          sx={{ bgcolor: '#13222F' }}
        >
          <BottomNavigationAction
            label="Groups"
            icon={<GroupsIcon sx={{ fontSize: 'calc(100vw / 12)' }} />}
            component={Link}
            to="/groups"
          />
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon sx={{ fontSize: 'calc(100vw / 12)' }} />}
            component={Link}
            to="/dashboard"
          />
          <BottomNavigationAction
            label="Log Out"
            icon={<LogoutIcon sx={{ fontSize: 'calc(100vw / 12)' }} />}
            onClick={handleLogOut}
          />
        </BottomNavigation>
      </nav>
    </>
  );
}