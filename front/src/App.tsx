import styles from './App.module.css'
import Home from './views/Home/Home'
import MyTurns from './views/MyTurns/MyTurns'

function App() {

  return (
    <div className={styles.App}>
      <Home></Home>
      <MyTurns></MyTurns>
    </div>
  )
}

export default App
