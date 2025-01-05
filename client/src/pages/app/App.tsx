import { Route, Routes } from 'react-router'
import './App.css'
import Home from '../home/Home'
import Comparison from '../comparison/Comparison'
import Collections from '../collections/Collections'
import Catalog from '../catalog/Catalog'
import UserProfile from '../userProfile/UserProfile'
import Favorites from '../favorites/Favorites'
import Login from '../login/Login'
import Register from '../register/Register'

function App() {

  async function login() {
    const body = {
      email: "declan.lacey@gmail.com",
      password: "password"
    }

    try {
      const response = await fetch("http://localhost:8080/user/login", {
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(body),
        method: "POST"
      })
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }

      console.log(await response.json())
    }catch (error) {
      console.error(error);
    }
  }

  async function register() {

    const body = {
      firstName: "Declan",
      lastName: "Lacey",
      email: "declan.lacey@gmail.com",
      password: "password"
    }

    try {
      const response = await fetch("http://localhost:8080/user/register", {
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(body),
        method: "POST",
      })
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }

      console.log(await response.json())
    }catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {/* <h1>Hello</h1>
      <button onClick={login}>Login</button>
      <button onClick={register}>Register</button> */}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/comparison' element={<Comparison />} />
        <Route path='/collections' element={<Collections />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/user' element={<UserProfile />} />
        <Route path='/user/favorites' element={<Favorites />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
