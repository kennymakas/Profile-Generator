import React, { useState } from 'react';
import axios from 'axios';

function Search({ setProfileData }) {
  const [username, setUsername] = useState('');

  const fetchProfileData = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setProfileData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter GitHub Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <button onClick={fetchProfileData}>Search</button>
    </div>
  );
}

export default Search;
