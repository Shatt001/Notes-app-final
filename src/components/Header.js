import React from 'react'
import { Link } from 'react-router-dom'
import { startLogout } from '../actions/auth'

export default () => {
  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link className="header__title" to="/">
            <h1>
              Notes
            </h1>
          </Link>
          <button className="button no-effects" onClick={() => (startLogout())}>Logout</button>
        </div>
      </div>
    </header>
  )
}