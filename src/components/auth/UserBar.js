import React, {useContext} from 'react'
import LoginContext from './loginContext'
import { useHistory } from 'react-router-dom'


export default function UserBar () {
  const { user, firebaseApp } = useContext(LoginContext)
  const history = useHistory()

  async function logout () {
    await firebaseApp.signOut()
    history.push('/')
  }

  return(
    <div>
      {user
        ? <button onClick={logout}>Logout</button>
        : (
          <>
            <button onClick={() => history.push('/login')}>Login</button> | 
            <button onClick={() => history.push('/register')}>Register</button>
          </>
        )
      }
    </div>
  )
}