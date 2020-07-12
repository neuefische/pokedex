import firebaseApp from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from './config'

console.log(firebaseConfig)

export default () => {
  firebaseApp.initializeApp(firebaseConfig)
  return firebaseApp.auth()
}
