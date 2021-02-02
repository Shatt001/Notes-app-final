import React from 'react'
import { startLogin } from '../actions/auth'

export const LoginPage = () => {

  const onLogin = () => {
    startLogin().catch((err) => {
    })
  }

  return (
    <div>
      <h1>Notes</h1>
      <p>It's time to get your notes under control.</p>
      <button onClick={onLogin}>Login with Google</button>
    </div>
  )
}
