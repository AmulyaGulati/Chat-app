import React, { createContext, useState } from 'react';
import { useContext } from 'react/cjs/react.development';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile] = useState(false);

  return (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
