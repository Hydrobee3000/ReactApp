import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../utils/validators/validarors'
import { Input } from '../common/FormsControls/FormsControls'
import { minLengthCreator } from './../../utils/validators/validarors'
import { connect } from 'react-redux'
import { login } from './../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import s from './../common/FormsControls/FormsControls.module.css'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { buttonStyle } from '../common/styles/buttonStyle'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}))

const maxLength20 = maxLengthCreator(20)
const minLength4 = minLengthCreator(4)
const minLength8 = minLengthCreator(8)

const LoginForm = (props) => {
  const classes = useStyles()

  return (
    <div className={s.wrapper}>
      <h1>Login</h1>
      <form className={classes.root} onSubmit={props.handleSubmit}>
        <div>
          <Field
            placeholder={'Email'}
            name={'email'}
            component={Input}
            label={'Email'}
            id={'outlined-basic'}
            variant={'outlined'}
            validate={[required, maxLength20, minLength4]}
          />
        </div>
        <div>
          <Field
            placeholder={'Password'}
            name={'password'}
            type={'password'}
            component={Input}
            label={'Password'}
            id={'outlined-basic'}
            variant={'outlined'}
            validate={[required, maxLength20, minLength8]}
          />
        </div>
        <div>
          <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember me
        </div>
        {props.error && <div className={s.formSummaryError}>{props.error}</div>}
        <div className={s.button}>
          <button style={buttonStyle}>Login</button>
        </div>
      </form>
    </div>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
    <div>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps, { login })(Login)
