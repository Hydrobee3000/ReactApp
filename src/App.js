import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import LoginPage from './components/Login/Login'
import { connect } from 'react-redux'
import { Component } from 'react'
import { inititalizeApp } from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader'
import store from './redux/redux-store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import React from 'react'
import { makeStyles, Paper } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { useEffect } from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {},
}))

const App = (props) => {
  const classes = useStyles()

  useEffect(() => {
    props.inititalizeApp()
  })

  if (!props.initialized) {
    return <Preloader />
  } else {
    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Paper>
              <HeaderContainer />
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>
              <Navbar />
            </Paper>
          </Grid>
          <Grid item xs={10}>
            <Paper>
              <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer />} />
                <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                <Route path='/users' render={() => <UsersContainer />} />
                <Route path='/login' render={() => <LoginPage />} />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

let AppContainer = connect(mapStateToProps, { inititalizeApp })(App)

const MainApp = (props) => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default MainApp
