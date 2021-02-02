import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Header from '../components/Header'
import { getUserId } from '../actions/auth'

const RedirectComponent = () => {
  return (
    <Redirect to="/" />
  )
}

const MainComponent = (Component, props) => {

  return (
    <div>
      <Header />
      <Component {...props}/>
    </div>
  )
}

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} component={getUserId() ? (props) => (MainComponent(Component, props)) : RedirectComponent} />
  )
}
