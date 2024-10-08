import styles from './App.module.css'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import MyTurns from './views/MyTurns/MyTurns'
import Register from './views/Register/Register'

function App() {

  return (
    <div className={styles.App}>
      
      <Login></Login>
      <Register></Register>
      <Home></Home>
      <MyTurns></MyTurns>
    </div>
  )
}

export default App
