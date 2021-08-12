import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../utils/validators/validarors'
import { Element } from '../common/FormsControls/FormsControls'
import { minLengthCreator } from './../../utils/validators/validarors'
import { connect } from 'react-redux'
import { login } from './../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import s from './../common/FormsControls/FormsControls.module.css'

const Input = Element('input')
const maxLength20 = maxLengthCreator(20)
const minLength4 = minLengthCreator(4)
const minLength8 = minLengthCreator(8)

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Email'} name={'email'} component={Input} validate={[required, maxLength20, minLength4]} />
      </div>
      <div>
        <Field
          placeholder={'Password'}
          name={'password'}
          type={'password'}
          component={Input}
          validate={[required, maxLength20, minLength8]}
        />
      </div>
      <div>
        <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember me
      </div>
      {props.error && <div className={s.formSummaryError}>{props.error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
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
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps, { login })(Login)
