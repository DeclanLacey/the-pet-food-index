import { NavigateFunction, NavLink, useNavigate } from "react-router";
import { ChangeEvent, FormEvent, useState } from "react";
import { loginCurrentUser } from "../../util/serverCalls";
import { CurrentUser } from "../../types/Types";
import "./Login.css"
import { getAccessToken, storeAccessToken, storeRefreshToken } from "../../util/utils";

async function handleLogin(event: FormEvent<HTMLFormElement>, email: string, password: string, navigate: NavigateFunction ) {
  event.preventDefault()
  const currentUser : CurrentUser = {
    email: email,
    password: password
  }

  try {
    const response = await loginCurrentUser(currentUser)
    
    if (response.accessToken) {
      storeAccessToken(response.accessToken)
      storeRefreshToken(response.refreshToken)
      navigate("/user");
    }
  }catch (error) {
    /// You will want to handle the error here and probably show some text on the screen when the login does not work
    console.error(error);
  }
}

export function handleFormChange(event : ChangeEvent<HTMLInputElement>, setFunction: Function) {
  setFunction(event.target.value)
}

export default function Login() {

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const navigate = useNavigate();

  return (
    <div className="login">
      <h1 className="login_title">Welcome back</h1>
      <p className="login_subtitle">First time here? <NavLink className="login_subtitle-link" to="/register">Sign up for free</NavLink>.</p>

      <form className="login_form" onSubmit={(event) => {handleLogin(event, email, password, navigate)}}>
        <div className="login_form-input-container">
          <label className="login_form-input-label" htmlFor="email">E-mail</label>
          <input 
            className="login_form-input" 
            type='email' 
            name="email" 
            id="email" 
            autoComplete="email" 
            value={email}
            required 
            maxLength={50}
            onChange={(event) => {handleFormChange(event, setEmail)}}
          />
        </div>

        <div className="login_form-input-container">
          <label className="login_form-input-label" htmlFor="password">Password</label>
          <input 
            className="login_form-input" 
            name="password" 
            id="password" 
            type="password"
            autoComplete="current-password"
            value={password}
            required
            maxLength={22}
            onChange={(event) => {handleFormChange(event, setPassword)}}
          />
        </div>

        <input className="login_form-submit-btn" type="submit" value={"Sign In"}/>
      </form>
    </div>
  )
}
