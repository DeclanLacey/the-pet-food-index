import { NavigateFunction, NavLink, useNavigate } from 'react-router'
import "./Register.css"
import { ChangeEvent, FormEvent, useState } from 'react'
import { NewUser } from '../../types/Types'
import { registerNewUser } from '../../util/serverCalls'
import { storeAccessToken, storeRefreshToken } from '../../util/utils'

export async function handleRegister(event: FormEvent<HTMLFormElement>, firstName: string, lastName: string, email: string, password: string, confirmPassword: string, navigate: NavigateFunction) {
  event.preventDefault()
  if (!verifyPasswordsMatch(password, confirmPassword)) {
    window.alert("Passwords do not match")
  }else {
    const newUser : NewUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }

    try {
      const response = await registerNewUser(newUser)
      if(response.accessToken && response.refreshToken) {
        storeAccessToken(response.accessToken)
        storeRefreshToken(response.refreshToken)

        navigate("/user")
      }
    }catch (error) {
      console.error(error);
    }
  }
}

export function verifyPasswordsMatch(passwordOne : string, passwordTwo : string) {
  if (passwordOne === passwordTwo) return true
  return false
}

export function handleFormChange(event : ChangeEvent<HTMLInputElement>, setFunction: Function) {
  setFunction(event.target.value)
}

export default function Register() {

  const [firstName, setFirstName] = useState<string>("") 
  const [lastName, setLastName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const navigate = useNavigate();


  return (
    <div>
      <div className="register">
      <h1 className="register_title">Sign up for free</h1>
      <p className="register_subtitle">Already have an account? <NavLink className="register_subtitle-link" to="/login">Sign in</NavLink>.</p>

      <form className="register_form" onSubmit={(event) => {handleRegister(event, firstName, lastName, email, password, confirmPassword, navigate)}}>
        <div className="register_form-input-container">
          <label className="register_form-input-label" htmlFor="first-name">First Name</label>
          <input 
            className="register_form-input" 
            name="first-name" 
            id="first-name" 
            autoComplete="given-name" 
            value={firstName} 
            required
            onChange={(event) => {handleFormChange(event, setFirstName)}}
            maxLength={40}
          />
        </div>

        <div className="register_form-input-container">
          <label className="register_form-input-label" htmlFor="last-name">Last Name</label>
          <input 
            className="register_form-input" 
            name="last-name" 
            id="last-name" 
            autoComplete="family-name" 
            value={lastName} 
            required
            onChange={(event) => {handleFormChange(event, setLastName)}}
            maxLength={40}
          />
        </div>

        <div className="register_form-input-container">
          <label className="register_form-input-label" htmlFor="new-email">E-mail</label>
          <input 
            className="register_form-input" 
            type='email' 
            name="new-email" 
            id="new-email" 
            autoComplete="email" 
            value={email} 
            required
            onChange={(event) => {handleFormChange(event, setEmail)}}
            maxLength={50}
          />
        </div>

        <div className="register_form-input-container">
          <label className="register_form-input-label" htmlFor="new-password">Password</label>
          <input 
            className="register_form-input" 
            type='password' 
            name="new-password" 
            id="new-password" 
            autoComplete="new-password" 
            value={password} 
            required
            onChange={(event) => {handleFormChange(event, setPassword)}}
            maxLength={22}
          />
        </div>

        <div className="register_form-input-container">
          <label className="register_form-input-label" htmlFor="confirm-password">Confirm Password</label>
          <input 
            className="register_form-input" 
            type='password' 
            name="confirm-password" 
            id="confirm-password" 
            autoComplete="new-password" 
            value={confirmPassword} 
            required
            onChange={(event) => {handleFormChange(event, setConfirmPassword)}}
            maxLength={22}
          />
        </div>

        <input className="register_form-submit-btn" type="submit" value={"Create Account"}/>
      </form>
    </div>
    </div>
  )
}
