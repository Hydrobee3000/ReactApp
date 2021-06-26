const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
  dialogs: [
    { id: 1, name: '1' },
    { id: 2, name: '2' },
    { id: 3, name: '3' },
    { id: 4, name: '4' },
    { id: 5, name: '5' },
    { id: 6, name: '6' },
  ],
  messages: [
    { id: 1, message: 'hi' },
    { id: 2, message: 'hello' },
    { id: 3, message: 'privet' },
  ],
  newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {
  let stateCopy
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      stateCopy = {
        ...state,
        newMessageBody: action.body,
      }
      return stateCopy
    case SEND_MESSAGE:
      let body = state.newMessageBody
      stateCopy = {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 4, message: body }],
      }
      return stateCopy
    default:
      return state
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
})

export default dialogsReducer
