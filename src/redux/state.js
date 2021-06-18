import { rerenderEntireTree } from '../render'
let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'hi', likesCount: 12 },
      { id: 2, message: 'hello', likesCount: 5 },
    ],
  },
  dialogsPage: {
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
  },
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 3,
    message: postMessage,
    likesCount: 0,
  }

  state.profilePage.posts.push(newPost)
  rerenderEntireTree(state)
}

export default state
