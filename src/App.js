import React, { useState } from 'react';
import Search from './components/Search';
import Profile from './components/Profile';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  const [profileData, setProfileData] = useState(null);
  
  return (
    <div className="App">
      <ThemeSwitcher />
      <Search setProfileData={setProfileData} />
      {profileData && <Profile profileData={profileData} />}
    </div>
  );
}

export default App;
