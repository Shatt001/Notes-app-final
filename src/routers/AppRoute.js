import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import NotesDashboardPage from '../components/NotesDashboardPage'
import NotesAddPage from '../components/NotesAddPage'
import NotesEditPage from '../components/NotesEditPage'
import NotesHistoryPage from '../components/NotesHistoryPage'
import NotFoundPage from '../components/NotFoundPage'
import { NotesProvider } from '../context/notes-contex'
import { LoginPage } from '../components/LoginPage'
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'

export default (props) => {
  return (
    <BrowserRouter>
      <NotesProvider user={props.user}>
        <React.Fragment>
          <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/dashboard" component={NotesDashboardPage} />
            <PrivateRoute path="/add" component={NotesAddPage} />
            <PrivateRoute path="/edit/:id" component={NotesEditPage} />
            <PrivateRoute path="/history" component={NotesHistoryPage} />
            <PublicRoute component={NotFoundPage} />
          </Switch>
        </React.Fragment>
      </NotesProvider>
    </BrowserRouter>
  )
}

