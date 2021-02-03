import React from 'react'
import { startLogin } from '../actions/auth'

export const LoginPage = () => {

  const onLogin = () => {
    startLogin().catch((err) => {
    })
  }

  return (
    <div className="box-layout">
      <div className="box-layout__img-box"></div>
      <div className="box-layout__content-box">
        <h1 className="box-layout__content-box__title">Notes app</h1>
        <p>It's time to get your notes under control.</p>
        <button className="button" onClick={onLogin}>Login with Google</button>
      </div>
    </div>
  )
}
