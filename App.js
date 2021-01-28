import React from 'react';
import Authentication from './screens/Authentication';

export default function App() {
  async function onGoogleButtonPress() {
    // Sign-in Process here
  }

  return <Authentication onGoogleButtonPress={onGoogleButtonPress} />;
}
