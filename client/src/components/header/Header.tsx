import { NavLink } from 'react-router'
import "./Header.css"

export default function Header() {
  return (
    <header className='header'>
        <img className='header_logo' src='./assets/symbol-transparent.png'/>
        <nav className='header_nav'>
            <NavLink className="header_nav-link" to="/catalog" > Catalog </NavLink>
            <NavLink className="header_nav-link" to="/comparison" > Comparison </NavLink>
            <NavLink className="header_nav-link" to="/" > Home </NavLink>
            <NavLink className="header_nav-link" to="/collections" > Collections </NavLink>
            <NavLink className="header_nav-link" to="/user/favorites" > Favorites </NavLink>
        </nav>

        <img className='header_user-icon' src='./assets/user-icon.svg'/>
    </header>
  )
}
