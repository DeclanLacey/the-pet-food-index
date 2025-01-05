import './App.css'

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
      <h1>Hello</h1>
      <button onClick={login}>Login</button>
      <button onClick={register}>Register</button>
    </>
  )
}

export default App
