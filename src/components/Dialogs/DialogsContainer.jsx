import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator())
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    },
  }
}

const authRedirectComponent = (props) => {
  if (!props.isAuth) return <Redirect to='/login' />

  return <Dialogs {...props} />
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent)

export default DialogsContainer
