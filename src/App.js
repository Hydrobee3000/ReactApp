import './App.css'
import { Route, Redirect } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import LoginPage from './components/Login/Login'
import Preloader from './components/common/Preloader/Preloader'
import { connect } from 'react-redux'
import { inititalizeApp } from './redux/app-reducer'
import store from './redux/redux-store'
//import { BrowserRouter as Router} from 'react-router-dom'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import React from 'react'
import { Paper } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles'
import { useEffect } from 'react'
import { Settings } from './components/Settings/Settings'

//theme for Material UI
const theme = createTheme({
  palette: {
    primary: {
      main: '#2b7a78',
    },
    secondary: {
      main: '#f6fdfc',
    },
  },
})

const App = (props) => {
  useEffect(() => {
    props.inititalizeApp()
  })

  if (!props.initialized) {
    return <Preloader />
  } else {
    return (
      <div className='app-wrapper'>
        <Grid container>
          <Grid item xs={12}>
            <Paper>
              <HeaderContainer />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper color='#f6fdfc'>
              <div className='app-wrapper-content'>
                <Route exact path='/'>
                  <Redirect to='/profile' />
                </Route>
                <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                <Route path='/dialogs' render={() => <DialogsContainer />} />
                <Route path='/users' render={() => <UsersContainer />} />
                <Route path='/login' render={() => <LoginPage />} />
                <Route path='/weather' render={() => <Settings />} />
                <Route path='/settings' render={() => <Settings />} />
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
      <Router basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
          <MuiThemeProvider theme={theme}>
            <AppContainer />
          </MuiThemeProvider>
        </Provider>
      </Router>
    </React.StrictMode>
  )
}

export default MainApp
