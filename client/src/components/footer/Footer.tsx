import { NavLink } from 'react-router'
import { setActiveStyling } from '../../util/utils'
import "./Footer.css"
import { useEffect, useState } from 'react'

export default function Footer() {

    const [currentYear, setCurrentYear] = useState<number>()

    useEffect(() => {
        const year = new Date().getFullYear()
        setCurrentYear(year)
    }, [])

    return (
        <div className='footer'>
            <h3 className='footer_nav-title'>Tools</h3>
            <nav className='footer_nav'>
                <NavLink className="footer_nav-link" style={(state) => setActiveStyling(state)} to="/catalog" > Catalog </NavLink>
                <NavLink className="footer_nav-link" style={(state) => setActiveStyling(state)} to="/comparison" > Comparison </NavLink>
                <NavLink className="footer_nav-link" style={(state) => setActiveStyling(state)} to="/" > Home </NavLink>
                <NavLink className="footer_nav-link" style={(state) => setActiveStyling(state)} to="/collections" > Collections </NavLink>
                <NavLink className="footer_nav-link" style={(state) => setActiveStyling(state)} to="/user/favorites" > Favorites </NavLink>
            </nav>

            <img className='footer_logo' src='./assets/symbol-transparent.png' />

            <div className='footer_divider-line'></div>

           
            <p className='footer_year-copyright'>{currentYear} © THE Pet Food Index</p>
            <a className='footer_logo-link' href='https://www.linkedin.com/in/declan-lacey/' target='_blank'>
                <img className='footer_external-logo' src='./assets/linkedin-logo.png' />
            </a>
            
        
        </div>
    )
}
