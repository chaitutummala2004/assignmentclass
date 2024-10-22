import React, { useState } from 'react';
import ProfileForm from './ProfileForm';  // Import ProfileForm component
import ListCard from '../listRendering/ListCard'; // Import ListCard component

const Profile = () => {
  const [profiles, setProfiles] = useState([
    { id: 1, name: "Alice", age: 28, occupation: "Engineer" },
    { id: 2, name: "Bob", age: 32, occupation: "Doctor" },
    { id: 3, name: "Charlie", age: 25, occupation: "Artist" }
  ]);

  const addProfile = (newProfile) => {
    // Add new profile to the list with a unique ID
    const updatedProfile = { ...newProfile, id: profiles.length + 1 };
    setProfiles([...profiles, updatedProfile]);  // Spread the current profiles and add the new one
  };

  return (
    <>
      {/* Add ProfileForm and pass addProfile function */}
      <ProfileForm addProfile={addProfile} />
      
      {/* Display the profiles using ListCard component */}
      <div className="profiles-card">
        {profiles.map((profile) => (
          <ListCard data={profile} key={profile.id} />
        ))}
      </div>
    </>
  );
};

export default Profile;
