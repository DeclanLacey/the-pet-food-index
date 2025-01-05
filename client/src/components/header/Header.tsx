import { NavLink } from 'react-router'
import { useState } from 'react'
import "./BurgerMenu.css"
import "./Header.css"

export default function Header() {

  const [burgerMenuOpen, setBurgerMenuOpen] = useState<boolean>(false)
  const [hasInteracted, setHasInteracted] = useState(false);


  function setActiveStyling(active : {isActive: boolean, isPending: boolean, isTransitioning: boolean}) {
    if (active.isActive) {
      return {textDecoration: "underline"}
    }
  }

  function handleBurgerMenuClick(burgerMenuOpen : boolean, setBurgerMenuOpen: Function) {
    setBurgerMenuOpen(!burgerMenuOpen)
    setHasInteracted(true);

  }

  return (
    <header className='header'>
        <div className={`header_burger-menu ${burgerMenuOpen ? "open" : ""}`} onClick={() => handleBurgerMenuClick(burgerMenuOpen, setBurgerMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <img className='header_logo' src='./assets/symbol-transparent.png'/>

        <nav className={`header_nav ${hasInteracted ? (burgerMenuOpen ? "header_nav-show" : "header_nav-hide") : ""}`}>
            <NavLink className="header_nav-link" style={(state) => setActiveStyling(state)} to="/catalog" > Catalog </NavLink>
            <NavLink className="header_nav-link" style={(state) => setActiveStyling(state)} to="/comparison" > Comparison </NavLink>
            <NavLink className="header_nav-link" style={(state) => setActiveStyling(state)} to="/" > Home </NavLink>
            <NavLink className="header_nav-link" style={(state) => setActiveStyling(state)} to="/collections" > Collections </NavLink>
            <NavLink className="header_nav-link" style={(state) => setActiveStyling(state)} to="/user/favorites" > Favorites </NavLink>
        </nav>

        <nav className={`header_nav-desktop`}>
            <NavLink className="header_nav-link" style={(state) => setActiveStyling(state)} to="/catalog" > Catalog </NavLink>
            <NavLink className="header_nav-link" style={(state) => setActiveStyling(state)} to="/comparison" > Comparison </NavLink>
            <NavLink className="header_nav-link" style={(state) => setActiveStyling(state)} to="/" > Home </NavLink>
            <NavLink className="header_nav-link" style={(state) => setActiveStyling(state)} to="/collections" > Collections </NavLink>
            <NavLink className="header_nav-link" style={(state) => setActiveStyling(state)} to="/user/favorites" > Favorites </NavLink>
        </nav>



        <NavLink to="/user">
          <img className='header_user-icon' src='./assets/user-icon.svg'/>
        </NavLink>
    </header>
  )
}
