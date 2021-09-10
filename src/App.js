import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import LoginPage from './components/Login/Login'
import Preloader from './components/common/Preloader/Preloader'
import { connect } from 'react-redux'
import { inititalizeApp } from './redux/app-reducer'
import store from './redux/redux-store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import React from 'react'
import { Paper } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles'
import { useEffect } from 'react'

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
        <Grid container maxWidth='sm'>
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
            <Paper color='#f6fdfc'>
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
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
          <MuiThemeProvider theme={theme}>
            <AppContainer />
          </MuiThemeProvider>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default MainApp
