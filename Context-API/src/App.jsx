import React from 'react'
import UserContextProvider from './Context/UserContextProvider';
import Login from './components/Login';
import Welcome from './components/Welcome';

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Welcome />
    </UserContextProvider>
  );
};

export default App;
