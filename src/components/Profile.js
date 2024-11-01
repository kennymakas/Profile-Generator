import React from 'react';

function Profile({ profileData }) {
  return (
    <div>
      <img src={profileData.avatar_url} alt="Profile" width={150} />
      <h2>{profileData.name}</h2>
      <p>{profileData.bio}</p>
      <p>Followers: {profileData.followers}</p>
      <p>Following: {profileData.following}</p>
    </div>
  );
}

export default Profile;
