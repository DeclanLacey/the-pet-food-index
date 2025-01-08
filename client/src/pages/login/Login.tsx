import { NavLink } from "react-router";
import "./Login.css"

function handleLogin() {

}

export default function Login() {
  return (
    <div className="login">
      <h1 className="login_title">Welcome back</h1>
      <p className="login_subtitle">First time here? <NavLink className="login_subtitle-link" to="/register">Sign up for free</NavLink>.</p>

      <form className="login_form">
        <div className="login_form-input-container">
          <label className="login_form-input-label" htmlFor="email">E-mail</label>
          <input className="login_form-input" type='email' name="email" id="email" autoComplete="email" required/>
        </div>

        <div className="login_form-input-container">
          <label className="login_form-input-label" htmlFor="password">Password</label>
          <input className="login_form-input" name="password" id="password" autoComplete="current-password" required/>
        </div>

        <input className="login_form-submit-btn" type="submit" value={"Sign In"} onSubmit={handleLogin}/>
      </form>
    </div>
  )
}
