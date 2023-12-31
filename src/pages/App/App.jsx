import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../Homepage/Homepage';
import NavBar from '../../components/NavBar/NavBar';
import GroupPage from '../Groups/GroupPage/GroupPage';
import CreateGroupPage from '../Groups/CreateGroupPage/CreateGroupPage';
import GroupDetailsPage from '../Groups/GroupDetailsPage/GroupDetailsPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/dashboard" element={<HomePage />} />
              <Route path="/groups" element={<GroupPage />} />
              <Route path="/groups/create-group" element={<CreateGroupPage />} />
              <Route path="/groups/group/:id" element={<GroupDetailsPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
