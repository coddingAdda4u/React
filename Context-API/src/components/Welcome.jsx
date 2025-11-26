import React, { useContext } from 'react'
import UserContext from '../Context/userContext'

function Welcome() {

  const { user } = useContext(UserContext)

  if (!user) return <h1>Please Login</h1>
  
  return <h1>Welcome { user.username }</h1>
}

export default Welcome
