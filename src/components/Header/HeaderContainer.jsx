import { useEffect } from 'react'
import Header from './Header'

function HeaderContainer(props) {
  useEffect(() => {
    fetch(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((json) => {
        debugger
        // props.setUsers(json.items)
      })
  })
  return <Header {...props} />
}

export default HeaderContainer
