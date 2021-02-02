import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { getUserId } from '../actions/auth'

const RedirectDashboard = () => {
  return (
    <Redirect to="/dashboard" />
  )
}

export const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} component={getUserId() ? RedirectDashboard : Component} />
  )
}
