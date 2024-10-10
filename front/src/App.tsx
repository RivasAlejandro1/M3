import { Route, Routes } from 'react-router-dom'
import styles from './App.module.css'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import MyTurns from './views/MyTurns/MyTurns'
import Register from './views/Register/Register'
import Nav from './components/Nav/Nav'

function App() {

  return (
    <div className={styles.App}>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/myTurns" element={<MyTurns/>}></Route>
      </Routes>
    </div>
  )
}

export default App
