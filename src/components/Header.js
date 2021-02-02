import React from 'react'
import { Link } from 'react-router-dom'
import { startLogout } from '../actions/auth'

export default () => {
  return (
    <header>
      <div>
        <Link to="/">  Dashboard  </Link>
        <Link to="/add">  Add  </Link>
        <Link to="/history">  History  </Link>
        <button className="button button--link" onClick={() => (startLogout())}>Logout</button>
      </div>
    </header>
  )
}