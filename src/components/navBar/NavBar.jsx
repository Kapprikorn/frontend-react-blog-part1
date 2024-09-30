import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo-medium.png';

import './NavBar.css';
import { useState } from 'react';

export default function NavBar() {
  const [activePage, setActivePage] = useState('');

  return (
    <nav className="header-content">
      <div className="navigation-logo-wrapper">
        <img src={logo} alt="Company logo" />
      </div>
      <ul className="navigation-bar">
        <li><NavLink onClick={() => setActivePage('Home')}
                     className={activePage === 'Home'
                                ? 'nav-link active'
                                : 'nav-link'}
                     to={'/'}>Home</NavLink></li>
        <li><NavLink onClick={() => setActivePage('Overview')}
                     className={activePage === 'Overview'
                                ? 'nav-link active'
                                : 'nav-link'}
                     to={'/overview'}>Alle posts</NavLink></li>
        <li><NavLink onClick={() => setActivePage('New Post')}
                     className={activePage === 'New Post'
                                ? 'nav-link active'
                                : 'nav-link'}
                     to={'/new post'}>Nieuwe post maken</NavLink></li>
      </ul>
    </nav>
  );
}