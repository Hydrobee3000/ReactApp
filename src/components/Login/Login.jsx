import formStyle from './../common/FormsControls/FormsControls.module.css'
import s from './../Login/Login.module.css'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../utils/validators/validarors'
import { Input } from '../common/FormsControls/FormsControls'
import { minLengthCreator } from './../../utils/validators/validarors'
import { connect } from 'react-redux'
import { login } from './../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { buttonStyle } from '../common/styles/buttonStyle'

const maxLength20 = maxLengthCreator(20)
const minLength4 = minLengthCreator(4)
const minLength8 = minLengthCreator(8)

const LoginForm = (props) => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Login</h1>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            placeholder={'Email'}
            name={'email'}
            component={Input}
            label={'Email'}
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
            validate={[required, maxLength20, minLength8]}
          />
        </div>
        <div>
          <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember me
        </div>
        {props.error && <div className={formStyle.formSummaryError}>{props.error}</div>}
        <div>
          <Button style={buttonStyle}>Login</Button>
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
