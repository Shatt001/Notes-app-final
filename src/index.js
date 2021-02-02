import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRoute'
import 'normalize.css/normalize.css'
// Application own styles instance 
import './styles/styles.scss'
// date picker style
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { setUser } from './actions/auth'
import { firebase } from './firebase/firebase'

firebase.auth().onAuthStateChanged((user) => {
  setUser(user);
  ReactDOM.render(<AppRouter user={user} />, document.getElementById('app'));
});

