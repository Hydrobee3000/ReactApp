import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer'

let state = {
  posts: [
    { id: 1, message: 'hi', likesCount: 12 },
    { id: 2, message: 'hello', likesCount: 5 },
    { id: 3, message: 'gr', likesCount: 5 },
    { id: 4, message: 'grg', likesCount: 5 },
  ],
}

test('length of posts should be incremented', () => {
  //1. test data
  let action = addPostActionCreator('text')

  //2. action
  let newState = profileReducer(state, action)

  //3. expectation
  expect(newState.posts.length).toBe(5)
})

test('value of posts should be correct', () => {
  let action = addPostActionCreator('text')

  let newState = profileReducer(state, action)

  expect(newState.posts[4].message).toBe('text')
})

test('after deliting length of posts should be decrement', () => {
  let action = deletePost(1)

  let newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(3)
})

test(`after deliting length shouldn't be decrement if id is incorrect`, () => {
  let action = deletePost(1)

  let newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(3)
})
