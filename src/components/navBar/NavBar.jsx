import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo-medium.png';

import './NavBar.css';

export default function NavBar() {
  return (
    <header className="header-wrapper">
      <nav className="header-content">
        <div className="navigation-logo-wrapper">
          <img src={logo} alt="Company logo" />
        </div>
        <ul>
          <li><NavLink className="nav-link" to={'/'}>Home</NavLink></li>
          <li><NavLink className="nav-link" to={'/overview'}>Alle posts</NavLink></li>
          <li><NavLink className="nav-link" to={'/new post'}>Nieuwe post maken</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}